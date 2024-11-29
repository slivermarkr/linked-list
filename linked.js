class Linkedlist {
  constructor() {
    this.head = undefined;
  }

  getList() {
    return this.head;
  }

  prepend(item) {
    if (!this.head) {
      this.head = new Node(item);
    } else {
      let list = this.getList();
      this.head = new Node(item);
      this.head.next = list;
    }
  }

  append(item) {
    let temp = this.head;

    if (!this.head) {
      this.prepend(item);
    } else {
      while (temp.next !== null) {
        temp = temp.next;
      }
      temp.next = new Node(item);
    }
  }

  size() {
    let temp = this.getList();
    let count = 0;
    while (temp !== null) {
      temp = temp.next;
      ++count;
    }
    return count;
  }

  getLast() {
    let temp = this.getList();
    while (temp !== null) {
      temp = temp.next;
      if (temp.next === null) {
        return temp;
      }
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
list.prepend("arf");
list.append("lizard");
console.log(list.getLast());
console.log(list.size());
