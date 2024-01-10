export function validateCVV(cvv: string): boolean {
    const cvvRegex: RegExp = /^[0-9]{3,4}$/;
    return cvvRegex.test(cvv);
  }