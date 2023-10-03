const faqModel = require('../model/faqModel');

const createfaq = async (req, res) => {
    try {
        await faqModel.create(req.body);
        res.status(201).json({ Message: "Data Berhasil Dibuat" });
    } catch (error) {
        res.send(error.message);
    }
};

const getAllfaq = async (req, res) => {
    try {
        const faq = await faqModel.findAll();
        res.status(200).json(faq);
    } catch (error) {
        console.log(error);
    }
};
module.exports = { getAllfaq, createfaq };