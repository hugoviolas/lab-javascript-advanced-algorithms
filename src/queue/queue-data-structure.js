class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    if (this.queueControl.length < this.MAX_SIZE) {
      return true;
    } else {
      return false;
    }
  }

  isEmpty() {
    if (this.queueControl.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  enqueue(item) {
    if (this.canEnqueue() === true) {
      if (this.isEmpty() === false) {
        for (let i = this.queueControl.length; i > 0; i-- * 2) {
          this.queueControl[i] = this.queueControl[i - 1];
        }
        this.queueControl[0] = item;
        console.log(this.queueControl);
        return this.queueControl.reverse();
      } else {
        this.queueControl[this.queueControl.length - this.queueControl.length] =
          item;
        return this.queueControl;
      }
    } else {
      throw new Error("QUEUE_OVERFLOW");
    }
  }

  dequeue() {
    let returnedElement;
    if (this.isEmpty() === false) {
      returnedElement = this.queueControl.slice(0, 1)[0];
      return returnedElement;
    } else {
      throw new Error("QUEUE_UNDERFLOW");
    }
  }

  display() {
    return this.queueControl;
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== "undefined") module.exports = Queue;
