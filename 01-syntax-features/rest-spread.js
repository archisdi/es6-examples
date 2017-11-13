function addNumbers(numbers){
  return numbers.reduce((final,number) => final + number, 0);
}
console.log(addNumbers([1,2,3,4,5]))

// REST OPERATOR
function addNumbers2(...numbers){
  return numbers.reduce((final,number) => final + number, 0);
}
console.log(addNumbers2(1,2,3,4,5))

// SPREAD OPERATOR

const defaultColors = ['red', 'green'];
const favorite = ['orange','blue'];

// ES5
console.log(defaultColors.concat(favorite));

// ES6
const newArray = [ ...defaultColors, ...favorite ]; // dumping all data from array (spread)
console.log(newArray)
