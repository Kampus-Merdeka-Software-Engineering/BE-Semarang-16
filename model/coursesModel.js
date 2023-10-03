const DataTypes = require('sequelize')
const connection = require('../config/database');

const courses = connection.define("courses", {
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
        type: DataTypes.INTEGER,
    },
}, {
    timestamps: true, 
    createdAt: 'createdAt', 
    updatedAt: 'updatedAt', 
});

module.exports = courses;

(async () => {
    await connection.sync();
})();
