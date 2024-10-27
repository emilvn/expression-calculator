import expressionCalculator from "./calculator.js";
import Queue from "./queue.js";

const inputQueue = new Queue();
inputQueue.enqueue("(");
inputQueue.enqueue(2);
inputQueue.enqueue("+");
inputQueue.enqueue(3);
inputQueue.enqueue(")");
inputQueue.enqueue("*");
inputQueue.enqueue(4);
inputQueue.enqueue("-");
inputQueue.enqueue(5);
inputQueue.enqueue("/");
inputQueue.enqueue("(");
inputQueue.enqueue(1);
inputQueue.enqueue("+");
inputQueue.enqueue(1);
inputQueue.enqueue(")");

console.log(expressionCalculator(inputQueue)); // should be 17.5
