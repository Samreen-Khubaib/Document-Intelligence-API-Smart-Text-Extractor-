exports.extractFields = (text) => {
  const invoiceRegex =
    /\b(?:Invoice|Order)\s*(?:No\.?|Number|#)?[:.\s]*(\w{2,}-?\d{3,}|\d{3,})\b|\b(?:Invoice|Order)\s*(?:No\.?|Number|#)?[:.\s]*\n\s*(\w{2,}-?\d{3,}|\d{3,})\b/i;
  const dateRegex1 = /\b\d{1,2}[./-]\d{1,2}[./-]\d{2,4}\b/;
  const dateRegex2 =
    /\b\d{1,2}\s+(Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:t(?:ember)?)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\s+\d{4}\b/i;

  const paymentStatusRegex = /Payment\s*Status[:\s]*([A-Za-z]+)/i;
  const deliveryDateRegex =
    /Delivery\s*Date[:\s]*(\d{1,2}\s+\w+\s+\d{4}|\d{2}[./-]\d{2}[./-]\d{4})/i;

  const customerNameRegex = /Customer\s*Name[:\s]*([^\n\r]+)/i;

  const taxMatch = text.match(
    /(?:Sales\s+Tax|Tax(?:\s+\(\d+%\))?)\s*[^\d\n\r]*([$]?\d+(?:[.,]\d{2})?)/i
  );

  const totalMatch = text.match(
    /(?:\bTotal\b|\bGrand Total\b|\bTotal Amount\b|\bAmount Due\b|\bTOTAL DUE\b)[\s:]*\$?\s*([0-9]+(?:[.,][0-9]{2})?)/i
  );

  const total = totalMatch ? totalMatch[1] : null;

  const invoiceMatch = text.match(invoiceRegex);
  const dateMatch1 = text.match(dateRegex1);
  const dateMatch2 = text.match(dateRegex2);
  const paymentStatusMatch = text.match(paymentStatusRegex);
  const deliveryDateMatch = text.match(deliveryDateRegex);
  const customerNameMatch = text.match(customerNameRegex);

  const itemLines = text.split('\n').filter((line) =>
    /^[A-Za-z\s]+\s+\d+(\.\d+)?\s+\d+(\.\d+)?$/.test(line.trim())
  );

  const fields = {};

  if (invoiceMatch) {
    fields.invoice_number = invoiceMatch[1] || invoiceMatch[2];
  }

  if (total) fields.total = total;
  if (dateMatch1) {
    fields.date = dateMatch1[0];
  } else if (dateMatch2) {
    fields.date = dateMatch2[0];
  }
  if (paymentStatusMatch) fields.payment_status = paymentStatusMatch[1];
  if (deliveryDateMatch) fields.delivery_date = deliveryDateMatch[1];
  if (customerNameMatch) fields.customer_name = customerNameMatch[1].trim();
  if (itemLines.length > 0) fields.item_list = itemLines;
  if (taxMatch) fields.tax = taxMatch[1];

  return fields;
};
