const circle = require('./circle.js');
console.log('The area of a circle of radius 4 is ${circle.area(4)}');
console.log(`The area of a circle of radius 4 is ${circle.area(4)}`);
module.exports = (width) => {
return {
  area: () => width * width
  };
}
