const tutorModel = require('../model/tutorModel');

const createtutor = async (req, res) => {
    try {
        await tutorModel.create(req.body);
        res.status(201).json({ Message: "Data Berhasil Dibuat" });
    } catch (error) {
        res.send(error.message);
    }
};

const getAlltutor = async (req, res) => {
    try {
        const tutor = await tutorModel.findAll();
        res.status(200).json(tutor);
    } catch (error) {
        console.log(error);
    }
};
module.exports = { getAlltutor, createtutor };