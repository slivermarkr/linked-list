class Linkedlist {
  constructor() {
    this.head = undefined;
  }

  getList() {
    return this.head;
  }

  addFirst(item) {
    if (!this.head) {
      this.head = new Node(item);
    }
  }

  append(item) {
    let temp = this.head;

    if (!this.head) {
      this.addFirst(item);
    } else {
      while (temp.next !== null) {
        temp = temp.next;
      }
      temp.next = new Node(item);
    }
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
list.append("bird");
console.log(list.getList());
console.log(list.getList().next.next.next);
