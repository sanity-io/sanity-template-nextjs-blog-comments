const Observable = require('rxjs').Observable
const props = require('.')

const object = {
  foo: 'bar',
  time: Observable.interval(1000)
}

props(Observable.of(object)).subscribe(snapshot => console.log('default', snapshot))

props(Observable.of(object), {wait: true}).subscribe(snapshot => console.log('with wait=true', snapshot))
