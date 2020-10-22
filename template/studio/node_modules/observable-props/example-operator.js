const Observable = require('rxjs').Observable
const props = require('./index').operator

const object = {
  foo: 'bar',
  time: Observable.interval(1000).take(5)
    .map(n => ({
      date: new Date(),
      subtimer: Observable.interval(100).take(4)
    }))
    ::props()
}

const observable = Observable.of(object)

observable::props()
  .subscribe({next: snapshot => console.log(snapshot)})
