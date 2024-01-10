import { Request, Response, NextFunction } from 'express';
import { validateCVV } from "../validations/validateCVV";
import { validateCreditCardNumber } from "../validations/validateCardNumber";
import { validateEmail } from "../validations/validateEmail";
import { ServerError } from "../errors/server.error";

export default async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const CURRENT_YEAR: number = new Date().getFullYear();

    if (req.body.card_number.length !== 16) {
        next(new ServerError(400, "Invalid Card Number Length"));
        return;
    }

    if (!validateCVV(req.body.cvv)) {
        next(new ServerError(400, "Invalid CVV"));
        return;
    }

    const expirationMonth: number = Number(req.body.expiration_month);
    if (expirationMonth === 0 || expirationMonth > 12) {
        next(new ServerError(400, "Invalid Expiration Month"));
        return;
    }

    const expirationYear: number = Number(req.body.expiration_year);
    if (expirationYear > CURRENT_YEAR + 5) {
        next(new ServerError(400, "Invalid Expiration Year"));
        return;
    }

    if (!validateEmail(req.body.email)) {
        next(new ServerError(400, "Invalid Email"));
        return;
    }

    if (!validateCreditCardNumber(req.body.card_number)) {
        next(new ServerError(400, "Invalid Credit Card Number"));
        return;
    }

    next();
};
