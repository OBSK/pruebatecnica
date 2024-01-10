import helmet from 'helmet';
import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import cardRoutes from './routes/card.routes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use("/card", cardRoutes());
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
