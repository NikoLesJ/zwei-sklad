const path = require('path');
const xlsx = require('xlsx');

exports.getExcelData = (req, res) => {
  try {
    const filePath = path.join(__dirname, '../data/category_report_83244.xlsx');
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(sheet);

    console.log('Raw Excel Data:', data); // Логирование исходных данных

    if (data.length === 0) {
      console.log('No data found in Excel file');
      return res.status(404).json({ error: 'No data found' });
    }

    // Группировка данных
    const groupedData = data.reduce((acc, row) => {
      const paramId = row['ID параметра'];
      const paramName = row['Назва параметра'];
      const paramValue = row['Назва значення'];

      if (!paramId || !paramName || !paramValue) {
        return acc; // Пропуск строк с неполными данными
      }

      if (!acc[paramId]) {
        acc[paramId] = {
          paramName: paramName,
          values: []
        };
      }
      acc[paramId].values.push(paramValue);

      return acc;
    }, {});

    console.log('Grouped Data:', groupedData); // Логирование сгруппированных данных

    res.json(groupedData);
  } catch (error) {
    console.error('Error reading Excel file:', error);
    res.status(500).json({ error: 'Ошибка при чтении Excel файла' });
  }
};
