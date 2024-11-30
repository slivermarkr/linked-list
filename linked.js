export class Node {
  constructor(val = null, next = null) {
    this.val = val;
    this.next = next;
  }
}

export class Linkedlist {
  constructor() {
    this.head = undefined;
  }

  entry() {
    return this.head;
  }

  prepend(item) {
    if (!this.head) {
      this.head = new Node(item);
    } else {
      let list = this.head;
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
    let temp = this.head;
    let count = 0;
    while (temp !== null) {
      temp = temp.next;
      ++count;
    }
    return count;
  }

  tail() {
    let temp = this.head;
    while (temp !== null) {
      temp = temp.next;
      if (temp.next === null) {
        return temp;
      }
    }
  }

  at(index) {
    let temp = this.head;
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

  toString() {
    let temp = this.head;
    let string = ``;
    while (temp) {
      string += ` (${temp.val}) ->`;
      temp = temp.next;
    }
    if (temp === null) {
      string += ` ${temp}`;
    }
    return string;
  }
  // TODO: insertAt(value, index)
  insertAt(value, index) {
    let prev = null;
    let curr = this.head;
    let count = 0;

    while (curr !== null || count <= index) {
      if (count === index) {
        const newNode = new Node(value);
        prev.next = newNode;
        newNode.next = curr;
        return;
      } else {
        prev = curr;
        curr = curr.next;
        count++;
      }
    }
  }

  // TODO: removeAt(value)
  removeAt(index) {
    let prev = null;
    let curr = this.head;
    let count = 0;

    while (curr !== null) {
      if (index === count) {
        if (prev === null) {
          this.head = curr.next;
          return;
        }
        prev.next = curr.next;
        return;
      } else {
        prev = curr;
        curr = curr.next;
        count++;
      }
    }
  }
}
