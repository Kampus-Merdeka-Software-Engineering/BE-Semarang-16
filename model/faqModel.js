const DataTypes = require('sequelize')
const connection = require('../config/database');

const faq = connection.define("faq", {
    faqid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    pertanyaan: {
        type: DataTypes.STRING,
    },
});

module.exports = faq;

(async () => {
    await connection.sync();
})();