//your code here

class OutOfRangeError extends Error {
  constructor(value) {
    super(`Expression should only consist of integers and +-/* characters and not ${value}`);
    this.name = this.constructor.name;
  }
}

class InvalidExprError extends Error {
  constructor() {
    super('Expression should not have an invalid combination of expression');
    this.name = this.constructor.name;
  }
}

function evalString(expr) {
  // Check for invalid characters
  const regex = /^[0-9+\-*/\s]+$/;
  if (!regex.test(expr)) {
    throw new OutOfRangeError(expr);
  }

  // Check for invalid expression combinations
  const invalidRegex = /[+\-*/]{2,}/;
  if (invalidRegex.test(expr)) {
    throw new InvalidExprError();
  }

  // Check for invalid starting or ending operators
  if (/^[+\-*/]/.test(expr)) {
    throw new SyntaxError('Expression should not start with invalid operator');
  }
  if (/[+\-*/]$/.test(expr)) {
    throw new SyntaxError('Expression should not end with invalid operator');
  }

  // Evaluate expression
  return eval(expr);
}

// Example usage
try {
  const result = evalString('1 + 2 - 3 * 4 / 5');
  console.log(result); // -0.19999999999999996
} catch (e) {
  console.error(e);
}

