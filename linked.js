class Linkedlist {
  constructor() {
    this.head = new Node(null, null);
  }
  getList() {
    return this.head;
  }
  append(item) {
    const node = new Node(item);
    let temp = this.head;
    if (!this.head.val) {
      this.head = node;
    } else {
      while (temp !== null) {
        temp = temp.next;
      }
      temp = node;
    }
    this.head.next = temp;
  }
}

class Node {
  constructor(val = null, next = null) {
    this.val = val;
    this.next = next;
  }
}

const list = new Linkedlist();
list.append("dog");
list.append("cat");
console.log(list.getList());
