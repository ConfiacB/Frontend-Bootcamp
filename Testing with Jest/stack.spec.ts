// TODO: Import the stack here
import { Stack } from './stack';

describe('Stack', () => {
  it('should push item to the top of the stack', () => {
    // TODO: implement test here:
    // 1. Instantiate a new Stack - i.e. const stack = new Stack<number>();
    // 2. Use stack push calls to add some items to the stack
    // 3. Write assertions via the expect() API
    const stack = new Stack<number>();
    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toBe(2);
  });

  it('should pop the item from the top of stack', () => {
    // TODO: implement test here:
    // 1. Instantiate a new Stack - i.e. const stack = new Stack<number>();
    // 2. Use stack push calls to add some items to the stack
    // 3. pop a few items off the stack
    // 4. write assertions via the expect() API
    const stack = new Stack<number>();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.pop();
    stack.pop();
    expect(stack.peek()).toBe(1);
  });
});