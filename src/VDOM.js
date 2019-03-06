
export default class {
    constructor(container) {
        this.container = container;
        this.tree = undefined;
    }

    render(tree) {
        if(this.tree === undefined) {
            let base = build(tree);
            this.container.appendChild(base);
            this.tree = tree;
        }
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