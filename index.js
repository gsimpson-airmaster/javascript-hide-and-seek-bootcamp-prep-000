function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested').querySelector('.target')
}

function increaseRankBy(n) {
  var ranksParent = document.querySelectorAll('.ranked-list');
  for(var i = 0; i < ranksParent.length; i++) {
//    var ranks = ranksParent.querySelectorAll('li');
    for(var idx = 0; idx < ranks.length;idx++) {
      ranks[i].textContent = (parseInt(ranks[i].textContent) + parseInt(n));
    }
  }
}

