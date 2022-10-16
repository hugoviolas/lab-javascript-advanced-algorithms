class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    if (this.stackControl.length < this.MAX_SIZE) {
      return true;
    } else {
      return false;
    }
  }

  isEmpty() {
    if (this.stackControl.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  push(item) {
    if (this.canPush()) {
      this.stackControl[this.stackControl.length] = item;
      return this.stackControl;
    } else {
      throw new Error("STACK_OVERFLOW");
    }
  }

  pop() {
    let returnedElement;
    if (!this.isEmpty()) {
      returnedElement = this.stackControl.slice(
        this.stackControl.length - 1,
        this.stackControl.length
      )[0];
      return returnedElement;
    } else {
      throw new Error("STACK_UNDERFLOW");
    }
  }

  display() {
    return this.stackControl;
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== "undefined") module.exports = Stack;
