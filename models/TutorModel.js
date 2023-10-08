import { Sequelize, DataTypes } from "sequelize"; // Impor DataTypes dari Sequelize
import coursedb from "../config/Database.js";

const tutor = coursedb.define("tutor", {
    tutorid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nama: {
        type: DataTypes.STRING,
    },
    keahlian: {
        type: DataTypes.STRING,
    },
},
{
    timestamps: true, 
    createdAt: 'createdAt', 
    updatedAt: 'updatedAt', 
});

export default tutor;

// Jika tabel "tutor" tidak ada, buat tabel menggunakan ini
(async () => {
  await coursedb.sync();
})();