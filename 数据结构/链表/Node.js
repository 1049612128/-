//链表的定义实现
var Node =function(data){
    this.data = data;
    this.next=null;
}
var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
node1.next=node2;
node2.next=node3;
console.log(node1.data)//1
console.log(node1.next.data)//2
console.log(node1.next.next.data)//3
module.exports=Node;