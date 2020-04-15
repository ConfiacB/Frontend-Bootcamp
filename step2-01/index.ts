// TODO: import the fib(n) function and the constant from './fibonacci.ts'
import FibConst, { fib } from './fibonacci';

// TODO: import Stack from ...
import { Stack } from './stack';

// Do the exercises here, outputting results using console.log()
console.log('hello world');

// ---- Modules ----

// TODO: log the result of fib(FibConst)
console.log('fibonnaci result : ', fib(FibConst));

// ---- Types and Interfaces ----

// TODO: define TrafficLight type
type TrafficLight = 'red' | 'green' | 'yellow';

// TODO: define Car interface
interface Car {
  wheels: number;
  color: string;
  make: string;
  model: string;
}

// TODO: create Car instance
const myCar: Car = {
  wheels: 4,
  color: 'black',
  make: 'renault',
  model: 'unModel'
};

// ---- Generics ----

// TODO: Demonstrate the Stack
const myStack = new Stack<number>();
myStack.push(1);
myStack.push(2);
console.log('element de myStack : ', myStack.pop());

// ---- Spread and Destructuring ----
const obj1 = {
  first: 'who',
  second: 'what',
  third: 'dunno',
  left: 'why'
};

const obj2 = {
  center: 'because',
  pitcher: 'tomorrow',
  catcher: 'today'
};

// TODO: combine obj1 and obj2 into a single object megaObj using spread syntax
const megaObj = { ...obj1, ...obj2 };

// TODO: use destructuring syntax to extract { first, second, catcher }
const { first, second, catcher } = megaObj;
console.log('first, second and catcher : ', first, second, catcher);

// ---- Async / Await ----
function makePromise() {
  return Promise.resolve(5);
}

// TODO: create a new async function
async function auCarre(nombre: number) {
  let carre = await makePromise();
  return carre *= carre;
}

async function run() {
  // TODO: call makePromise() using await syntax and log the results
  const result = await makePromise();
  console.log('result : ', result);
  // TODO: call your new async function
  console.log('un nombre au carre : ', auCarre(result));
}

run();

// Make this file a module so its code doesn't go in the global scope
export { };
