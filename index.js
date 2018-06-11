function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('.target')
}

function increaseRankBy(n){
  var lis = document.querySelectorAll('ul.ranked-list li')
  for(var i = 0; i < lis.length; i++){
    debugger
    lis[i].innerHTML += parseInt(n, 10)
  }
  return lis
}

function deepestChild(){
  var lis = document.querySelector(".grand-node")
  for(var i = 0; i < lis.length; i++){
    
  }
}