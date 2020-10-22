export default function latest(fn) {
  let lastAdded
  let pending
  let resolve
  let reject
  return function (...args) {
    // in the future if/when promises gets cancellable, we could abort the previous here like this
    // lastAdded.cancel()
    lastAdded = fn(...args)
    if (!pending) {
      pending = new Promise((_resolve, _reject) => {
        resolve = _resolve
        reject = _reject
      })
    }
    lastAdded.then(fulfill.bind(null, lastAdded), fail.bind(null, lastAdded))
    return pending
  }
  function fulfill(promise, value) {
    if (promise === lastAdded) {
      pending = null
      resolve(value)
    }
  }

  function fail(promise, error) {
    if (promise === lastAdded) {
      pending = null
      reject(error)
    }
  }
}
