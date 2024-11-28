class Linkedlist {
  constructor() {
    this.head = new Node(null, null);
  }

  append(item) {}
}

class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

const list = new Linkedlist();
list.append("dog");
list.append("cat");
console.log(list.head.next);
