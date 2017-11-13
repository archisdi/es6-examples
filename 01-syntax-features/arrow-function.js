// ES5
const add = function(a,b){
  return a + b
}
console.log(add(13,41));

// ES6
const substr = (a,b) => {
  return a - b
}
console.log(substr(34,45));

  // OR

const multiply = (a,b) => a * b // implicit return
console.log(multiply(12,10))


// more example

const double = a => a * 2 // even more compact implicit return
console.log(double(10))


const team = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  teamSummary: function(){
    return this.members.map((member) => {
      return `${member} is on team ${this.teamName}`
    })
  }
};
console.log(team.teamSummary());
