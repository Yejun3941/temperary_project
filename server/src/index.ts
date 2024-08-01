import express from "express";
import bodyParser from "body-parser";
import path from "path";
import connectDB from "./config/db";
import userRoutes from "./routes/userRoutes";

const app = express();
const port = 3000;

// MongoDB 연결 설정
connectDB();

// 미들웨어 설정
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../../client/build")));

// API 라우트 설정
app.use("/api", userRoutes);

// 모든 기타 경로에 대해 React 애플리케이션의 index.html 반환
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../client/build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
