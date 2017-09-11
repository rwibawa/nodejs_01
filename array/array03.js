const o = { name: "Jerry" };
const arr = [1,5,"a", o, true, 5, [1,2], "9"];
arr;
arr.indexOf(5);
arr.lastIndexOf(5);
arr.indexOf("a");
arr.lastIndexOf("a");
arr.indexOf({name: 'Jerry'});
arr.indexOf(o);
arr.indexOf([1,2]);
arr.indexOf("9");
arr.indexOf(9);
arr.indexOf(5,5);
arr.indexOf("a",5);
arr.lastIndexOf(5, 4);
arr.lastIndexOf(true, 3);
arr.lastIndexOf(true);
const arr2 = [
{ id: 5, name: "Judith" },
{ id: 7, name: "Francis" }];
arr2.findIndex(o => o.id === 5);
arr2.findIndex(o => o.name === "Francis");
arr2.findIndex(o => o === 3);
arr2.findIndex(o => o.id === 17);
arr2.find(o => o.id === 5);
arr2.find(o => o.id === 2);
const arr3 = [1,17,16,5,4,16,10,3,49];
arr3;
arr3.find((x, i) => i > 2 && Number.isInteger(Math.sqrt(x)));
class Person {
constructor(name) {
  this.name = name;
  this.id = Person.nextId++;
  }}
Person.nextId = 0;
const jamie = new Person("Jamie"),
juliet = new Person("Juliet"),
peter = new Person("Peter"),
jay = new Person("Jay");
const arr4 = [jamie, juliet, peter, jay];
arr4;
arr4.find(p => p.id === juliet.id);
arr4.find(p => p.id === this.id, juliet);
const arr5 = [5,7,12,15,17];
arr.some(x => x%2 === 0);
arr5.some(x => x%2 === 0);
arr5.some(x => Number.isInteger(Math.sqrt(x)));
const arr6 = [4,6,16,36];
arr6.every(x => x%2 === 0);
arr6.every(x => Number.isInteger(Math.sqrt(x)));
