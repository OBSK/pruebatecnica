import { Card } from "../models/card.model";
import { CardRepository } from "../repository/card-repository";
import { signJwt } from "../utils/jwt.util";

export class CardService {
    repository: CardRepository;
    save(card:Card) {
        const token = signJwt(card);
        this.repository.save(token, card);
    }
    constructor(repository:CardRepository) {
        this.repository = repository;
    }
} 