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
  if (newNode.data < currentNode.data) {
    if (currentNode.left) {
      return findOrAdd(currentNode, newNode)
    } else {
      currentNode.left = newNode;
    }
  } else if (newNode.data < currentNode.data) {
      if (currentNode.right) {
        return findOrAdd(currentNode, newNode)
      } else {
        currentNode.right = newNode;
      }
    }
 }
