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
  var queue = [];
  var results = [];
  var nextNode;
  
  // The first thing we want to do is push the root value 
  // into the queue. We are going to add the entire node, 
  // as well as declare the depth key set to value 0. By 
  // setting a depth property to this node, we will be 
  // able to keep track of where each node is located. 
  
  queue.push(
    { "depth": 0,
      "node" : document.querySelector('#app')
    });
    
    
    
    
    
}

