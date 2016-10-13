import {subscribe} from '../lib/registrar';

function match(matcher) {
  return (node) => {
    return node && node.matches && node.matches(matcher) || (node.parentNode && match(matcher)(node.parentNode))
  }
}

function myCallback(e) {
  if (match("#second-form")(e.target)) {
    console.log("event second-form", e);
    console.log("target second-form", e.target);
    console.log("currentTarget", e.currentTarget);
  }
}

subscribe(myCallback);