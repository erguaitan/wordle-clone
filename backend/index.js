import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path"
import fs from "node:fs/promises";

const app = express();
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT;
const __dirname = path.resolve();

app.use(cors({
  origin: "http://localhost:5173",
}))

app.get("/solution", async (req, res) => {
  const fileContent = await fs.readFile("./data/words.json", "utf-8");
  const wordsData = JSON.parse(fileContent);
  const word = wordsData[Math.floor(Math.random() * wordsData.length)]

  res.status(200).json({ data: word });
});

app.get("/solution/:id", async (req, res) => {
  const wordId = req.params.id;

  const fileContent = await fs.readFile("./data/words.json", "utf-8");
  const wordsData = JSON.parse(fileContent);
  const word = wordsData.find(word => word.id == wordId);

  res.status(200).json({ data: word });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("/", (req, res) => {
      res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
