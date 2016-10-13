import {subscribe} from '../lib/registrar';

function myCallback(e) {
  if (e.target && e.target.id === "my-field") {
    console.log("event my-field", e);
    console.log("target my-field", e.target);
    console.log("currentTarget my-field", e.currentTarget);
  }
}

subscribe(myCallback);