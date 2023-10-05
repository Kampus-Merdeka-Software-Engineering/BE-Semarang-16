import {DataTypes} from "sequelize"
import coursedb from "../config/Database.js";


const course = coursedb.define("course", {
  
  courseid: {
    type: DataTypes.STRING,
  },
  coursetype: {
    type: DataTypes.STRING,
  },
  courselevel: {
    type: DataTypes.STRING,
  }
});

export default course;

// kalau table course nggaada dibuat pakai ini

(async () => {
  await coursedb.sync();
})();
