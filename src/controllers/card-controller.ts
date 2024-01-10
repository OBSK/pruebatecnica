import { CardService } from './../services/card-service';

export class CardController {
    cardService:CardService;
    constructor(cardService: CardService) {
        this.cardService = cardService
    }

    store(req: any, res: any) {
        
        //Si no lo acepta crear variable Interface (pasar variable)
        this.cardService.save(req.body);
    }
}