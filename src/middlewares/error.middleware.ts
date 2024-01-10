import { ErrorRequestHandler } from 'express';

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  const { code, message } = err;
  res.status(code || 500).send({
    error: message,
  });
};

export default errorHandler;
