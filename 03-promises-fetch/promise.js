let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('donee'), 2000);
});

promise
.then(res => {
  console.log(res);
  return 'gut man'
})
.then((res) => console.log(res))
.catch(err => console.log(err))
