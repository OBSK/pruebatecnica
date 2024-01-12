import { Request, Response, NextFunction } from 'express';
import middlewareFunction from '../src/middlewares/card-validator.middleware';
import { ServerError } from '../src/errors/server.error';
//Middleware
describe('Middleware Function', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let next: jest.Mock<NextFunction>;

  beforeEach(() => {
    req = { body: {} };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    next = jest.fn();
  });

  it('should return 400 for invalid card number length', async () => {
    req.body.card_number = '12345';

    await middlewareFunction(req as Request, res as Response, next);

    expect(next).toHaveBeenCalledWith(new ServerError(400, 'Invalid Card Number Length'));
    expect(res.status).not.toHaveBeenCalled();
    expect(res.json).not.toHaveBeenCalled();
  });

});