
export default class {
    constructor(tree, root) {
        this.tree = tree;
        this.root = root;
    }

    render() {
        let base = build(this.tree);
        this.root.appendChild(base);
    }
}

function build(node) {
    let element;

    if(node.type === 'text') {
        element = document.createTextNode(node.text);
    } else {
        element = document.createElement(node.type);
    }

    node.children.forEach(function(child) {
        let childElement = build(child);
        element.appendChild(childElement);
    });

    return element;
}