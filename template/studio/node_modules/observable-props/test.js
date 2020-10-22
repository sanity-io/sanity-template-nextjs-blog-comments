const test = require('tap').test

const Observable = require('rxjs').Observable
const props = require('./index')

const OPTIONS = {wait: true}
test('one-off observable', t => {
  const object = Observable.of({
    foo: 'bar',
    observable: Observable.of('OK')
  })

  props(object, OPTIONS)
    .subscribe({
      next(snapshot) {
        t.same(snapshot, {
          foo: 'bar',
          observable: 'OK'
        })
      },
      complete() {
        t.end()
      }
    })
})

test('delayed observable', t => {
  const object = Observable.of({
    foo: 'bar',
    observable: Observable.timer(100).map(() => 'OK')
  })

  props(object, OPTIONS)
    .subscribe({
      next(snapshot) {
        t.same(snapshot, {
          foo: 'bar',
          observable: 'OK'
        })
      },
      complete() {
        t.end()
      }
    })
})

test('multiple values over time', t => {
  const object = Observable.of({
    foo: 'bar',
    observable: Observable.interval(10).map(i => `OK ${i}`)
  })

  const values = []
  const subscription = props(object, OPTIONS)
    .subscribe({
      next(snapshot) {
        values.push(snapshot)
      },
      complete() {
        t.fail('Did not expect observable to complete')
      }
    })

  setTimeout(() => {
    subscription.unsubscribe()
    t.ok(values.length > 10)
    t.same(values[0], {foo: 'bar', observable: 'OK 0'})
    t.same(values[1], {foo: 'bar', observable: 'OK 1'})
    t.same(values[2], {foo: 'bar', observable: 'OK 2'})
    t.end()
  }, 200)
})

test('key replaced with another observable', t => {
  const object = Observable.of({
    foo: 'bar',
    observable: Observable.interval(10).map(i => `OK ${i}`)
  })

  const values = []
  const subscription = props(object, OPTIONS)
    .subscribe({
      next(snapshot) {
        values.push(snapshot)
      },
      complete() {
        t.fail('Did not expect observable to complete')
      }
    })

  setTimeout(() => {
    subscription.unsubscribe()
    t.ok(values.length > 10)
    t.same(values[0], {foo: 'bar', observable: 'OK 0'})
    t.same(values[1], {foo: 'bar', observable: 'OK 1'})
    t.same(values[2], {foo: 'bar', observable: 'OK 2'})
    t.end()
  }, 200)
})

test('key nested with plain values', t => {
  const object = Observable.of({
    foo: 'bar',
    nested: Observable.timer(10).switchMap(i => props(Observable.of({prop: i, foo: Observable.of('foo')}), OPTIONS))
  })

  props(object, OPTIONS)
    .first()
    .subscribe(snapshot => {
      t.same(snapshot, {foo: 'bar', nested: {prop: 0, foo: 'foo'}})
      t.end()
    })

})

test('multiple keys with observables', t => {
  const object = Observable.of({
    first: Observable.timer(10),
    second: Observable.timer(100)
  })

  props(object, OPTIONS)
    .first()
    .subscribe(snapshot => {
      t.same(snapshot, {first: 0, second: 0})
      t.end()
    })

})

test('sync', t => {
  const object = Observable.of({
    first: 'foo',
    nested: props(Observable.of({
      foo: 'foo',
      bar: 'bar'
    }), OPTIONS)
  })

  let received = false
  props(object, OPTIONS)
    .first()
    .subscribe(snapshot => {
      received = true
      t.same(snapshot, {first: 'foo', nested: {foo: 'foo', bar: 'bar'}})
    })

  t.ok(received)
  t.end()

})
