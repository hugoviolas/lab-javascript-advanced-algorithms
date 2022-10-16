const queueControl = [19, 27];
const MAX_SIZE = 10;

function canEnqueue() {
  if (queueControl.length < MAX_SIZE) {
    return true;
  } else {
    return false;
  }
}

function enqueue(item) {
  console.log(queueControl);
  if (canEnqueue()) {
    //this.queueControl.push(item);
    if (queueControl.length !== 0) {
      for (let i = queueControl.length; i > 0; i-- * 2) {
        queueControl[i] = queueControl[i - 1];
      }
      queueControl[0] = item;
      console.log(queueControl);
    } else {
      queueControl[queueControl.length - queueControl.length] = item;
      console.log(queueControl);
    }
  } else {
    throw new Error("QUEUE_OVERFLOW");
  }
}

enqueue(10);
enqueue(20);
