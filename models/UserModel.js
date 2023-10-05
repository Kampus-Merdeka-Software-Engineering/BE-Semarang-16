import { DataTypes } from "sequelize";
import coursedb from "../config/Database.js";


const User = coursedb.define("User", {
  
  userid: {
    type: DataTypes.STRING,
    },
  username: {
    type: DataTypes.STRING,
    len : [3,12]
  },
  name: {
    type: DataTypes.STRING,
    len : [3,100]
  },
  email: {
    type: DataTypes.STRING,
    isEmail: true
  },
  password: {
    type: DataTypes.STRING,
  },
});


export default User;

// kalau belum ada table patient, di buat pakai ini

(async () => {
  await coursedb.sync();
})();
