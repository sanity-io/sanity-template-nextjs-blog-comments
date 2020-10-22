/* global setTimeout */
import {test, Test} from 'tap'
import latest from '../index'

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

Test.prototype.addAssert('within', 3, function (actual, expected, margin, message, extra) {
  const lower = expected - margin
  const upper = expected + margin
  if (actual < lower || actual > upper) {
    this.fail(message || `Expected a number between ${lower} and ${upper} but got ${actual}`)
  }
  this.pass()
})

async function doSomething(duration) {
  await sleep(duration)
  return `the operation took ${duration}ms`
}

const doSomethingLatest = latest(doSomething)

test('a sequence of calls resolves to whatever value the latest promise resolves to', async t => {
  const promises = [9, 8, 5, 1, 2].map(doSomethingLatest)
  const results = await* promises

  t.deepEqual(results, [
    'the operation took 2ms',
    'the operation took 2ms',
    'the operation took 2ms',
    'the operation took 2ms',
    'the operation took 2ms'
  ])
})

test('all promises resolves when the latest promise is resolved', async t => {
  const promises = [1000, 1, 800, 50].map(doSomethingLatest)
  const startTime = new Date().getTime()
  const results = await* promises

  const elapsedTime = new Date().getTime() - startTime
  t.ok(elapsedTime <= 100, `All results should be resolved approximately by the time the latest operation finishes. Instead it took ${elapsedTime}ms`)
  t.deepEqual(results, [
    'the operation took 50ms',
    'the operation took 50ms',
    'the operation took 50ms',
    'the operation took 50ms'
  ])
})


test('it returns the latest even if the latest is really slow', async t => {
  const startTime = new Date().getTime()

  const slow = doSomethingLatest(110)
  await sleep(50)
  const anotherSlow = doSomethingLatest(100)

  const resultOfSlow = await slow
  const elapsedTime = new Date().getTime() - startTime
  t.within(elapsedTime, 150, 10)
  t.equal(resultOfSlow, 'the operation took 100ms')
  t.equal(await anotherSlow, 'the operation took 100ms')
})


test('clears the previous pending when a promise resolves', async t => {
  t.equal(await doSomethingLatest(50), 'the operation took 50ms')
  await sleep(100)
  t.equal(await doSomethingLatest(10), 'the operation took 10ms')
})
