import express from 'express';
import {CardController} from '../controllers/card-controller';
import {CardService} from '../services/card-service';
import {CardRepository} from '../repository/card-repository';
import cardValidatorMiddleware from '../middlewares/card-validator.middleware';
import authMiddleware from '../middlewares/verify-token.middleware';

const cardRepository = new CardRepository();
const cardService = new CardService(cardRepository);
const cardController = new CardController(cardService);
const router = express.Router();

router.post("/card", cardValidatorMiddleware, cardController.store);
router.get("/token:id", authMiddleware, cardController.getById);



export default router;