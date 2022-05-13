/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    let carry = 0;
    let head, l3;
    
    while (l1 || l2 || carry) {
        
        let a = l1 ? l1.val : 0;
        let b = l2 ? l2.val : 0;
        
        let result = add(a, b, carry);
        
        if (!head) {
            head = l3 = new ListNode(result[0]);
        } else {
            l3.next = new ListNode(result[0]);
            l3 = l3.next;
        }
        
        carry = result[1];
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }
    
    return head;
}

var add = function (a, b, carry) {
    
    let sum = a + b + carry;
    carry = 0;
    
    if (sum > 9) {
        carry = parseInt(sum / 10);
        sum = sum % 10;
    }
    
    return [sum, carry];
}