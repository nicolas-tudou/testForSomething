/**
 * 使用数组实现队列
 */
 class Queue {
  constructor (size) {
    this.queue = new Array()
    this.size = size
  }
  isFull () {
    return this.queue.length >= this.size
  }
  isEmpty () {
    return this.queue.length === 0
  }
  addQueue (item) {
    if (this.isFull()) {
      console.log('队列已经满了~~')
      return
    }
    this.queue.push(item)
  }
  getQueue () {
    if (this.isEmpty) {
      console.log('队列是空的~~')
      return
    }
    return this.queue.shift()
  }
  getHeader () {
    if (this.isEmpty) {
      console.log('队列是空的~~')
      return
    }
    return this.queue[0]
  }
 }

 let q = new Queue(4)
 q.addQueue(3)
 q.addQueue(3)
 q.addQueue(3)
 q.addQueue(3)
 q.addQueue(3)
 console.log('queue data: ', q)
