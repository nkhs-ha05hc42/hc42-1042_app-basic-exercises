import { examsModel } from "./q9_7_1Model.mjs";

const getAllExams = async (req, res) => {
  try {
    const exams = await examsModel.getAllExams();
    res.json({ status: "success", list: exams });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}

export const examsController = {
  getAllExams,
}