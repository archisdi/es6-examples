class Comment{
  constructor(content, childern){
    this.content = content
    this.childern = childern
  }

  *[Symbol.iterator](){
    yield this.content
    for(let child of this.childern){
      yield child.content
    }
  }
}

const childern = [
  new Comment('pertamax',[]),
  new Comment('keduax',[]),
  new Comment('ketigax',[]),
  new Comment('ke-empatx',[])
]

const tree = new Comment('naisu', childern);

let comments = []
for(item of tree){
  comments.push(item)
}
console.log(comments)
