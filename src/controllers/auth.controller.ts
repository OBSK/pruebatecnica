import { Request, Response, NextFunction } from 'express';
import authService from '../services/auth.service';

class AuthController {
  public async generatetoken(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const accessToken = await authService.login(req.body);
      return res.status(200).send(accessToken);
    } catch (err) {
      next(err);
    }
  }

  public async verifyToken(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      if (req.headers.authorization != undefined) {
        const token: string[] = req.headers.authorization.split(" ");
        const data = await authService.getDataCard(token[1]);
        if (data != null) {
          return res.status(200).send(JSON.parse(data));
        }
      }
      return res.status(400).send({ error: "Bad Request" });
    } catch (err) {
      next(err);
    }
  }
}

export default new AuthController();

