import PromptSync from "prompt-sync";

const prompt = PromptSync();

function add(a: number, b: number): number {
  return a + b;
}
const sum1: number = add(10, 15);
const sum2: number = add(9, 5);
console.log("sum1 is: ", sum1, " sum2 is: ", sum2);
const x: number = Number(prompt("Enter a number: "));

console.log(x);
