const MerkelTree = require("./MerkelTree");
const TransactionList = require("./TransactionList");
const Transaction = require("./Transaction");
const util = require("util");
const PatriciaTrie = require("./PatriciaTrie");

let transactionList = new TransactionList();

for (let index = 0; index < 5; index++) {
    transactionList.add(new Transaction(Math.random(), Math.random(), Math.random()));
}

let patriciaTrie = new PatriciaTrie();

transactionList.list.forEach(transaction => {
    patriciaTrie.add(transaction);
});

console.log(patriciaTrie.get(transactionList.list[0].hash));
console.log(patriciaTrie.remove(transactionList.list[0].hash));
console.log(patriciaTrie.get(transactionList.list[0].hash));

console.log(patriciaTrie.get("random-string"));
console.log(patriciaTrie.remove("random-string"));
// const tree = new MerkelTree();

// tree.createTree(transactionList.list);
// console.log(util.inspect(tree, false, null, true));
// tree.verify(transactionList.list[2]);

// transactionList.list[2].to = "kashish";
// console.log(util.inspect(transactionList, false, null, true));
// tree.verify(transactionList.list[2]);