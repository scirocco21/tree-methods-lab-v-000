function inOrder(currentNode){
  if(currentNode.left){
    inOrder(currentNode.left)
  }
  console.log(currentNode.data)
  if(currentNode.right){
    inOrder(currentNode.right)
  }
}

function findOrAdd(rootNode, newNode) {
  let currentNode = rootNode;
  if (newNode < currentNode) {
    if (currentNode.left) {
      return findOrAdd(currentNode, newNode)
    } else {
      currentNode.left = newNode
    }
  } else if (newNode < currentNode) {
      if (currentNode.right) {
        return findOrAdd(currentNode, newNode)
      } else {
        currentNode.right = newNode;
      }
    }
}
