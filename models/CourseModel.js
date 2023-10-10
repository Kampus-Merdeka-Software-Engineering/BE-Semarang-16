import { Sequelize, DataTypes } from "sequelize"; // Impor DataTypes dari Sequelize
import db from "../config/Database.js";

const course = db.define("course", {
  course_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  course_name: {
    type: DataTypes.STRING,
  },
  course_category: {
    type: DataTypes.STRING,
  },
  course_level: {
    type: DataTypes.STRING,
  },
});

export default course;

// Jika tabel "course" tidak ada, buat tabel menggunakan ini
(async () => {
  await db.sync();
})();
