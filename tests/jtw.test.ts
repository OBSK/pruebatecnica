// JwtService.ts
import jwt from 'jsonwebtoken';

class JwtService {
  private secretKey: string;

  constructor(secretKey: string) {
    this.secretKey = secretKey;
  }

  public generate(payload: any): string {
    return jwt.sign(payload, this.secretKey);
  }

  public verify(token: string): any {
    return jwt.verify(token, this.secretKey);
  }
}

export default JwtService;

