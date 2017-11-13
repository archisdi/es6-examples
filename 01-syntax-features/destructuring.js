// ES5
var expense = {
  type: 'business',
  ammount: '$45 USD'
}
// var type = expense.type; // duplicated syntax
// var ammount = expense.ammount; // duplicated syntax

// ES6
const { type, ammount } = expense; // variable name must be same to object property
console.log(type)
console.log(ammount)

// more examples

var savedFile = {
  extension: 'JPEG',
  name: 'repost',
  size: 14040
}

function fileSummary({ name, extension, size}){ // destructure in parameters
  return `The file is ${name}.${extension} with size:${size}KB`
}
console.log(fileSummary(savedFile));

// destructuring array
const companies = [
  'google', 'facebook', 'uber'
]

const [ name, name2, name3 ] = companies;
console.log(name)
console.log(name2)
console.log(name3)
