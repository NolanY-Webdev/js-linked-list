/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */

var eyes = require('eyes');

function linkedListGenerator() {
  var head = null;
  var last = null;
  var nodeCount = 0;
  var currentNode;
  var thingy = true;

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
      currentNode = newNode;

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

  function hasNext() {
    if (currentNode !== getTail()) {
      return true;
    } else if (thingy) {
      thingy = false;
      return true;
    } else {
      return false;
    }
  }

  function next() {
    if (thingy) {
      var previousNode = currentNode;
      currentNode = currentNode.next;
      return previousNode.value;
    } else {
      return currentNode.value;
    }
  }

  function current () {
    return current.value;
  }

  return {
    getHead : getHead,
    getTail : getTail,
    add : add,
    get : get,
    remove : remove,
    insert : insert,
    nCount : nCount,
    hasNext : hasNext,
    next : next,
    current : current

  };
}

var ll = linkedListGenerator();
ll.add('ant');
ll.add('bat');
ll.add('cat');
ll.add('dog');
ll.add('elephant');
ll.add('fish');
ll.add('giraffe');
ll.add('hippo');

while (ll.hasNext()) {
  eyes.inspect('ll.next()', ll.next());
}