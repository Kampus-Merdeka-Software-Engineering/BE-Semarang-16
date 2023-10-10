import { Sequelize, DataTypes } from "sequelize"; // Impor DataTypes dari Sequelize
import db from "../config/Database.js";

const Course = db.define("courses", {
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

export default Course;

// Jika tabel "course" tidak ada, buat tabel menggunakan ini
(async () => {
  await db.sync();
})();
