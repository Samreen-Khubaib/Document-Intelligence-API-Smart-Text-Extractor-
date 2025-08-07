const fs = require('fs');
const path = require('path');

const historyFile = path.join(__dirname, '../storage/history.json');

exports.saveToHistory = (fileName, fields) => {
  const history = this.getHistory();
  history.push({
    file_name: fileName,
    date_processed: new Date().toISOString(),
    fields
  });
  fs.writeFileSync(historyFile, JSON.stringify(history, null, 2));
};

exports.getHistory = () => {
  if (!fs.existsSync(historyFile)) return [];
  const data = fs.readFileSync(historyFile);
  return JSON.parse(data);
};
