// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.



// Example 1:


// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]


// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
class ListNode {
    constructor(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
    }
}

var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(-1);
    let current = dummy;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    current.next = list1 || list2;

    return dummy.next;
};

//Example Usage
const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
const mergedList = mergeTwoLists(list1, list2);

// Print the merged list
let current = mergedList;
while (current) {
    console.log(current.val);
    current = current.next;
}

// Example Usage
const list3 = new ListNode(1, new ListNode(2, new ListNode(4)));
const list4 = new ListNode(1, new ListNode(3, new ListNode(4)));
const mergedList2 = mergeTwoLists(list3, list4);

// Print the merged list
let current2 = mergedList2;
while (current2) {
    console.log(current2.val);
    current2 = current2.next;
}

// Example Usage
const list5 = new ListNode(1, new ListNode(2, new ListNode(4)));
const list6 = new ListNode(1, new ListNode(3, new ListNode(4)));
const mergedList3 = mergeTwoLists(list5, list6);

// Print the merged list
let current3 = mergedList3;
while (current3) {
    console.log(current3.val);
    current3 = current3.next;
}