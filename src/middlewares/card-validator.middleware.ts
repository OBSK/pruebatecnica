import { NextFunction, Request, Response  } from "express";
import { validateEmail } from "../utils/validateEmail.util";
import { validateCreditCardNumber } from "../utils/validateCardNumber.util";
import { validateCVV } from "../utils/validateCVV.util";

export default (req: Request, res: Response, next: NextFunction) => {
    const CURRENT_YEAR = new Date().getFullYear();
    if(req.body.card_number.length != 16 ) {
        res.status(400).send({
            error: "Invalid Card Number",
        });
        return;
    }

    if(!validateCVV(req.body.cvv)) {
        res.status(400).send({
            error: "Invalid CVV"
        });
        return;
    }
    
    if(Number(req.body.expiration_month) == 0 && Number(req.body.expiration_month) > 12) {
        res.status(400).send({
            error: "Invalid Expiration Month"
        });
        return;
    }

    if(req.body.expiration_year > CURRENT_YEAR + 5) {
        res.status(400).send({
            error: "Invalid Expiration Year"
        });
        return;
    }

    if(!validateEmail(req.body.email)) {
        res.status(400).send({
            error: "Invalid Email"
        });
        return;
    }

    if(!validateCreditCardNumber(req.body.card_number)) {
        res.status(400).send({
            error: "Invalid Credit Card Number"
        });
        return;
    }
    
    next();
} 