import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes";
import errorMiddleware from "./middlewares/error.middleware";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRoutes());
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
