function* colors(){
  yield 'green'
  yield 'blue'
  yield 'yellow'
  yield 'red'
}

for(let color of colors()){
  console.log(color)
}

// -----------------

const testingTeam = {
  lead: 'amanda',
  tester: 'angga',
  [Symbol.iterator]: function*(){
    yield this.lead
    yield this.tester
  }
}

const engineeringTeam = {
  size:4,
  department: 'Engineering',
  lead:'jill',
  manager:'alex',
  engineer:'archie',
  [Symbol.iterator]: function*(){
    yield this.lead
    yield this.manager
    yield this.engineer
    yield* this.testingTeam
  },
  testingTeam: testingTeam
}

function* testingTeamIterator({lead, tester}){
  yield lead
  yield tester
}

let names = []
for(let team of engineeringTeam){
  names.push(team)
}
console.log(names)
