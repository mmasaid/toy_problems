/**
 * What is a Linked List?
 * A linked list is a linear data structure similar to an array.
 * However, unlike arrays, elements are not stored in a particular memory location or index.
 * Rather each element is a separate object that contains a pointer or a link to the next object in that list.
 * Each element (commonly called nodes) contains two items: the data stored and a link to the next node.
 * The data can be any valid data type.
 * In JavaScript, a linked list looks like this:
 * const list = {
    head: {
        value: 6
        next: {
            value: 10
            next: {
                value: 12
                next: {
                    value: 3
                    next: null
                    }
                }
            }
        }
    }
};
 * The entry point to a linked list is called the head. The head is a reference to the first node in the linked list.
 * The last node on the list points to null. If a list is empty, the head is a null reference.
 */

/**
 * Implement the Linked list and  implement four helper methods for the linked list.
 * clear()
 * getFirst()
 * getLast()
 * size()
 */

class Node {
  constructor(data = null){
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor (head= null){
    this.head = head
  }

  size(){
    let count = 0;
    let node = this.head;
    while(node){
      count ++;
      node = node.next
    }

    return count
  }

  clear(){
    this.head = null
  }

  getLast(){
    let lastNode = this.head;
        while (lastNode.next) {
            lastNode = lastNode.next
        }
    return lastNode
  }

  getFirst(){
    return this.head
  }
}

describe("#LinkedList", () => {
  let node1 = new Node(2)
  let node2 = new Node(5)
  let node3 = new Node(7)
  node1.next = node2
  node2.next = node3
  const list = new LinkedList(node1)

  it("test linked list methods", () => {
		expect(list.size()).toEqual(3)
		expect(list.getFirst()).toStrictEqual(list.head)
		expect(list.getLast()).toStrictEqual(list.head.next.next)
		expect(list.head.next.data).toEqual(5)
	})

  it("test linked list clear", () => {
    list.clear()
		expect(list.getFirst()).toBeNull()
	})
})