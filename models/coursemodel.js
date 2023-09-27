import { DataTypes } from "sequelize";

import db from "../config/Database.js";
import coursedb from "../config/Database.js";

const courses = coursedb.define("courses", {
  courseid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  coursename: {
    type: DataTypes.STRING,
  },
  coursetype: {
    type: DataTypes.STRING,
  },
  courselevel: {
    type: DataTypes.STRING,
  },
});

export default courses;

// If table "courses" doesn't exist, this function creates it

(async () => {
  await db.sync();
})();
