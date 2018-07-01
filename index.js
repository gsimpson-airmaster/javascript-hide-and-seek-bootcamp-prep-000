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
  var deepest = [];
  var depthVar = 0;
  
  // The first thing we want to do is push the root value 
  // into the queue. We are going to add the entire node, 
  // as well as declare the depth key set to value 0. By 
  // setting a depth property to this node, we will be 
  // able to keep track of where each node is located. 
  
  queue.push(
    { "depth": 0,
      "node" : document.querySelector('#grand-node')
    });
    
    while (queue.length > 0) {

    // Let's declare nextNode as the first node in the 
    // queue. We use the shift method to remove it from 
    // the queue since we will be performing the callback 
    // filter on it.
    
    nextNode = queue.shift();
    console.log(`nextNode found = ${nextNode.node} at depth ${nextNode.depth}`)
    
    // Now let’s start iterating through the nodes. We are 
    // starting at i = 0, iterating until we hit 
    // i < nextNode.node.children.length. We want to take 
    // the length property of the children array inside the 
    // nextNode. While we iterate through each of those children, 
    // we are going to push it into the queue. Each node pushed 
    // into the queue will have their depth value declared. By 
    // setting the depth property equal to nextNode.depth + 1, 
    // we are saying add one more level to the level of it’s parent 
    // node. We are going to repeat these steps until there are no 
    // more nodes to iterate through. 
 
    if (nextNode.node.childNodes.length > 0) {

      for (var i = 0; i < nextNode.node.childNodes.length; i ++) {
        if(nextNode.node.childNodes[i] instanceof HTMLElement) {
          queue.push({ "depth": nextNode.depth+1,
            "node" : nextNode.node.childNodes[i]
          });
        }
      }
    }
      results.push(nextNode);
    }
    
    for(var idy = 0; idy<results.length;idy++) {
      if(results[idy].depth === depthVar) {
        deepest.push(results[idy]);
      }
      else if(results[idy].depth > depthVar) {
        deepest = [];
        deepest.push(results[idy]);
        depthVar = results[idy].depth;
      }
    }
    console.log(`deepestchild found = ${depthVar[0].node}`)
    return depthVar[0].node;
    
  }

 

