import helmet from 'helmet';
import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import {CardController} from './controllers/card-controller';
import {CardService} from './services/card-service';
import {CardRepository} from './repository/card-repository';
import cardValidatorMiddleware from './middlewares/card-validator.middleware';
import cardRoutes from './routes/card.routes';

const cardRepository = new CardRepository();
const cardService = new CardService(cardRepository);
const cardController = new CardController(cardService);

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use('/', cardRoutes);

app.use((req, res) => {
  res.status(404).send('Recurso no encontrado');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
