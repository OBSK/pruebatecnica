export class ServerError extends Error {
    public code: number;
    constructor(code: number, error: string) {
      super(error);
      this.code = code;
    }
  }