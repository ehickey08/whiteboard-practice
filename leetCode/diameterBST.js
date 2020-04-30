function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var diameterOfBinaryTree = function(root) {
    
    const height = node => {
        if ( node === null ) {
            return 0
        }
        let leftHeight = height(node.left)
        let rightHeight = height(node.right)
        
        return 1 + Math.max(leftHeight, rightHeight)
    }
    
    if ( root === null ) {
        return 0
    }

    let leftHeight = height(root.left)
    let rightHeight = height(root.right)
    
    let currDiameter = leftHeight + rightHeight + 1
    let leftDiameter = diameterOfBinaryTree(root.left)
    let rightDiameter = diameterOfBinaryTree(root.right)
    console.log(root.val, currDiameter, leftDiameter, rightDiameter)
    return Math.max(currDiameter, leftDiameter, rightDiameter)
};

let root = new TreeNode(1)
let second = new TreeNode(2)
let third = new TreeNode(3)
let fourth = new TreeNode(4)
let fifth = new TreeNode(5)

root.left = second
root.right = third
second.left = fourth
second.right = fifth

console.log(diameterOfBinaryTree(root))

  