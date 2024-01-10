import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { ServerError } from '../errors/server.error';

const authMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  if (req.headers.authorization) {
    const [bearerToken, token] = req.headers.authorization.split(" ");

    if (bearerToken === "Bearer") {
      try {
        const decoded = jwt.verify(token, process.env.JWT_KEY as string);
        return next();
      } catch (err) {
        next(new ServerError(401, "Invalid jwt token"));
      }
    }

    next(new ServerError(401, "Invalid bearer token"));
  } else {
    next(new ServerError(400, "Authorization header is not present"));
  }
};

export default authMiddleware;
