import jwt from "jsonwebtoken";

class JwtService {
  public generate(payload: {
    card_number: string;
    cvv: string;
    expiration_month: number;
    expiration_year: number;
    email: string;
  }): { access: string } {
    const access: string = jwt.sign(
      payload,
      process.env.JWT_KEY as string,
      {
        subject: payload.card_number,
        expiresIn: parseInt(process.env.JWT_ACCESS_TIME as string, 10),
      }
    );
    
    return { access };
  }
}

export default new JwtService();

