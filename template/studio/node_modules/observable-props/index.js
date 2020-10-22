const isObservable = require('is-observable')
const xtend = require('xtend')

function setKey(source, key, value) {
  return xtend(source, {[key]: value})
}

module.exports = configure()
module.exports.configure = configure

function configure(config = {}) {
  let Observable = config.Observable

  props.operator = function asOperator(options) {
    return props(this, options)
  }

  return props

  function props(input, options = {}) {
    Observable = (Observable || require('any-observable'))

    return new Observable(observer => input.subscribe(observer))
      .switchMap(object => {
        const keyObservables = Object.keys(object)
          .map(key => {
            const value = object[key]
            return isObservable(value)
              ? Observable.from(value).map(value => [key, value])
              : Observable.of([key, value])
          })

        return options.wait
          ? Observable
            .combineLatest(...keyObservables)
            .map(pairs => pairs.reduce((acc, [key, value]) => setKey(acc, key, value), {}))

          : Observable
            .merge(...keyObservables)
            .scan((acc, [key, value]) => setKey(acc, key, value), {})
      })
  }
}