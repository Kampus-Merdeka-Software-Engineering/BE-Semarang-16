const DataTypes = require('sequelize')
const connection = require('../config/database');

const tutor = connection.define("tutor", {
    tutorid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nama: {
        type: DataTypes.STRING,
    },
    keahlian: {
        type: DataTypes.STRING,
    },
},
{
    timestamps: true, 
    createdAt: 'createdAt', 
    updatedAt: 'updatedAt', 
});

module.exports = tutor;

(async () => {
    await connection.sync();
})();