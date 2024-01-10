import { Request, Response, NextFunction } from "express";
import { ServerError } from "../errors/server.error";
import { verifyJwt } from "../utils/jwt.util";

const authMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  if (req.headers.authorization) {
    const [bearerToken, token] = req.headers.authorization.split(" ");
    if (bearerToken === "Bearer") {
      try {
        const payload = verifyJwt(token);
        return next(payload);
        
      } catch (err) {
        next(new ServerError(401, "Invalid jwt token"));
      }
    }
    next(new ServerError(401, "Invalid bearer token"));
  }
  next(new ServerError(400, "Authorization header is not present"));
};

export default authMiddleware;
