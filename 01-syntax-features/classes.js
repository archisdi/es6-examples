// ES6  Class Sugar Syntax

class Toyota{
  honk(){
    console.log('beep');
  }
}

class Car extends Toyota{
  constructor(options){
    super();
    this.title = options.title
  }

  drive(){
    console.log('vroom');
  }
}

const car = new Car({title:'toyota'});
console.log(car)
car.drive();
car.honk();
