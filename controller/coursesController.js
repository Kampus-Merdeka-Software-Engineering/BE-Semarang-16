const coursesModel = require('../model/coursesModel');

const createcourses = async (req, res) => {
    try {
        await coursesModel.create(req.body);
        res.status(201).json({ Message: "Data Berhasil Dibuat" });
    } catch (error) {
        res.send(error.message);
    }
};

const getAllcourses = async (req, res) => {
    try {
        const courses = await coursesModel.findAll();
        res.status(200).json(courses);
    } catch (error) {
        console.log(error);
    }
};
module.exports = { getAllcourses, createcourses };