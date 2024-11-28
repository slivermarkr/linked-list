class Linkedlist {
  constructor() {
    this.head = new Node(null, null);
  }

  printHead() {
    console.log(this.head);
  }
}

class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

const list = new Linkedlist();
console.log(list.printHead());
