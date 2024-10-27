import Stack from "./stack.js";

/**
 *
 * @param {Queue<(number | "^" | "*" | "+" | "-" | "/")>} inputQueue
 * @returns {number | undefined} returns the result or undefined if inputqueue is empty.
 */
export default function RPNCalculate(inputQueue) {
  const stack = new Stack();
  while (inputQueue.size() > 0) {
    let val = inputQueue.dequeue();
    switch (typeof val) {
      case "number":
        stack.push(val);
        break;
      case "string":
        operation(val, stack);
        break;
      default:
        break;
    }
  }
  return stack.get(0);
}

function operation(operand, stack) {
  const b = stack.pop();
  const a = stack.pop();
  switch (operand) {
    case "+":
      stack.push(a + b);
      break;
    case "-":
      stack.push(a - b);
      break;
    case "*":
      stack.push(a * b);
      break;
    case "/":
      stack.push(a / b);
      break;
    case "^":
      stack.push(a ** b);
      break;
    default:
      break;
  }
}
