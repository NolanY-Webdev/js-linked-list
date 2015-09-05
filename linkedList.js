/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */

// var eyes = require('eyes');

function linkedListGenerator() {
  var head = null;
  var last = null;
  var nodeCount = 0;

  function createNode(val) {
    nodeCount++;
    return {
      value : val,
      next : null
    };
  }

  function getHead() {
    return head;
  }
  function getTail() {
    return last;
  }
  function add(value) {
    var newNode = createNode(value);
    if (getTail() === null) {
      head = newNode;
      last = newNode;
    } else {
      last.next = newNode;
      last = newNode;
    }
    return newNode;
  }
  function get(number) {
    if (nodeCount <= number ) {
      return false;
    } else {
      var current = head;
      for (var i = 0; i < number; i++) {
        current = current.next;
      }
      return current;
    }

  }
  function remove(number) {

    if (nodeCount <= number ) {
      return false;
    } else if (number === 0) {
      head = head.next;
      nodeCount--;
    } else {
      nodeCount--;
      var before = head;
      for (var b = 0; b < number - 1; b++) {
        before = before.next;
      }
      var after = head;
      for (var a = 0; a < number + 1; a++) {
        after = after.next;
      }
      before.next = after;
      if (number === nodeCount) {
        last = before;
      }
    }
  }
  function insert(value, number) {
    var current;
    if (nodeCount <= number) {
      return false;
    } else if (number < 0) {
      return false;
    } else if (number == 0) {
      current = createNode(value);
      current.next = head;
      head = current;
    } else {
      current = createNode(value);
      var after = head;
      for (var a = 0; a < number; a++) {
        after = after.next;
      }
      var before = head;
      for (var b = 0; b < number - 1; b++) {
        before = before.next;
      }
      current.next = after;
      before.next = current;
    }
  }
  function nCount() {
    return nodeCount;
  }

  return {
    getHead : getHead,
    getTail : getTail,
    add : add,
    get : get,
    remove : remove,
    insert : insert,
    nCount : nCount
  };
}


// var ll = linkedListGenerator();
// ll.add(0);
// ll.add(1);
// ll.add(2);
// ll.add(3);
// ll.add(4);
// ll.add(5);
// ll.add(6);

// eyes.inspect(ll.insert(7, 0));
// eyes.inspect(ll.nCount());
// eyes.inspect(ll.getHead());

