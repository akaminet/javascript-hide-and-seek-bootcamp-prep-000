function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('.target')
}

function increaseRankBy(n){
  var lis = document.querySelectorAll('ul.ranked-list li')
  for(var i = 0; i < lis.length; i++){
    lis[i].innerHTML = parseInt(lis[i].innerHTML, 10) + n
  }
  return lis
}

function deepestChild(){
  var lis = document.querySelector("#grand-node")
  var next = lis.children[0]
  while(next){
    lis = next
    next = next.children[0]
  }
  return lis
}