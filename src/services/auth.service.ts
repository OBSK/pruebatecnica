import { ServerError } from "../errors/server.error";
import { CardRepository } from "../repository/card.repository";
import jwtService from "./jwt.service";

class AuthService {
  public async login({ card_number, cvv, expiration_month, expiration_year, email }: {
    card_number: string;
    cvv: string;
    expiration_month: number;
    expiration_year: number;
    email: string;
  }): Promise<any> {
    const cardRepository = new CardRepository();
    const card = {
      card_number: card_number,
      cvv: cvv,
      expiration_month: expiration_month,
      expiration_year: expiration_year,
      email: email
    };

    const token = await jwtService.generate(card);
    await cardRepository.save(token, card);
    if(typeof token === 'object') {
      return token;
    }
    return new ServerError(400, "Invalid Data Type");
  }

  public async getDataCard(token: string): Promise<string | null> {
    const cardRepository = new CardRepository();
    const saveToken = await cardRepository.getDataCard(token);
    return saveToken;
  }
}

export default new AuthService();
