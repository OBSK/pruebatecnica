import { Card } from "../interfaces/card.model";
import { CardRepository } from "../repository/card-repository";
import { signJwt, verifyJwt } from "../utils/jwt.util";

export class CardService {
    repository: CardRepository;

    save(card:Card) {
        const expirationTime = Math.floor(Date.now() / 1000) + 60;
        const token = signJwt(card, { expiresIn: expirationTime });
        this.repository.save(token, card);
    }

    getCard(token: string) {
        this.repository.getByToken(token);
    }

    constructor(repository:CardRepository) {
        this.repository = repository;
    }
} 