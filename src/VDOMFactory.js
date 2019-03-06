import VDOM from './VDOM';

export default function create(elementOrSelector) {
    var root = parseElementLike(elementOrSelector);
    return new VDOM(root);
}

function parseElementLike(thing) {
    if(typeof thing === 'string') {
        return document.querySelector(thing);
    } else {
        return thing;
    }
}