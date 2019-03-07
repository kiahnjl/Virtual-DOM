
// super impose the two trees
export function build(nextNode, prevNode) {
    // I'll be assuming that if a prevNode exists, it always has an element

    // the node has been deleted
    if(nextNode === undefined && prevNode !== undefined) {
        return undefined;
    }

    let currNode;

    // the node already exists, at least one in that spot does
    // AND they are the same type. If the type changes
    // we will re-render that part of the tree
    if(nextNode !== undefined && prevNode !== undefined &&
        nextNode.type === prevNode.type
    ) {
        // todo either no mutation or abstract into objects
        currNode = prevNode;
        currNode.isNew = false;
        
        // a property may have changed
        if(currNode.type === 'text') {
            if(nextNode.text !== prevNode.text) {
                currNode.element.textContent = nextNode.text;
            }
        }
        
    } else {
        // the node is new! because they cant both be undefined and
        // the nextNode is not undefined => the prevNode is undefined
        currNode = emptyNode();
        currNode.type = nextNode.type;
        currNode.element = createElement(nextNode);
        currNode.isNew = true;
    }

    let nextNodeChildren = nextNode ? nextNode.children : [];
    let prevNodeChildren = prevNode ? prevNode.children : [];
    // go through ALL the children nodes
    for(let i = 0; (i < nextNodeChildren.length || i < prevNodeChildren.length); i++) {
        let currNodeChild = build(nextNodeChildren[i], prevNodeChildren[i]);

        // this section needs a CLEANUP
        if(currNodeChild === undefined) {
            // if the element is being replaced then it does have children!
            // but the previous children need to be removed
            let nodeToRemove = prevNodeChildren[i];
            removeArrayItemAt(currNode.children, i);
            nodeToRemove.element.remove();

        } else if(currNodeChild !== undefined && currNodeChild.isNew) {
            insertArrayItemAt(currNode.children, currNodeChild, i);
            insertElementAt(currNode.element, currNodeChild.element, i);
        }
    }


    return currNode;
}

function emptyNode() {
    return {
        type: '',
        children: []
    };
}

function createElement(node) {
    let element;

    if(node.type === 'text') {
        element = document.createTextNode(node.text);
    } else {
        element = document.createElement(node.type);
    }

    return element;
}

function insertElementAt(parentNode, childNode, index) {
    parentNode.insertBefore(childNode, parentNode.childNodes[index]);
}

// update to NOT use in-place array mutation

function insertArrayItemAt(arr, item, index) {
    arr.splice(index, 0, item);
}

function removeArrayItemAt(arr, index) {
    arr.splice(index, 1);
}