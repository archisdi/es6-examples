// destructuring object and array

const companies =[
  { name:'Google', location:'Mountain View'},
  { name:'Facebook', location:'menlo Park'},
  { name:'Uber', location:'California'}
]

let [{ location }] = companies;
console.log(location)

const google = {
  locations: ['Mountain','Valley','Coastline']
}
const { locations:[ location2 ] } = google
console.log(location2)
