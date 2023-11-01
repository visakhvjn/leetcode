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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let list3: ListNode;

    if (!list1) {
        return list2;
    } else if (!list2) {
        return list1;
    }

    if (list1.val < list2.val) {
        list3 = list1;
        list1 = list1.next;
    } else {
        list3 = list2;
        list2 = list2.next;
    }

    const head = list3;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            list3.next = list1;
            list1 = list1.next;
        } else {
            list3.next = list2;
            list2 = list2.next;
        }

        list3 = list3.next;
    }

    list3.next = !list1 ? list2 : list1;

    return head;
};