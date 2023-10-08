import { Sequelize, DataTypes } from "sequelize"; // Impor DataTypes dari Sequelize
import coursedb from "../config/Database.js";

const User = coursedb.define("User", {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    validate: {
      len: [3, 15], // Menggunakan validate untuk memeriksa panjang username
    },
  },
  email: {
    type: DataTypes.STRING,
    validate: {
      isEmail: true, // Menggunakan validate untuk memeriksa email
    },
  },
  password: {
    type: DataTypes.STRING,
  },
});

export default User;

// Jika tabel "User" tidak ada, buat tabel menggunakan ini
(async () => {
  await User.sync();
})();
