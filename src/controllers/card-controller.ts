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
    //La respuesta del método debe retornar solo los datos de la tarjeta (sin CVV)
    //en caso el elemento ya no esté presente (porque expiró) debe retornar una
    //respuesta coherente indicando la espiración.
    getById(req: Request, res: any) {
        this.cardService.getCard(req.body.id);
    }
    
}