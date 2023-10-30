/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function middleNode(head: ListNode | null): ListNode | null {
    let slow = head;
    let fast = head;

    let nodeCount = 1;

    while (fast?.next?.next) {
        fast = fast.next.next
        slow = slow.next;

        nodeCount += 2;
    }

    if (fast?.next) {
        nodeCount++;
    }

    return nodeCount % 2 ? slow : slow.next;
};