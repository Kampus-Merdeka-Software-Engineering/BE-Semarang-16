import { Sequelize, DataTypes } from "sequelize"; // Impor DataTypes dari Sequelize
import coursedb from "../config/Database.js";

const course = coursedb.define("course", {
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
  }
},
{
  timestamps: true, 
  createdAt: 'createdAt', 
  updatedAt: 'updatedAt', 
});

export default course;

// Jika tabel "course" tidak ada, buat tabel menggunakan ini
(async () => {
  await coursedb.sync();
})();
