const arr = ["b", "c", "d"];
arr;
arr.push("e");
arr;
arr.pop();
arr;
arr.unshift("a");
arr;
arr.shift();
arr;
const arr2 = [1,2,3];
arr2;
arr2.concat(4,5,6);
arr2;
arr2.concat([4,5,6]);
arr2;
arr2.concat([[4,5],6]);
arr2.concat([4,5],6);
arr2.concat([4,[5,6]]);
const arr3 = [1,5,7];
arr.splice(1,0,2,3,4);
arr3;
arr3.splice(1,0,2,3,4);
arr3;
arr3.splice(5,0,6);
arr3;
arr3.splice(1,2);
arr3;
arr3.splice(2,1,'a', 'b');
arr3;
const arr4 = [1,2,3,4,5];
arr4.slice(3);
arr4;
arr4.slice(2,4);
arr4.slice(-2);
arr4.slice(1,-2);
arr4.slice(-2,-1);
const arr5 = [1,2,3,4];
arr5.copyWithin(1,2);
arr5;
arr5.copyWithin(2,0,2);
arr5:
;
arr5;
arr5.copyWithin(0,-3,-1);
arr5;
const arr6 = new Array(5).fill(1);
arr6;
arr6.fill("a");
arr6;
arr6.fill("b",1);
arr6.fill("c",2,4);
arr6.fill(5.5, -4);
arr6.fill(0,-3,-1);
const arr7 = [1,2,3,4,5];
arr7;
arr7.reverse();
arr7;
const arr8 = [5,4,3,2,1];
arr8.sort();
arr8;
const arr9 = [
{ name: "Suzanne" },
{ name: "Jim" },
{ name: "Trevor" },
{ name: "Amanda" }];
arr9;
arr9.sort();
arr9;
arr9.sort((a,b) => a.name > b.name);
arr9.sort((a,b) => a.name[1] < b.name[1]);
