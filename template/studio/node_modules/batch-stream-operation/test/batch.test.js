/* eslint-disable id-length */

'use strict' // eslint-disable-line

const fs = require('fs')
const path = require('path')
const test = require('tape')
const split2 = require('split2')
const batcher = require('../')

test('it batches, closes on uneven batch counts', t => {
  let batchNum = 0
  const batchStream = batcher({
    concurrency: 3,
    batchSize: 10,
    operation: (batch, cb) => {
      const expectedLength = ++batchNum === 11 ? 4 : 10
      t.equal(batch.length, expectedLength, `batch size should be ${expectedLength}`)
      setImmediate(cb)
    }
  })

  t.plan(12)

  fs.createReadStream(path.join(__dirname, 'fixture.txt'), {encoding: 'utf8'})
    .pipe(split2())
    .pipe(batchStream)
    .on('complete', () => t.ok('Complete called'))
})

test('it batches, closes on even batch counts', t => {
  const batchStream = batcher({
    concurrency: 4,
    batchSize: 8,
    operation: (batch, cb) => {
      t.equal(batch.length, 8, 'batch size should be 8')
      setImmediate(cb)
    }
  })

  t.plan(14)

  fs.createReadStream(path.join(__dirname, 'fixture.txt'), {encoding: 'utf8'})
    .pipe(split2())
    .pipe(batchStream)
    .on('complete', () => t.ok('Complete called'))
})

test('it closes only when all operations are done', t => {
  let batchNum = 0
  const completed = [false, false]
  const batchStream = batcher({
    concurrency: 5,
    batchSize: 70,
    operation: (batch, cb) => {
      const currentBatch = batchNum++
      setTimeout(() => {
        completed[currentBatch] = true
        cb()
      }, currentBatch === 0 ? 500 : 100)
    }
  })

  fs.createReadStream(path.join(__dirname, 'fixture.txt'), {encoding: 'utf8'})
    .pipe(split2())
    .pipe(batchStream)
    .on('complete', () => {
      t.ok(completed.every(Boolean), 'all operations should be done on complete')
      t.end()
    })
})
