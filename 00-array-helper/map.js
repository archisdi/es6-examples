var numbers = [1,2,3,4,5]
var doubledNumbers = []

// ES5
for(var i = 0;i < numbers.length; i++){
  doubledNumbers.push(numbers[i] * 2)
}
console.log(doubledNumbers);

// ES6
var doubled = numbers.map(function(item){
  return item * 2
})
console.log(doubled);


// --- more on map

var cars = [
  { model:'camaro', price:'expensive' },
  { model:'nissan', price:'moderate' },
  { model:'toyota', price:'cheap' }
]

var prices = cars.map(function(item) {
  return item.price
})

console.log(prices)

// pluck
function pluck(array, property) {
    return array.map(function(item){
        return item[property]
    })
}
console.log(pluck(cars,'model'))
