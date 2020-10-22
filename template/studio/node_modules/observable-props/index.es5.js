'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var isObservable = require('is-observable');
var xtend = require('xtend');

function setKey(source, key, value) {
  return xtend(source, _defineProperty({}, key, value));
}

module.exports = configure();
module.exports.configure = configure;

function configure() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var Observable = config.Observable;

  props.operator = function asOperator(options) {
    return props(this, options);
  };

  return props;

  function props(input) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    Observable = Observable || require('any-observable');

    return new Observable(function (observer) {
      return input.subscribe(observer);
    }).switchMap(function (object) {
      var _Observable, _Observable2;

      var keyObservables = Object.keys(object).map(function (key) {
        var value = object[key];
        return isObservable(value) ? Observable.from(value).map(function (value) {
          return [key, value];
        }) : Observable.of([key, value]);
      });

      return options.wait ? (_Observable = Observable).combineLatest.apply(_Observable, _toConsumableArray(keyObservables)).map(function (pairs) {
        return pairs.reduce(function (acc, _ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              key = _ref2[0],
              value = _ref2[1];

          return setKey(acc, key, value);
        }, {});
      }) : (_Observable2 = Observable).merge.apply(_Observable2, _toConsumableArray(keyObservables)).scan(function (acc, _ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            key = _ref4[0],
            value = _ref4[1];

        return setKey(acc, key, value);
      }, {});
    });
  }
}

