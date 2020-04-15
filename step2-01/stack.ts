// TODO: create a Stack<T> generic class here:

export class Stack<T> {
  private myStack: T[];

  constructor() {
    this.myStack = [];
  }

  push(element: T) {
    this.myStack.push(element);
  }
  pop() {
    return this.myStack.pop();
  }
}