export function validateCreditCardNumber(cardNumber: string): boolean {
    if (!/^\d+$/.test(cardNumber.replace(/\s/g, ''))) {
      return false;
    }
  
    const digits = cardNumber.replace(/\s/g, '').split('').map(Number);
    const length = digits.length;
  
    let sum = 0;
    let isSecondDigit = false;
  
    for (let i = length - 1; i >= 0; i--) {
      let digit = digits[i];
  
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
  