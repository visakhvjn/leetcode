/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

 function isMirror(root1: TreeNode | null, root2: TreeNode | null): boolean {
     if (!root1 && !root2) {
         return true;
     }

     return (
         root1?.left?.val === root2?.right?.val &&
         root1?.right?.val === root2?.left?.val &&
         isMirror(root1?.left, root2?.right) &&
         isMirror(root1?.right, root2?.left)
     );
 }

function isSymmetric(root: TreeNode | null): boolean {
    return root?.left?.val === root?.right?.val && isMirror(root.left, root.right);
};