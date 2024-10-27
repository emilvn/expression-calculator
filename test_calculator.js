import expressionCalculator from "./calculator.js";
import Queue from "./queue.js";

const inputQueue = new Queue();
inputQueue.enqueue(2);
inputQueue.enqueue("+");
inputQueue.enqueue(3);
inputQueue.enqueue("*");
inputQueue.enqueue(4);

console.log(expressionCalculator(inputQueue));
