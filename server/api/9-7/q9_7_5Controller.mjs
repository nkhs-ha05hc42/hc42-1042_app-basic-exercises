import { examsModel } from "./q9_7_5Model.mjs";

const deleteExam = async (req, res) => {
  const { id } = req.params; // URLからIDを取得

  try {
    const deletedExam = await examsModel.deleteExam(id);

    if (!deletedExam) {
      return res.status(404).json({ status: "not found", message: "指定したIDのデータが存在しません。" });
    }

    res.json({ status: "success", data: deletedExam });
  } catch (error) {
    console.error("DBエラー:", error);
    res.status(500).json({ status: "error", message: "データベースエラーが発生しました。" });
  }
}

export const examsController5 = {
  deleteExam,
}