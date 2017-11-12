// ES5 every and Some
var computers = [
  { name: 'Apple', ram: 24 },
  { name: 'Acer', ram: 4 },
  { name: 'Compaq', ram: 8 },
  { name: 'Asus', ram: 16 }
]

var allCan = true;
var onlySomeCan = false;

for(var i = 0;i < computers.length;i++){
  var computer = computers[i];

  if(computer.ram < 16){
    allCan = false;
  }else{
    onlySomeCan = true;
  }
}

console.log('all can :' + allCan);
console.log('some can :' + onlySomeCan);

// ES6 every
var every = computers.every(function (item){
  return item.ram > 16
});

var some = computers.some(function (item){
  return item.ram > 16
});

console.log('------------')
console.log('all can :' + every);
console.log('some can :' + some);


// more example

var names = [
  'archie',
  'edwina',
  'angga',
  'adess'
]

var everyName = names.every(function(item) {
  return item.length > 4;
})

var someName = names.some(function(item) {
  return item.length > 4;
})

console.log('------------')
console.log('all name :' + everyName);
console.log('some name :' + someName);
