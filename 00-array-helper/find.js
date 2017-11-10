var users = [
  { name:'archie' },
  { name:'anky' },
  { name:'angga' },
  { name:'ade' }
]

// ES5
var user;
for(var i = 0;i < users.length;i++){
  if(users[i].name === 'angga'){
    user = users[i];
    break;
  }
}
console.log(user)


// ES6
var newUser = users.find(function(item) {
    return item.name === 'angga'
})
console.log(newUser);


// more find

var post = {'id':4, title:'a post title'}
var comments = [
  {postId:4, content:'pertamax'},
  {postId:5, content:'keduax'},
  {postId:4, content:'ketigax'},
  {postId:5, content:'keempatx'},
]

function commentsForPost(post,comments){
  return comments.find(function(item){
    return item.postId === post.id
  })
}

var result = commentsForPost(post,comments);
console.log(result);

// find, implemented

function findWhere(array, criteria) {
  return array.find(function(item){
      let key = Object.keys(criteria)[0];
      return item[key] === criteria[key]
  })
}
