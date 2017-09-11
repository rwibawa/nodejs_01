function* abc() {
yield 'a';
yield 'b';
return 'c';
}
const it = abc();
it.next();
it.next();
it.next();
it.next();
for (let l of abc()) {
console.log(l);
}
./save ./generator01.js
