// ES5
// function createBookShop(inventory){
//   return {
//     inventory:inventory,
//     value:function() {
//       return this.inventory.reduce((total, book) => total + book.price, 0);
//     },
//     titlePrice:function(title) {
//       return this.inventory.find(book => book.title === title).price
//     }
//   }
// }

// ES6
function createBookShop(inventory){
  return {
    inventory, // identical key-value
    value() { // key-function
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    titlePrice(title) {
      return this.inventory.find(book => book.title === title).price
    }
  }
}

const inventory = [
  { title: 'JS', price:10 },
  { title: 'PHP', price:11 },
  { title: 'PYTHON', price:15 },
  { title: 'RUBY', price:32 },
]

const bookshop = createBookShop(inventory);

console.log(bookshop.titlePrice('PHP'));
console.log(bookshop.value())

// more example

function saveFile(url, data){
  $.ajax({method: 'POST', url, data});
}

const url = 'http://fileupload.com';
const data = { color: 'red' }

saveFile(url, data);
