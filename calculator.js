import Queue from "./queue.js";
import RPNCalculate from "./rpn-calculator.js";
import Stack from "./stack.js";

export default function expressionCalculator(inputQueue) {
  const postfix = infixToPostfix(inputQueue);
  return RPNCalculate(postfix);
}

const precedence = {
  "^": 5,
  "*": 4,
  "/": 3,
  "+": 2,
  "-": 1,
};

/**
 *
 * @param {Queue<(number | "^" | "*" | "+" | "-" | "/" | "(" | ")")>} inputQueue inputqueue in infix notation
 * @returns {Queue<(number | "^" | "*" | "+" | "-" | "/")>} input as postfix notation
 */
function infixToPostfix(inputQueue) {
  const outputQueue = new Queue();
  const operatorStack = new Stack();

  while (inputQueue.size() > 0) {
    const token = inputQueue.dequeue();
    if (typeof token === "number") {
      outputQueue.enqueue(token);
    } else {
      switch (token) {
        case "(":
          operatorStack.push(token);
          break;
        case ")":
          while (operatorStack.peek() !== "(") {
            if (operatorStack.size() === 0) {
              throw new Error("Mismatching parenthesis");
            }
            outputQueue.enqueue(operatorStack.pop());
          }
          operatorStack.pop(); // remove "(" from stack
          break;
        case "*":
        case "/":
        case "+":
        case "-":
        case "^": {
          const o1 = token;
          let o2 = operatorStack.peek();
          while (o2 && o2 !== "(" && precedence[o2] > precedence[o1]) {
            outputQueue.enqueue(operatorStack.pop());
            o2 = operatorStack.peek();
          }
          operatorStack.push(o1);
          break;
        }
      }
    }
  }

  while (operatorStack.size() > 0) {
    let o = operatorStack.peek();
    if (o === "(") {
      throw new Error("Mismatching parenthesis");
    }
    o = operatorStack.pop();
    outputQueue.enqueue(o);
  }

  return outputQueue;
}
