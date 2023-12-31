/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
    if (!root) return null;

    // invert the root nodes left and right child and keep on repeating until we reach the end node and return it.
    let temp = root.left;
    root.left = root.right
    root.right = temp;

    invertTree(root.left)
    invertTree(root.right)
    return root;

};

// Time Complexity O(N)  as we have to visit all the node of the tree and invert them