class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    buildTree(array) {
        for (let value of array) {
            console.log(value);
            this.insert(value);
        }
    }
    
    insert(value) {
        if (this.root === null) {
            this.root = new Node(value)
        }
        else {
            let node = this.root
            while(true) {
                if (value === node.value) {
                    return;
                }
                else if (value < node.value) {
                    if (node.left) node = node.left;
                    else {
                        node.left = new Node(value);
                        return;
                    }
                }
                else {
                    if (node.right) node = node.right;
                    else {
                        node.right = new Node(value);
                        return;
                    }
                }
            }
        }
    }

    delete(value) {

    }

    find(value) {
        let node = this.root
        while(node) {
            console.log(node.value)
            if(value === node.value) {
                return node;
            }
            else if (value < node.value) {
                node = node.left;
            }
            else if (value > node.value) {
                node = node.right;
            }
        }
        return false;
    }

    levelOrder() {
        let ret = [];
        let array = [];
        array.push(this.root)

        while (array.length > 0) {
            let length = array.length;
            for (let node of array) {
                node = array.shift();
                ret.push(node.value);

                if (node.left) array.push(node.left);
                if (node.right) array.push(node.right);
            }

        }
        this.printArray(ret);
    }

    preorder() {
        let ret = [];
        let node = this.root;
        this.dfs_preorder(node, ret);
        this.printArray(ret);
    }

    dfs_preorder(node, array) {
        if(node === null) {
            return
        }

        array.push(node.value);
        this.dfs_preorder(node.left, array);
        this.dfs_preorder(node.right, array);
    }

    inorder() {
        let ret = [];
        let node = this.root;
        this.dfs_inorder(node, ret);
        this.printArray(ret);
    }

    dfs_inorder(node, array) {
        if(node === null) {
            return
        }

        this.dfs_inorder(node.left, array);
        array.push(node.value);
        this.dfs_inorder(node.right, array);
    }

    postorder() {
        let ret = [];
        let node = this.root;
        this.dfs_postorder(node, ret);
        this.printArray(ret);
    }

    dfs_postorder(node, array) {
        if(node === null) {
            return
        }

        this.dfs_postorder(node.left, array);
        this.dfs_postorder(node.right, array);
        array.push(node.value);
    }

    printArray(array) {
        console.log(array);
    }

    height() {

    }

    depth() {

    }

    isBalanced() {

    }

    rebalance() {

    }
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
};


let tree = new Tree();
tree.buildTree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
prettyPrint(tree.root);
// console.log(tree.find(7))
// console.log(tree.find(9))
// console.log(tree.find(100))
tree.levelOrder();
tree.preorder();
tree.inorder();
tree.postorder();
