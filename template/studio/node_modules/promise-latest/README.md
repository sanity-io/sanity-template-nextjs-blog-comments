# promise-latest [![Build Status](https://travis-ci.org/bjoerge/promise-latest.svg)](https://travis-ci.org/bjoerge/promise-latest)


[![NPM](https://nodei.co/npm/promise-latest.png)](https://nodei.co/npm/promise-latest/)

`promise-latest` gives you a function that can be used to decorate a promise-returning function to make sure multiple calls to it always resolve with the value from the most recent promise returned by the original function.

If a promise returning function gets invoked and the promise returned by the previous call is still in progress, the  previously returned promise(s) will instead be resolved with the value from the promise returned by the most recent call.

## An example:
 
```js

var latest = require('promise-latest')

function sometimesFastSometimesSlow(duration) {
  return new Promise(function() {
    setTimeout(function() {
      resolve('operation took ' + duration + 'time')
    }, duration)
  })
}

var latestFromUnpredictable = latest(sometimesFastSometimesSlow) 

var slow = latestFromUnpredictable(1000)
var fastest = latestFromUnpredictable(10)
var faster = latestFromUnpredictable(100)

slow.then(function(value) {
  console.log(value)
})

faster.then(function(value) {
  console.log(value)
})

fastest.then(function(value) {
  console.log(value)
})

// Will take around 10 ms and print
=> operation took 100ms
=> operation took 100ms
=> operation took 100ms

```

A great use case is for preventing out of order results while the user types in an auto-complete:

    user type 'c' -> search for 'c'
    user type 'a' -> search for 'ca'
    user type 't' -> search for 'cat'

Since 'c' is a much broader search term than 'cat', the operation `search for 'c'` may take longer time to process, so maybe you'll get the results in this order:

    10ms  => result of search for 'cat'
    50ms  => result of search for 'ca'
    100ms => result of search for 'c'

Now, if your code handling search looks like this, you are in trouble, because the result of search `c` will be presented
to the user *after* the result from both `cat` and `ca`

```js
searchElement.addEventListener('keyup', function(event) {
  ajax('/search?term=' + event.target.value).then(presentSearchResult)
})
```

This can be easily fixed by decorating the ajax function above with:
```js
var latest = require('latest-promise')
var latestAjax = latest(ajax) // do not worry about out of order results
searchElement.addEventListener('keyup', function(event) {
  latestAjax('/search?term=' + event.target.value).then(presentSearchResult)
})
```

What you should know is that even though presentResult will be called after the latest request finishes, `presentSearchResult`
will still be called three times with the same arguments. Which is suboptimal. To avoid this you could use some kind of
throttling or argument diffing.

Also, if the user types really fast, there's arguably no need to actually perform three requests. Avoid this
by debouncing the ajax function.

# A note about cancellation / debouncing

`latest-promise` does not provide any kind of throttling / debouncing. It will call function you provide whenever 
the function returned from `latest(...)` is called. If/when native promises comes with an ability to be cancelled, 
any promise that is ongoing when the function receives a new call may be cancelled. In the mean time, you can use a
module that debounces promises to avoid unneccesary work.
