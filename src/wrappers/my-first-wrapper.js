import {subscribe} from '../lib/registrar';

function myCallback(e) {
  console.log("event", e);
  console.log("target", e.target);
  console.log("currentTarget", e.currentTarget);
  console.log("target", e.target.getAttribute("class"));
  console.log("currentTarget", e.currentTarget.getAttribute("class"));
}

subscribe(myCallback);