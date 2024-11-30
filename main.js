import { Linkedlist } from "./linked.js";

const list = new Linkedlist();
list.append("dog"); //(dog) -> null;
list.append("cat"); //(dog) -> (cat) -> null;j
list.insertAt("fish", 1); //(dog) -> (fish) -> (cat) -> null;
list.removeAt(0); // (fish) -> (cat) -> null;
list.prepend("lizard"); // (lizard) -> (fish) -> (cat) -> null;
// (lizard) -> (fish) -> (cat) -> null;
console.log(list.entry());
console.log(list.toString());
console.log(list.find("lizard")); // 0
console.log(list.contains("cat")); // true
console.log(list.contains("dog")); //  false
console.log(list.at(1)); // Node val: fish next: Node: cat next: null
console.log(list.size()); //  3
console.log(list.entry()); // Node: lizard
list.append("monkey");
console.log(list.tail()); // Node: monkey
list.pop();
console.log(list.tail()); // Node: cat
