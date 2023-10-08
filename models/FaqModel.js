import { Sequelize, DataTypes } from "sequelize"; // Impor DataTypes dari Sequelize
import coursedb from "../config/Database.js";

const faq = coursedb.define("faq", {
    faqid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    pertanyaan: {
        type: DataTypes.STRING,
    },
},
{
    timestamps: true, 
    createdAt: 'createdAt', 
    updatedAt: 'updatedAt', 
});

export default faq;

// Jika tabel "faq" tidak ada, buat tabel menggunakan ini
(async () => {
  await coursedb.sync();
})();