import VDOM from './VDOM';

export default function create(tree, root) {
    // DI? parse html string or jsx here and build the expected tree
    return new VDOM(tree, root);
}