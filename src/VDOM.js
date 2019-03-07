import { build } from './traverse';

export default class {
    constructor(container) {
        this.container = container;
        this.tree = undefined;
    }

    render(tree) {
        this.tree = build(tree, this.tree);

        if(this.container.childElementCount === 0) {
            this.container.appendChild(this.tree.element);
        }
        
        console.log(this.tree);
    }
}