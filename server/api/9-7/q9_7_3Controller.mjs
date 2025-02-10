import { examsModel } from "./q9_7_3Model.mjs";

const createExam = async (req, res) => {
  const { user_id, year, month, day, name, score } = req.body;

  // 入力バリデーション
  if (!user_id || !year || !month || !day || !name || score === undefined) {
    return res.status(400).json({ status: "error", message: "全ての項目が必要です。" });
  }

  try {
    const newExam = await examsModel.insertExam(user_id, year, month, day, name, score);
    res.status(201).json({ status: "success", data: newExam });
  } catch (error) {
    console.error("DBエラー:", error);
    res.status(500).json({ status: "error", message: "データベースエラーが発生しました。" });
  }
}

export const examsController3 = {
  createExam,
}