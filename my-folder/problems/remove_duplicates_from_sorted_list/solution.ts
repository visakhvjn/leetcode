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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    if (!head || !head?.next) {
        return head;
    }

    let ptr1 = head;
    let ptr2 = head.next;

    while (ptr2) {
        if (ptr1.val === ptr2.val) {
            ptr1.next = ptr2.next;
            ptr2.next = null;
            ptr2 = ptr1.next;
        } else {
            ptr1 = ptr2;
            ptr2 = ptr2.next;
        }
    }

    return head;
};