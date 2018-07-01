function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested').querySelector('.target')
}

function increaseRankBy(n) {
  var ranks = document.querySelectorAll('.ranked-list li');
  for(var i = 0; i < ranks.length; i++) {
      ranks[i].textContent = (parseInt(ranks[i].textContent) + parseInt(n));
  }
}

function deepestChild() {
  
}

