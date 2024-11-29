class Node {
  constructor(val = null, next = null) {
    this.val = val;
    this.next = next;
  }
}

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

  at(index) {
    let temp = this.getList();
    let count = 0;
    if (index === 0) return temp;
    while (count <= index) {
      temp = temp.next;
      ++count;
      if (count === index) {
        return temp;
      }
    }
  }

  pop() {
    if (this.head === null) return;

    let curr = this.head;
    let prev = null;

    while (curr.next !== null) {
      prev = curr;
      curr = curr.next;
      if (curr.next === null) {
        prev.next = null;
      }
    }
  }

  contains(value) {
    let temp = this.head;
    while (temp !== null) {
      if (temp.val === value) {
        return true;
      } else {
        temp = temp.next;
      }
    }
    return false;
  }

  find(value) {
    let temp = this.head;
    let index = 0;
    while (temp !== null) {
      if (temp.val === value) {
        return index;
      }
      temp = temp.next;
      index++;
    }
    return null;
  }
}

const list = new Linkedlist();
list.append("dog");
list.append("cat");
list.append("fish");
list.append("bird");
list.prepend("arf");
list.append("lizard");
console.log(list.getList());
console.log(list.find("salmon"));
// console.log(list.at(5));
