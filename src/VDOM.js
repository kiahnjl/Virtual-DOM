
export default class {
    constructor(container) {
        this.container = container;
        this.tree = undefined;
    }

    render(tree) {
        if(this.tree === undefined) {
            this.tree = build(tree);
            this.container.appendChild(result.element);
        }
    }
}

function build(node) {
    let nodeCopy = emptyNode();
    nodeCopy.element = createElement(node);

    node.children.forEach(function(childNode) {
        let childCopy = build(childNode);
        nodeCopy.children.push(childCopy);
        nodeCopy.element.appendChild(childCopy.element);
    });

    return nodeCopy;
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