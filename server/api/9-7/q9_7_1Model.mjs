import { query } from "../../db/manager.mjs";

const getAllExams = async () => {
  const result = await query("SELECT * FROM exams;");
  return result.rows;
}

export const examsModel = {
  getAllExams,
}