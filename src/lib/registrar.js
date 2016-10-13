const subscribers = [];

function subscribe(fn) {
  subscribers.push(fn)
}

function notify(e) {
  subscribers.forEach(fn => fn(e))
}

export { subscribe, notify}