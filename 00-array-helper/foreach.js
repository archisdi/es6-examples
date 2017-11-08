var colors = ['red', 'blue', 'green']

// ES5
for(var i = 0; i < colors.length;i++){
 console.log('- ' + colors[i])
}

// ES6
colors.forEach(function(item) {
  console.log('* ' + item)
});

// more on foreach

var numbers = [1,2,3,4,5]
var sum = 0

function adder(item) {
  sum += item
}

numbers.forEach(adder);

console.log('sum : ' + sum)
