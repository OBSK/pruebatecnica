import express, { Router } from "express";
import authController from "../controllers/auth.controller";
import cardValidatorMiddleware from "../middlewares/card-validator.middleware";
import verifyTokenMiddleware from "../middlewares/verify-token.middleware";

const router = (): Router => {
  const router = express.Router();

  router.post("/tokens", cardValidatorMiddleware, authController.generatetoken);
  router.get("/tokens", verifyTokenMiddleware, authController.verifyToken);

  return router;
};

export default router;

