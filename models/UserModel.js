const DataTypes = require('sequelize');
import coursedb from "../config/Database.js";


const User = coursedb.define("User", {
  
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    },
  username: {
    type: DataTypes.STRING,
    len : [3,15]
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
