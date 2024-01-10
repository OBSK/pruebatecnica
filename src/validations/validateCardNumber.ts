export function validateCreditCardNumber(cardNumber: string): boolean {
  if (!/^\d+$/.test(cardNumber.replace(/\s/g, ''))) {
      return false;
  }

  const digits: number[] = cardNumber.replace(/\s/g, '').split('').map(Number);
  const length: number = digits.length;

  let sum: number = 0;
  let isSecondDigit: boolean = false;

  for (let i: number = length - 1; i >= 0; i--) {
      let digit: number = digits[i];

      if (isSecondDigit) {
          digit *= 2;
          if (digit > 9) {
              digit -= 9;
          }
      }

      sum += digit;
      isSecondDigit = !isSecondDigit;
  }

  return sum % 10 === 0;
}
