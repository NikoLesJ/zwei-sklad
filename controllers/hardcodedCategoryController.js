const hardcodedCategoryController = {
    getCategories: (req, res) => {
      const categories = {
        status: 1,
        result: [
          { categoryID: 8504, parentID: 7264, realcat: 0, name: "Мобільний Wi-Fi роутер" },
          { categoryID: 7928, parentID: 7264, realcat: 0, name: 'GSM модемы' },
          { categoryID: 8524, parentID: 7264, realcat: 0, name: 'Мобільний модем' },
          { categoryID: 1191, parentID: 1181, realcat: 0, name: 'Ноутбуки' },
          { categoryID: 1192, parentID: 1181, realcat: 0, name: 'Планшети' },
          { categoryID: 1107, parentID: 1181, realcat: 14, name: 'Ігрові приставки' },
          { categoryID: 1274, parentID: 1266, realcat: 14, name: 'Телефони мобільні' },
          { categoryID: 1287, parentID: 1286, realcat: 14, name: 'Акумулятори зовнішні' },
          { categoryID: 7378, parentID: 1290, realcat: 14, name: 'Автотримачі та автокомплекти' }
        ]
      };
      
      res.json(categories);
    }
  };
  
  module.exports = hardcodedCategoryController;
  