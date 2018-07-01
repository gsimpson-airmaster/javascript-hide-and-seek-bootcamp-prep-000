function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested').querySelector('.target')
}

function increaseRankBy(n) {
  var ranksParent = document.querySelectorAll('.ranked-list');
  for(var i = 0; i < ranks.length; i++) {
    var 
    ranks[i].textContent = (parseInt(ranks[i].textContent) + parseInt(n));
  }
}

