import { Sequelize, DataTypes } from "sequelize"; // Impor DataTypes dari Sequelize
import coursedb from "../config/Database.js";

const course = coursedb.define("course", {
  course_id: {
    type: DataTypes.INTEGER, // Gunakan DataTypes.INTEGER bukan DataTypes.INT
    primaryKey: true,
    autoIncrement: true,
  },
  course_name: {
    type: DataTypes.STRING,
  },
  course_category: {
    type: DataTypes.STRING,
  }
});

export default course;

// Jika tabel "course" tidak ada, buat tabel menggunakan ini
(async () => {
  await coursedb.sync();
})();
