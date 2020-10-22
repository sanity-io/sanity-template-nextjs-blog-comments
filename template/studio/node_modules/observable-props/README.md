# `observable-props`

> Like Bluebird.props, but for observables.

Takes an object where one or more keys are observables, and returns a reactive stream that emits snapshots of that object as each observable emits values.

## Install
```
npm i -S observable-props
```

## Usage example

```js
import {Observable} from 'rxjs'
import props from 'observable-props'

const myObservable = Observable.from({
 foo: 'bar',
 time: Observable.interval(1000)
})

props(myObservable)
.subscribe(snapshot => console.log(snapshot))

//=> { foo: 'bar', time: 0 }
//=> { foo: 'bar', time: 1 }
//=> { foo: 'bar', time: 2 }
//=> { foo: 'bar', time: 3 }
//=> ...
```

## Use as operator
Note: requires support for the proposed bind operator syntax (e.g through the babel plugin transform-function-bind)
```js
import {Observable} from 'rxjs'
import {operator as props} from 'observable-props'

const myObservable = Observable.from({
 foo: 'bar',
 time: Observable.interval(1000)
})
::props({wait: true})
.subscribe(snapshot => console.log(snapshot))
```

## API

`props(observable : Observable<Object>, options? : {wait: true|false}) : Observable<Object>`

By default returned observable will start emitting a new version of the object as soon as any of the property observables emits values. If you rather want to wait for the first value of every observable found on keys before emitting the first snapshot, you can pass `wait=true` as an option.

# Changelog

## 2.0.0
Instead of manually tracking props/subscriptions, this version is implemented as an operator that builds on other operators. This means compatibility with zen-observable is dropped (for now).

It still can be configured to work with any other observable as long as it implements the following (non standard) static methods:
- `from` 
- `of` 
- `combineLatest` 
- `merge` 

And the following instance methods:
- `switchMap`
- `scan`

# License

MIT
