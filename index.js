function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested').querySelector('.target')
}

function increaseRankBy(n) {
  var ranks = document.querySelector('.ranked-List');
  for(var i = 0; i < ranks.length; i++) {
    ranks[i].textContent = i + parseInt(n);
  }
}

