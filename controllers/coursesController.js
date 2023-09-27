import Patient from "../models/coursemodel.js";

export const signUpPatient = async (req, res) => {
  try {
    await Patient.create(req.body);
    res.status(201).json({ msg: "Patient created" });
  } catch (error) {
    res.send(error.message);
  }
};

export const findAllCourses = async (req, res) => {
  try {
    const course = await course.findAll();
    res.status(200).json(courses);
  } catch (error) {
    res.send(error.message);
  }
};

export const searchCourse = async (req, res) => {
  try {
    const course = await course.findOne({ where: { email: req.body.id } });
    res.status(200).json(course);
  } catch (error) {
    res.send(error.message);
  }
};
