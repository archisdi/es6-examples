function* shopping(){
  const stuffFromStore = yield 'cash';
  const stuffFromlaundry = yield 'laundry';
  return [stuffFromStore, stuffFromlaundry];
}


const gen = shopping();

console.log(gen.next());
console.log(gen.next('groceries'));
console.log(gen.next('clean clothes'));
