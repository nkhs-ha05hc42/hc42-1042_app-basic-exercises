import { examsModel } from "./q9_7_2Model.mjs";

const getExamById = async (req, res) => {
  const { id } = req.params;  // ← ここで取得します！

  try {
    const exam = await examsModel.getExamById(id);

    if (!exam) {
      return res.status(404).json({ status: "not found" });
    }

    res.json({ status: "success", data: exam });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}

export const examsController2 = {
  getExamById,  // ← ルーターで呼び出す関数名
}