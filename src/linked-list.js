const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        const newNode = new Node(data, this._tail, null);
        if (!this._head) 
            this._head = newNode;
        if (this._tail) 
            this._tail.next = newNode;
        this._tail = newNode;
        this.length++;
        
    }

    head() {
        if (this._head) {
            return this._head.data;
        } else return null;
    }

    tail() {
        if (this._tail) {
            return this._tail.data;
        } else return null;
    }

    at(index) {
        let someNode = this._head;
        for (let i = 0; i < index; i++) {
            someNode = someNode.next; 
        }
        return someNode.data;
    }

    insertAt(index, data) {
        if (!this._head) 
        this.append(data);
        else {
            let someNode = this._head;
            for (let i = 0; i < index; i++) {
                someNode = someNode.next; 
            }
            prevNode = someNode.prev;
            nextNode = someNode;
            const newNode = new Node(data, prevNode, nextNode);
            nextNode.prev = newNode;
            if (prevNode) prevNode.next = newNode;
        } 
        this.length++;
    }

    isEmpty() {
         if (this.length) {
              return false
        } else {
             return true;
        }
    }

    clear() {
        const node = new Node();
        this.length = 0;
        this._head = node;
        this._tail = node;
        return this;
    }

    deleteAt(index) {
        let ongoing = this._head,
        count = 0;
  
      if (index === 0) {
        this._head = ongoing.next;
        ongoing.prev = null;
      } else if (this.length !== 0 || index > -1 || index < this.length) {
        while (count < index) {
          ongoing = ongoing.next;
          count++;
        }
        ongoing.prev.next = ongoing.next;
        ongoing.next.prev = ongoing.prev;
      } else {
            return this;
      }
  
      this.length--;
      return this;
    }

    reverse() {
        let ongoing = this._head;

        while (ongoing != null) {
          let nextNode = ongoing.next;
          ongoing.next = ongoing.prev;
          ongoing = nextNode;
        }
    
        let temp = this._head;
        this._head = this._tail;
        this._tail = temp;
        return this;
    }

    indexOf(data) {
        let ongoing = this._head,
        count = 0;
  
      while (count < this.length) {
        if (ongoing.data === data) {
          return count;
        } else {
          ongoing = ongoing.next;
          count++;
        }
      }
  
      return -1;
    }

}

module.exports = LinkedList;
