var products = [
  { name:'cucumber', type:'vegetable' },
  { name:'banana', type:'fruit' },
  { name:'celery', type:'vegetable' },
  { name:'orange', type:'fruit' },
  { name:'beef', type:'meat' },
  { name:'chicken', type:'meat' },
]

// ES5
var filteredProducts = [];
for(var i = 0;i < products.length;i++){
  if(products[i]['type'] === 'fruit'){
    filteredProducts.push(products[i])
  }
}
console.log(filteredProducts);

// ES6
var filtered = products.filter(function(item) {
  return item.type === 'fruit'
});
console.log(filtered);


// more filtering
var post = {'id':4, title:'a post title'}
var comments = [
  {postId:4, content:'pertamax'},
  {postId:5, content:'keduax'},
  {postId:4, content:'ketigax'},
  {postId:5, content:'keempatx'},
]

function commentsForPost(post,comments){
  return comments.filter(function(item){
    return item.postId === post.id
  })
}

var result = commentsForPost(post,comments);
console.log(result);
