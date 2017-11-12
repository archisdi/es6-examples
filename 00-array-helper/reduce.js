// ES5
var numbers = [10, 20, 30, 40]
var sum = 0;

for(var i = 0;i < numbers.length;i++){
  sum += numbers[i];
}
console.log(sum)

// ES6
var reduced = numbers.reduce(function(sum, item) {
  return sum + item
}, 0)
console.log(sum)

// more example

var primaryColors = [
  { color: 'red' },
  { color: 'blue' },
  { color: 'green' },
  { color: 'orange' },
]

var primary = primaryColors.reduce(function(acc, item){
  acc.push(item.color);
  return acc;
},[])
console.log(primary)

function balancedParens(string){
  return !string.split("").reduce(function(acc, item){
    if(acc < 0){ return acc }
    if(item === '('){ return ++acc }
    if(item === ')'){ return --acc }
  }, 0);
}

console.log(balancedParens('()('))
