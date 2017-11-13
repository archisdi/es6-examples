// ES5
function makeAjaxRequest(url, method){
  if(!method){
    method = 'GET';
  }
  return { url, method }
}
makeAjaxRequest('blablabla.com');
makeAjaxRequest('blablabla.com','GET');

// ES6
function makeAjaxRequest(url, method = 'GET'){
  return { url, method }
}
makeAjaxRequest('blablabla.com');
console.log(makeAjaxRequest('blablabla.com', undefined)); // use undefined to skip an argument

// more example

function User(id){
  this.id = id
}

function generateId(){
  return Math.random() * 99999
}

function createAdminUser(user = new User(generateId())){
  user.admin = true;
  return user;
}

let user = createAdminUser();
console.log(user);
