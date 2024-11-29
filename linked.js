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
      //create and entry
      this.head = node;
    } else {
      while (temp.next !== null) {
        temp = temp.next;
      }
      temp.next = node;
    }
    // this.head.next = temp;
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
list.append("fish");
console.log(list.getList());
