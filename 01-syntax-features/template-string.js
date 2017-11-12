//ES5
function getMessage() {
  const year = new Date().getFullYear();
  return "The year is " + year;
}
console.log(getMessage());

//ES6
function getYear() {
  const year = new Date().getFullYear();
  return `Last year is ${year - 1}`;
}
console.log(getYear());
