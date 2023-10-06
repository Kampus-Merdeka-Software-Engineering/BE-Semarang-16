import { Sequelize } from "sequelize";
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
});

export default course;

// kalau table course nggaada dibuat pakai ini

(async () => {
  await coursedb.sync();
})();
