'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

var isHTMLElement = (function (value) {
    return value instanceof HTMLElement;
});

var EVENTS = {
    BLUR: 'blur',
    CHANGE: 'change',
    INPUT: 'input',
};
var VALIDATION_MODE = {
    onBlur: 'onBlur',
    onChange: 'onChange',
    onSubmit: 'onSubmit',
    onTouched: 'onTouched',
    all: 'all',
};
var VALUE = 'value';
var SELECT = 'select';
var UNDEFINED = 'undefined';
var INPUT_VALIDATION_RULES = {
    max: 'max',
    min: 'min',
    maxLength: 'maxLength',
    minLength: 'minLength',
    pattern: 'pattern',
    required: 'required',
    validate: 'validate',
};

function attachEventListeners(_a, shouldAttachChangeEvent, handleChange) {
    var ref = _a.ref;
    if (isHTMLElement(ref) && handleChange) {
        ref.addEventListener(shouldAttachChangeEvent ? EVENTS.CHANGE : EVENTS.INPUT, handleChange);
        ref.addEventListener(EVENTS.BLUR, handleChange);
    }
}

var isNullOrUndefined = (function (value) { return value == null; });

var isObjectType = function (value) { return typeof value === 'object'; };
var isObject = (function (value) {
    return !isNullOrUndefined(value) &&
        !Array.isArray(value) &&
        isObjectType(value) &&
        !(value instanceof Date);
});

var isKey = (function (value) {
    return !Array.isArray(value) &&
        (/^\w*$/.test(value) ||
            !/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/.test(value));
});

var compact = (function (value) { return value.filter(Boolean); });

var stringToPath = (function (input) {
    return compact(input
        .replace(/["|']/g, '')
        .replace(/\[/g, '.')
        .replace(/\]/g, '')
        .split('.'));
});

function set(object, path, value) {
    var index = -1;
    var tempPath = isKey(path) ? [path] : stringToPath(path);
    var length = tempPath.length;
    var lastIndex = length - 1;
    while (++index < length) {
        var key = tempPath[index];
        var newValue = value;
        if (index !== lastIndex) {
            var objValue = object[key];
            newValue =
                isObject(objValue) || Array.isArray(objValue)
                    ? objValue
                    : !isNaN(+tempPath[index + 1])
                        ? []
                        : {};
        }
        object[key] = newValue;
        object = object[key];
    }
    return object;
}

var transformToNestObject = (function (data, value) {
    if (value === void 0) { value = {}; }
    for (var key in data) {
        !isKey(key) ? set(value, key, data[key]) : (value[key] = data[key]);
    }
    return value;
});

var isUndefined = (function (val) { return val === undefined; });

var get = (function (obj, path, defaultValue) {
    var result = compact(path.split(/[,[\].]+?/)).reduce(function (result, key) { return (isNullOrUndefined(result) ? result : result[key]); }, obj);
    return isUndefined(result) || result === obj
        ? isUndefined(obj[path])
            ? defaultValue
            : obj[path]
        : result;
});

var focusOnErrorField = (function (fields, fieldErrors) {
    for (var key in fields) {
        if (get(fieldErrors, key)) {
            var field = fields[key];
            if (field) {
                if (field.ref.focus) {
                    field.ref.focus();
                    break;
                }
                else if (field.options) {
                    field.options[0].ref.focus();
                    break;
                }
            }
        }
    }
});

var removeAllEventListeners = (function (ref, validateWithStateUpdate) {
    if (isHTMLElement(ref) && ref.removeEventListener) {
        ref.removeEventListener(EVENTS.INPUT, validateWithStateUpdate);
        ref.removeEventListener(EVENTS.CHANGE, validateWithStateUpdate);
        ref.removeEventListener(EVENTS.BLUR, validateWithStateUpdate);
    }
});

var defaultReturn = {
    isValid: false,
    value: '',
};
var getRadioValue = (function (options) {
    return Array.isArray(options)
        ? options.reduce(function (previous, option) {
            return option && option.ref.checked
                ? {
                    isValid: true,
                    value: option.ref.value,
                }
                : previous;
        }, defaultReturn)
        : defaultReturn;
});

var getMultipleSelectValue = (function (options) {
    return __spread(options).filter(function (_a) {
        var selected = _a.selected;
        return selected;
    })
        .map(function (_a) {
        var value = _a.value;
        return value;
    });
});

var isRadioInput = (function (element) {
    return element.type === 'radio';
});

var isFileInput = (function (element) {
    return element.type === 'file';
});

var isCheckBoxInput = (function (element) {
    return element.type === 'checkbox';
});

var isMultipleSelect = (function (element) {
    return element.type === SELECT + "-multiple";
});

var defaultResult = {
    value: false,
    isValid: false,
};
var validResult = { value: true, isValid: true };
var getCheckboxValue = (function (options) {
    if (Array.isArray(options)) {
        if (options.length > 1) {
            var values = options
                .filter(function (option) { return option && option.ref.checked; })
                .map(function (_a) {
                var value = _a.ref.value;
                return value;
            });
            return { value: values, isValid: !!values.length };
        }
        var _a = options[0].ref, checked = _a.checked, value = _a.value, attributes = _a.attributes;
        return checked
            ? attributes && !isUndefined(attributes.value)
                ? isUndefined(value) || value === ''
                    ? validResult
                    : { value: value, isValid: true }
                : validResult
            : defaultResult;
    }
    return defaultResult;
});

function getFieldValue(fieldsRef, name, shallowFieldsStateRef, excludeDisabled) {
    var field = fieldsRef.current[name];
    if (field) {
        var _a = field.ref, value = _a.value, disabled = _a.disabled, ref = field.ref;
        if (disabled && excludeDisabled) {
            return;
        }
        if (isFileInput(ref)) {
            return ref.files;
        }
        if (isRadioInput(ref)) {
            return getRadioValue(field.options).value;
        }
        if (isMultipleSelect(ref)) {
            return getMultipleSelectValue(ref.options);
        }
        if (isCheckBoxInput(ref)) {
            return getCheckboxValue(field.options).value;
        }
        return value;
    }
    if (shallowFieldsStateRef) {
        return get(shallowFieldsStateRef.current, name);
    }
}

function isDetached(element) {
    if (!element) {
        return true;
    }
    if (!(element instanceof HTMLElement) ||
        element.nodeType === Node.DOCUMENT_NODE) {
        return false;
    }
    return isDetached(element.parentNode);
}

var isEmptyObject = (function (value) {
    return isObject(value) && !Object.keys(value).length;
});

var isBoolean = (function (value) { return typeof value === 'boolean'; });

function baseGet(object, updatePath) {
    var path = updatePath.slice(0, -1);
    var length = path.length;
    var index = 0;
    while (index < length) {
        object = isUndefined(object) ? index++ : object[updatePath[index++]];
    }
    return object;
}
function unset(object, path) {
    var updatePath = isKey(path) ? [path] : stringToPath(path);
    var childObject = updatePath.length == 1 ? object : baseGet(object, updatePath);
    var key = updatePath[updatePath.length - 1];
    var previousObjRef = undefined;
    if (childObject) {
        delete childObject[key];
    }
    for (var k = 0; k < updatePath.slice(0, -1).length; k++) {
        var index = -1;
        var objectRef = undefined;
        var currentPaths = updatePath.slice(0, -(k + 1));
        var currentPathsLength = currentPaths.length - 1;
        if (k > 0) {
            previousObjRef = object;
        }
        while (++index < currentPaths.length) {
            var item = currentPaths[index];
            objectRef = objectRef ? objectRef[item] : object[item];
            if (currentPathsLength === index &&
                ((isObject(objectRef) && isEmptyObject(objectRef)) ||
                    (Array.isArray(objectRef) &&
                        !objectRef.filter(function (data) {
                            return (isObject(data) && !isEmptyObject(data)) || isBoolean(data);
                        }).length))) {
                previousObjRef ? delete previousObjRef[item] : delete object[item];
            }
            previousObjRef = objectRef;
        }
    }
    return object;
}

var isSameRef = function (fieldValue, ref) {
    return fieldValue && fieldValue.ref === ref;
};
function findRemovedFieldAndRemoveListener(fieldsRef, handleChange, field, shallowFieldsStateRef, shouldUnregister, forceDelete) {
    var ref = field.ref, _a = field.ref, name = _a.name, type = _a.type;
    var fieldRef = fieldsRef.current[name];
    if (!shouldUnregister) {
        var value = getFieldValue(fieldsRef, name, shallowFieldsStateRef);
        if (!isUndefined(value)) {
            set(shallowFieldsStateRef.current, name, value);
        }
    }
    if (!type) {
        delete fieldsRef.current[name];
        return;
    }
    if ((isRadioInput(ref) || isCheckBoxInput(ref)) && fieldRef) {
        var options_1 = fieldRef.options;
        if (Array.isArray(options_1) && options_1.length) {
            compact(options_1).forEach(function (option, index) {
                var ref = option.ref;
                if ((ref && isDetached(ref) && isSameRef(option, ref)) || forceDelete) {
                    removeAllEventListeners(ref, handleChange);
                    unset(options_1, "[" + index + "]");
                }
            });
            if (options_1 && !compact(options_1).length) {
                delete fieldsRef.current[name];
            }
        }
        else {
            delete fieldsRef.current[name];
        }
    }
    else if ((isDetached(ref) && isSameRef(fieldRef, ref)) || forceDelete) {
        removeAllEventListeners(ref, handleChange);
        delete fieldsRef.current[name];
    }
}

function setFieldArrayDirtyFields(values, defaultValues, dirtyFields, parentNode, parentName) {
    var _a;
    var index = -1;
    while (++index < values.length) {
        for (var key in values[index]) {
            if (Array.isArray(values[index][key])) {
                !dirtyFields[index] && (dirtyFields[index] = {});
                dirtyFields[index][key] = [];
                setFieldArrayDirtyFields(values[index][key], get(defaultValues[index] || {}, key, []), dirtyFields[index][key], dirtyFields[index], key);
            }
            else {
                get(defaultValues[index] || {}, key) === values[index][key]
                    ? set(dirtyFields[index] || {}, key)
                    : (dirtyFields[index] = __assign(__assign({}, dirtyFields[index]), (_a = {}, _a[key] = true, _a)));
            }
        }
        !dirtyFields.length &&
            parentNode &&
            delete parentNode[parentName];
    }
    return dirtyFields.length ? dirtyFields : undefined;
}

var isString = (function (value) { return typeof value === 'string'; });

var isPrimitive = (function (value) {
    return isNullOrUndefined(value) || !isObjectType(value);
});

function deepMerge(target, source) {
    if (isPrimitive(target) || isPrimitive(source)) {
        return source;
    }
    for (var key in source) {
        var targetValue = target[key];
        var sourceValue = source[key];
        try {
            target[key] =
                (isObject(targetValue) && isObject(sourceValue)) ||
                    (Array.isArray(targetValue) && Array.isArray(sourceValue))
                    ? deepMerge(targetValue, sourceValue)
                    : sourceValue;
        }
        catch (_a) { }
    }
    return target;
}

var getFieldsValues = (function (fieldsRef, shallowFieldsStateRef, excludeDisabled, search) {
    var output = {};
    var _loop_1 = function (name_1) {
        if (isUndefined(search) ||
            (isString(search)
                ? name_1.startsWith(search)
                : Array.isArray(search) && search.find(function (data) { return name_1.startsWith(data); }))) {
            output[name_1] = getFieldValue(fieldsRef, name_1, undefined, excludeDisabled);
        }
    };
    for (var name_1 in fieldsRef.current) {
        _loop_1(name_1);
    }
    return deepMerge(transformToNestObject(__assign({}, ((shallowFieldsStateRef || {}).current || {}))), transformToNestObject(output));
});

function deepEqual(object1, object2, isErrorObject) {
    var e_1, _a;
    if (object1 === void 0) { object1 = []; }
    if (object2 === void 0) { object2 = []; }
    var keys1 = Object.keys(object1);
    var keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    try {
        for (var keys1_1 = __values(keys1), keys1_1_1 = keys1_1.next(); !keys1_1_1.done; keys1_1_1 = keys1_1.next()) {
            var key = keys1_1_1.value;
            if (!(isErrorObject && ['ref', 'context'].includes(key))) {
                var val1 = object1[key];
                var val2 = object2[key];
                if ((isObject(val1) || Array.isArray(val1)) &&
                    (isObject(val2) || Array.isArray(val2))
                    ? !deepEqual(val1, val2, isErrorObject)
                    : val1 !== val2) {
                    return false;
                }
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (keys1_1_1 && !keys1_1_1.done && (_a = keys1_1.return)) _a.call(keys1_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return true;
}

function isErrorStateChanged(_a) {
    var errors = _a.errors, name = _a.name, error = _a.error, validFields = _a.validFields, fieldsWithValidation = _a.fieldsWithValidation;
    var isValid = isUndefined(error);
    var previousError = get(errors, name);
    return ((isValid && !!previousError) ||
        (!isValid && !deepEqual(previousError, error, true)) ||
        (isValid && get(fieldsWithValidation, name) && !get(validFields, name)));
}

var isRegex = (function (value) { return value instanceof RegExp; });

var isValueMessage = function (value) { return isObject(value) && !isRegex(value); };
var getValueAndMessage = (function (validationData) {
    return isValueMessage(validationData)
        ? validationData
        : {
            value: validationData,
            message: '',
        };
});

var isFunction = (function (value) {
    return typeof value === 'function';
});

var isMessage = (function (value) {
    return isString(value) || (isObject(value) && React.isValidElement(value));
});

function getValidateError(result, ref, type) {
    if (type === void 0) { type = 'validate'; }
    if (isMessage(result) || (isBoolean(result) && !result)) {
        return {
            type: type,
            message: isMessage(result) ? result : '',
            ref: ref,
        };
    }
}

var appendErrors = (function (name, validateAllFieldCriteria, errors, type, message) {
    var _a;
    if (validateAllFieldCriteria) {
        var error = errors[name];
        return __assign(__assign({}, error), { types: __assign(__assign({}, (error && error.types ? error.types : {})), (_a = {}, _a[type] = message || true, _a)) });
    }
    return {};
});

var validateField = (function (fieldsRef, validateAllFieldCriteria, _a, shallowFieldsStateRef) {
    var ref = _a.ref, _b = _a.ref, type = _b.type, value = _b.value, options = _a.options, required = _a.required, maxLength = _a.maxLength, minLength = _a.minLength, min = _a.min, max = _a.max, pattern = _a.pattern, validate = _a.validate;
    return __awaiter(void 0, void 0, void 0, function () {
        var fields, name, error, isRadio, isCheckBox, isRadioOrCheckbox, isEmpty, appendErrorsCurry, getMinMaxMessage, _c, requiredValue, requiredMessage, exceedMax, exceedMin, _d, maxValue, maxMessage, _e, minValue, minMessage, valueNumber, valueDate, _f, maxLengthValue, maxLengthMessage, _g, minLengthValue, minLengthMessage, inputLength, exceedMax, exceedMin, _h, patternValue, patternMessage, fieldValue, validateRef, result, validateError, validationResult, _j, _k, _l, key, validateFunction, validateResult, validateError, e_1_1;
        var e_1, _m;
        return __generator(this, function (_o) {
            switch (_o.label) {
                case 0:
                    fields = fieldsRef.current;
                    name = ref.name;
                    error = {};
                    isRadio = isRadioInput(ref);
                    isCheckBox = isCheckBoxInput(ref);
                    isRadioOrCheckbox = isRadio || isCheckBox;
                    isEmpty = value === '';
                    appendErrorsCurry = appendErrors.bind(null, name, validateAllFieldCriteria, error);
                    getMinMaxMessage = function (exceedMax, maxLengthMessage, minLengthMessage, maxType, minType) {
                        if (maxType === void 0) { maxType = INPUT_VALIDATION_RULES.maxLength; }
                        if (minType === void 0) { minType = INPUT_VALIDATION_RULES.minLength; }
                        var message = exceedMax ? maxLengthMessage : minLengthMessage;
                        error[name] = __assign({ type: exceedMax ? maxType : minType, message: message,
                            ref: ref }, (exceedMax
                            ? appendErrorsCurry(maxType, message)
                            : appendErrorsCurry(minType, message)));
                    };
                    if (required &&
                        ((!isRadio && !isCheckBox && (isEmpty || isNullOrUndefined(value))) ||
                            (isBoolean(value) && !value) ||
                            (isCheckBox && !getCheckboxValue(options).isValid) ||
                            (isRadio && !getRadioValue(options).isValid))) {
                        _c = isMessage(required)
                            ? { value: !!required, message: required }
                            : getValueAndMessage(required), requiredValue = _c.value, requiredMessage = _c.message;
                        if (requiredValue) {
                            error[name] = __assign({ type: INPUT_VALIDATION_RULES.required, message: requiredMessage, ref: isRadioOrCheckbox
                                    ? ((fields[name].options || [])[0] || {}).ref
                                    : ref }, appendErrorsCurry(INPUT_VALIDATION_RULES.required, requiredMessage));
                            if (!validateAllFieldCriteria) {
                                return [2 /*return*/, error];
                            }
                        }
                    }
                    if (!isNullOrUndefined(min) || !isNullOrUndefined(max)) {
                        exceedMax = void 0;
                        exceedMin = void 0;
                        _d = getValueAndMessage(max), maxValue = _d.value, maxMessage = _d.message;
                        _e = getValueAndMessage(min), minValue = _e.value, minMessage = _e.message;
                        if (type === 'number' || (!type && !isNaN(value))) {
                            valueNumber = ref.valueAsNumber || parseFloat(value);
                            if (!isNullOrUndefined(maxValue)) {
                                exceedMax = valueNumber > maxValue;
                            }
                            if (!isNullOrUndefined(minValue)) {
                                exceedMin = valueNumber < minValue;
                            }
                        }
                        else {
                            valueDate = ref.valueAsDate || new Date(value);
                            if (isString(maxValue)) {
                                exceedMax = valueDate > new Date(maxValue);
                            }
                            if (isString(minValue)) {
                                exceedMin = valueDate < new Date(minValue);
                            }
                        }
                        if (exceedMax || exceedMin) {
                            getMinMaxMessage(!!exceedMax, maxMessage, minMessage, INPUT_VALIDATION_RULES.max, INPUT_VALIDATION_RULES.min);
                            if (!validateAllFieldCriteria) {
                                return [2 /*return*/, error];
                            }
                        }
                    }
                    if (isString(value) && !isEmpty && (maxLength || minLength)) {
                        _f = getValueAndMessage(maxLength), maxLengthValue = _f.value, maxLengthMessage = _f.message;
                        _g = getValueAndMessage(minLength), minLengthValue = _g.value, minLengthMessage = _g.message;
                        inputLength = value.toString().length;
                        exceedMax = !isNullOrUndefined(maxLengthValue) && inputLength > maxLengthValue;
                        exceedMin = !isNullOrUndefined(minLengthValue) && inputLength < minLengthValue;
                        if (exceedMax || exceedMin) {
                            getMinMaxMessage(!!exceedMax, maxLengthMessage, minLengthMessage);
                            if (!validateAllFieldCriteria) {
                                return [2 /*return*/, error];
                            }
                        }
                    }
                    if (pattern && !isEmpty) {
                        _h = getValueAndMessage(pattern), patternValue = _h.value, patternMessage = _h.message;
                        if (isRegex(patternValue) && !patternValue.test(value)) {
                            error[name] = __assign({ type: INPUT_VALIDATION_RULES.pattern, message: patternMessage, ref: ref }, appendErrorsCurry(INPUT_VALIDATION_RULES.pattern, patternMessage));
                            if (!validateAllFieldCriteria) {
                                return [2 /*return*/, error];
                            }
                        }
                    }
                    if (!validate) return [3 /*break*/, 11];
                    fieldValue = getFieldValue(fieldsRef, name, shallowFieldsStateRef);
                    validateRef = isRadioOrCheckbox && options ? options[0].ref : ref;
                    if (!isFunction(validate)) return [3 /*break*/, 2];
                    return [4 /*yield*/, validate(fieldValue)];
                case 1:
                    result = _o.sent();
                    validateError = getValidateError(result, validateRef);
                    if (validateError) {
                        error[name] = __assign(__assign({}, validateError), appendErrorsCurry(INPUT_VALIDATION_RULES.validate, validateError.message));
                        if (!validateAllFieldCriteria) {
                            return [2 /*return*/, error];
                        }
                    }
                    return [3 /*break*/, 11];
                case 2:
                    if (!isObject(validate)) return [3 /*break*/, 11];
                    validationResult = {};
                    _o.label = 3;
                case 3:
                    _o.trys.push([3, 8, 9, 10]);
                    _j = __values(Object.entries(validate)), _k = _j.next();
                    _o.label = 4;
                case 4:
                    if (!!_k.done) return [3 /*break*/, 7];
                    _l = __read(_k.value, 2), key = _l[0], validateFunction = _l[1];
                    if (!isEmptyObject(validationResult) && !validateAllFieldCriteria) {
                        return [3 /*break*/, 7];
                    }
                    return [4 /*yield*/, validateFunction(fieldValue)];
                case 5:
                    validateResult = _o.sent();
                    validateError = getValidateError(validateResult, validateRef, key);
                    if (validateError) {
                        validationResult = __assign(__assign({}, validateError), appendErrorsCurry(key, validateError.message));
                        if (validateAllFieldCriteria) {
                            error[name] = validationResult;
                        }
                    }
                    _o.label = 6;
                case 6:
                    _k = _j.next();
                    return [3 /*break*/, 4];
                case 7: return [3 /*break*/, 10];
                case 8:
                    e_1_1 = _o.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 10];
                case 9:
                    try {
                        if (_k && !_k.done && (_m = _j.return)) _m.call(_j);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 10:
                    if (!isEmptyObject(validationResult)) {
                        error[name] = __assign({ ref: validateRef }, validationResult);
                        if (!validateAllFieldCriteria) {
                            return [2 /*return*/, error];
                        }
                    }
                    _o.label = 11;
                case 11: return [2 /*return*/, error];
            }
        });
    });
});

var getPath = function (path, values) {
    var getInnerPath = function (key, value, isObject) {
        var pathWithIndex = isObject ? path + "." + key : path + "[" + key + "]";
        return isPrimitive(value) ? pathWithIndex : getPath(pathWithIndex, value);
    };
    return Object.entries(values)
        .map(function (_a) {
        var _b = __read(_a, 2), key = _b[0], value = _b[1];
        return getInnerPath(key, value, isObject(values));
    })
        .flat(Infinity);
};

var assignWatchFields = (function (fieldValues, fieldName, watchFields, inputValue, isSingleField) {
    var value;
    watchFields.add(fieldName);
    if (isEmptyObject(fieldValues)) {
        value = undefined;
    }
    else {
        value = get(fieldValues, fieldName);
        if (isObject(value) || Array.isArray(value)) {
            getPath(fieldName, value).forEach(function (name) { return watchFields.add(name); });
        }
    }
    return isUndefined(value)
        ? isSingleField
            ? inputValue
            : get(inputValue, fieldName)
        : value;
});

var skipValidation = (function (_a) {
    var isOnBlur = _a.isOnBlur, isOnChange = _a.isOnChange, isOnTouch = _a.isOnTouch, isTouched = _a.isTouched, isReValidateOnBlur = _a.isReValidateOnBlur, isReValidateOnChange = _a.isReValidateOnChange, isBlurEvent = _a.isBlurEvent, isSubmitted = _a.isSubmitted, isOnAll = _a.isOnAll;
    if (isOnAll) {
        return false;
    }
    else if (!isSubmitted && isOnTouch) {
        return !(isTouched || isBlurEvent);
    }
    else if (isSubmitted ? isReValidateOnBlur : isOnBlur) {
        return !isBlurEvent;
    }
    else if (isSubmitted ? isReValidateOnChange : isOnChange) {
        return isBlurEvent;
    }
    return true;
});

var getFieldArrayParentName = (function (name) { return name.substring(0, name.indexOf('[')); });

var isMatchFieldArrayName = function (name, searchName) {
    return RegExp(("^" + searchName + "[\\d+]").replace(/\[/g, '\\[').replace(/\]/g, '\\]')).test(name);
};
var isNameInFieldArray = (function (names, name) { return __spread(names).some(function (current) { return isMatchFieldArrayName(name, current); }); });

var isSelectInput = (function (element) {
    return element.type === SELECT + "-one";
});

function onDomRemove(fieldsRef, removeFieldEventListenerAndRef) {
    var observer = new MutationObserver(function () {
        var e_1, _a, e_2, _b;
        try {
            for (var _c = __values(Object.values(fieldsRef.current)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var field = _d.value;
                if (field && field.options) {
                    try {
                        for (var _e = (e_2 = void 0, __values(field.options)), _f = _e.next(); !_f.done; _f = _e.next()) {
                            var option = _f.value;
                            if (option && option.ref && isDetached(option.ref)) {
                                removeFieldEventListenerAndRef(field);
                            }
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
                else if (field && isDetached(field.ref)) {
                    removeFieldEventListenerAndRef(field);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
    });
    observer.observe(window.document, {
        childList: true,
        subtree: true,
    });
    return observer;
}

function cloneObject(object) {
    var copy;
    if (isPrimitive(object)) {
        return object;
    }
    if (object instanceof Date) {
        copy = new Date(object.getTime());
        return copy;
    }
    copy = Array.isArray(object) ? [] : {};
    for (var key in object) {
        copy[key] = cloneObject(object[key]);
    }
    return copy;
}

var modeChecker = (function (mode) { return ({
    isOnSubmit: !mode || mode === VALIDATION_MODE.onSubmit,
    isOnBlur: mode === VALIDATION_MODE.onBlur,
    isOnChange: mode === VALIDATION_MODE.onChange,
    isOnAll: mode === VALIDATION_MODE.all,
    isOnTouch: mode === VALIDATION_MODE.onTouched,
}); });

var isRadioOrCheckboxFunction = (function (ref) {
    return isRadioInput(ref) || isCheckBoxInput(ref);
});

var isWindowUndefined = typeof window === UNDEFINED;
var isWeb = typeof document !== UNDEFINED &&
    !isWindowUndefined &&
    !isUndefined(window.HTMLElement);
var isProxyEnabled = isWeb ? 'Proxy' in window : typeof Proxy !== UNDEFINED;
function useForm(_a) {
    var _this = this;
    var _b = _a === void 0 ? {} : _a, _c = _b.mode, mode = _c === void 0 ? VALIDATION_MODE.onSubmit : _c, _d = _b.reValidateMode, reValidateMode = _d === void 0 ? VALIDATION_MODE.onChange : _d, resolver = _b.resolver, context = _b.context, _e = _b.defaultValues, defaultValues = _e === void 0 ? {} : _e, _f = _b.shouldFocusError, shouldFocusError = _f === void 0 ? true : _f, _g = _b.shouldUnregister, shouldUnregister = _g === void 0 ? true : _g, criteriaMode = _b.criteriaMode;
    var fieldsRef = React.useRef({});
    var fieldArrayDefaultValuesRef = React.useRef({});
    var watchFieldsRef = React.useRef(new Set());
    var useWatchFieldsRef = React.useRef({});
    var useWatchRenderFunctionsRef = React.useRef({});
    var fieldsWithValidationRef = React.useRef({});
    var validFieldsRef = React.useRef({});
    var defaultValuesRef = React.useRef(defaultValues);
    var defaultValuesAtRenderRef = React.useRef({});
    var isUnMount = React.useRef(false);
    var isWatchAllRef = React.useRef(false);
    var handleChangeRef = React.useRef();
    var shallowFieldsStateRef = React.useRef(shouldUnregister ? {} : cloneObject(defaultValues));
    var resetFieldArrayFunctionRef = React.useRef({});
    var contextRef = React.useRef(context);
    var resolverRef = React.useRef(resolver);
    var fieldArrayNamesRef = React.useRef(new Set());
    var modeRef = React.useRef(modeChecker(mode));
    var _h = modeRef.current, isOnSubmit = _h.isOnSubmit, isOnTouch = _h.isOnTouch;
    var isValidateAllFieldCriteria = criteriaMode === VALIDATION_MODE.all;
    var _j = __read(React.useState({
        isDirty: false,
        dirtyFields: {},
        isSubmitted: false,
        submitCount: 0,
        touched: {},
        isSubmitting: false,
        isSubmitSuccessful: false,
        isValid: !isOnSubmit,
        errors: {},
    }), 2), formState = _j[0], setFormState = _j[1];
    var readFormStateRef = React.useRef({
        isDirty: !isProxyEnabled,
        dirtyFields: !isProxyEnabled,
        touched: !isProxyEnabled || isOnTouch,
        isSubmitting: !isProxyEnabled,
        isValid: !isProxyEnabled,
    });
    var formStateRef = React.useRef(formState);
    var observerRef = React.useRef();
    var _k = React.useRef(modeChecker(reValidateMode)).current, isReValidateOnBlur = _k.isOnBlur, isReValidateOnChange = _k.isOnChange;
    contextRef.current = context;
    resolverRef.current = resolver;
    formStateRef.current = formState;
    var updateFormState = React.useCallback(function (state) {
        if (state === void 0) { state = {}; }
        return !isUnMount.current &&
            setFormState(__assign(__assign({}, formStateRef.current), state));
    }, []);
    var shouldRenderBaseOnError = React.useCallback(function (name, error, shouldRender, state, isValid) {
        if (shouldRender === void 0) { shouldRender = false; }
        if (state === void 0) { state = {}; }
        var shouldReRender = shouldRender ||
            isErrorStateChanged({
                errors: formStateRef.current.errors,
                error: error,
                name: name,
                validFields: validFieldsRef.current,
                fieldsWithValidation: fieldsWithValidationRef.current,
            });
        var previousError = get(formStateRef.current.errors, name);
        if (error) {
            unset(validFieldsRef.current, name);
            shouldReRender =
                shouldReRender ||
                    !previousError ||
                    !deepEqual(previousError, error, true);
            set(formStateRef.current.errors, name, error);
        }
        else {
            if (get(fieldsWithValidationRef.current, name) || resolverRef.current) {
                set(validFieldsRef.current, name, true);
                shouldReRender = shouldReRender || previousError;
            }
            unset(formStateRef.current.errors, name);
        }
        if ((shouldReRender && !isNullOrUndefined(shouldRender)) ||
            !isEmptyObject(state)) {
            updateFormState(__assign(__assign(__assign({}, state), { errors: formStateRef.current.errors }), (resolverRef.current ? { isValid: !!isValid } : {})));
        }
    }, []);
    var setFieldValue = React.useCallback(function (name, rawValue) {
        var _a = fieldsRef.current[name], ref = _a.ref, options = _a.options;
        var value = isWeb && isHTMLElement(ref) && isNullOrUndefined(rawValue)
            ? ''
            : rawValue;
        if (isRadioInput(ref) && options) {
            options.forEach(function (_a) {
                var radioRef = _a.ref;
                return (radioRef.checked = radioRef.value === value);
            });
        }
        else if (isFileInput(ref) && !isString(value)) {
            ref.files = value;
        }
        else if (isMultipleSelect(ref)) {
            __spread(ref.options).forEach(function (selectRef) {
                return (selectRef.selected = value.includes(selectRef.value));
            });
        }
        else if (isCheckBoxInput(ref) && options) {
            options.length > 1
                ? options.forEach(function (_a) {
                    var checkboxRef = _a.ref;
                    return (checkboxRef.checked = Array.isArray(value)
                        ? !!value.find(function (data) { return data === checkboxRef.value; })
                        : value === checkboxRef.value);
                })
                : (options[0].ref.checked = !!value);
        }
        else {
            ref.value = value;
        }
    }, []);
    var isFormDirty = function () {
        return !deepEqual(getValues(), isEmptyObject(defaultValuesRef.current)
            ? defaultValuesAtRenderRef.current
            : defaultValuesRef.current);
    };
    var updateAndGetDirtyState = React.useCallback(function (name, shouldRender) {
        if (shouldRender === void 0) { shouldRender = true; }
        if (readFormStateRef.current.isDirty ||
            readFormStateRef.current.dirtyFields) {
            var isFieldDirty = get(defaultValuesAtRenderRef.current, name) !==
                getFieldValue(fieldsRef, name, shallowFieldsStateRef);
            var isDirtyFieldExist = get(formStateRef.current.dirtyFields, name);
            var previousIsDirty = formStateRef.current.isDirty;
            isFieldDirty
                ? set(formStateRef.current.dirtyFields, name, true)
                : unset(formStateRef.current.dirtyFields, name);
            var state = {
                isDirty: isFormDirty(),
                dirtyFields: formStateRef.current.dirtyFields,
            };
            var isChanged = (readFormStateRef.current.isDirty &&
                previousIsDirty !== state.isDirty) ||
                (readFormStateRef.current.dirtyFields &&
                    isDirtyFieldExist !== get(formStateRef.current.dirtyFields, name));
            if (isChanged && shouldRender) {
                formStateRef.current = __assign(__assign({}, formStateRef.current), state);
                updateFormState(__assign({}, state));
            }
            return isChanged ? state : {};
        }
        return {};
    }, []);
    var executeValidation = React.useCallback(function (name, skipReRender) { return __awaiter(_this, void 0, void 0, function () {
        var error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!fieldsRef.current[name]) return [3 /*break*/, 2];
                    return [4 /*yield*/, validateField(fieldsRef, isValidateAllFieldCriteria, fieldsRef.current[name], shallowFieldsStateRef)];
                case 1:
                    error = (_a.sent())[name];
                    shouldRenderBaseOnError(name, error, skipReRender);
                    return [2 /*return*/, isUndefined(error)];
                case 2: return [2 /*return*/, false];
            }
        });
    }); }, [shouldRenderBaseOnError, isValidateAllFieldCriteria]);
    var executeSchemaOrResolverValidation = React.useCallback(function (names) { return __awaiter(_this, void 0, void 0, function () {
        var errors, previousFormIsValid, isInputsValid, error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, resolverRef.current(getValues(), contextRef.current, isValidateAllFieldCriteria)];
                case 1:
                    errors = (_a.sent()).errors;
                    previousFormIsValid = formStateRef.current.isValid;
                    if (Array.isArray(names)) {
                        isInputsValid = names
                            .map(function (name) {
                            var error = get(errors, name);
                            error
                                ? set(formStateRef.current.errors, name, error)
                                : unset(formStateRef.current.errors, name);
                            return !error;
                        })
                            .every(Boolean);
                        updateFormState({
                            isValid: isEmptyObject(errors),
                            errors: formStateRef.current.errors,
                        });
                        return [2 /*return*/, isInputsValid];
                    }
                    else {
                        error = get(errors, names);
                        shouldRenderBaseOnError(names, error, previousFormIsValid !== isEmptyObject(errors), {}, isEmptyObject(errors));
                        return [2 /*return*/, !error];
                    }
            }
        });
    }); }, [shouldRenderBaseOnError, isValidateAllFieldCriteria]);
    var trigger = React.useCallback(function (name) { return __awaiter(_this, void 0, void 0, function () {
        var fields, result;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    fields = name || Object.keys(fieldsRef.current);
                    if (resolverRef.current) {
                        return [2 /*return*/, executeSchemaOrResolverValidation(fields)];
                    }
                    if (!Array.isArray(fields)) return [3 /*break*/, 2];
                    return [4 /*yield*/, Promise.all(fields.map(function (data) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, executeValidation(data, null)];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 1:
                    result = _a.sent();
                    updateFormState();
                    return [2 /*return*/, result.every(Boolean)];
                case 2: return [4 /*yield*/, executeValidation(fields, readFormStateRef.current.isValid)];
                case 3: return [2 /*return*/, _a.sent()];
            }
        });
    }); }, [executeSchemaOrResolverValidation, executeValidation]);
    var setInternalValues = React.useCallback(function (name, value, _a) {
        var e_1, _b;
        var shouldDirty = _a.shouldDirty, shouldValidate = _a.shouldValidate;
        var data = {};
        set(data, name, value);
        try {
            for (var _c = __values(getPath(name, value)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var fieldName = _d.value;
                if (fieldsRef.current[fieldName]) {
                    setFieldValue(fieldName, get(data, fieldName));
                    shouldDirty && updateAndGetDirtyState(fieldName);
                    shouldValidate && trigger(fieldName);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }, [trigger, setFieldValue, updateAndGetDirtyState]);
    var setInternalValue = React.useCallback(function (name, value, config) {
        var _a, _b;
        if (config === void 0) { config = {}; }
        if (fieldsRef.current[name]) {
            setFieldValue(name, value);
            config.shouldDirty && updateAndGetDirtyState(name);
        }
        else if (!isPrimitive(value)) {
            setInternalValues(name, value, config);
            if (fieldArrayNamesRef.current.has(name) && config.shouldDirty) {
                fieldArrayDefaultValuesRef.current[name] = value;
                resetFieldArrayFunctionRef.current[name]((_a = {},
                    _a[name] = value,
                    _a));
                if (readFormStateRef.current.isDirty ||
                    readFormStateRef.current.dirtyFields) {
                    set(formStateRef.current.dirtyFields, name, setFieldArrayDirtyFields(value, get(defaultValuesRef.current, name, []), get(formStateRef.current.dirtyFields, name, [])));
                    updateFormState({
                        isDirty: !deepEqual(__assign(__assign({}, getValues()), (_b = {}, _b[name] = value, _b)), defaultValuesRef.current),
                        dirtyFields: formStateRef.current.dirtyFields,
                    });
                }
            }
        }
        !shouldUnregister && set(shallowFieldsStateRef.current, name, value);
    }, [updateAndGetDirtyState, setFieldValue, setInternalValues]);
    var isFieldWatched = function (name) {
        return isWatchAllRef.current ||
            watchFieldsRef.current.has(name) ||
            watchFieldsRef.current.has((name.match(/\w+/) || [])[0]);
    };
    var renderWatchedInputs = function (name, found) {
        if (found === void 0) { found = true; }
        if (!isEmptyObject(useWatchFieldsRef.current)) {
            for (var key in useWatchFieldsRef.current) {
                if (!name ||
                    !useWatchFieldsRef.current[key].size ||
                    useWatchFieldsRef.current[key].has(name) ||
                    useWatchFieldsRef.current[key].has(getFieldArrayParentName(name))) {
                    useWatchRenderFunctionsRef.current[key]();
                    found = false;
                }
            }
        }
        return found;
    };
    function setValue(name, value, config) {
        setInternalValue(name, value, config);
        isFieldWatched(name) && updateFormState();
        renderWatchedInputs(name);
        (config || {}).shouldValidate && trigger(name);
    }
    handleChangeRef.current = handleChangeRef.current
        ? handleChangeRef.current
        : function (_a) {
            var type = _a.type, target = _a.target;
            return __awaiter(_this, void 0, void 0, function () {
                var name, field, error, isValid, isBlurEvent, shouldSkipValidation, state, shouldRender, errors, previousFormIsValid;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            name = target.name;
                            field = fieldsRef.current[name];
                            if (!field) return [3 /*break*/, 5];
                            isBlurEvent = type === EVENTS.BLUR;
                            shouldSkipValidation = skipValidation(__assign({ isBlurEvent: isBlurEvent,
                                isReValidateOnChange: isReValidateOnChange,
                                isReValidateOnBlur: isReValidateOnBlur, isTouched: !!get(formStateRef.current.touched, name), isSubmitted: formStateRef.current.isSubmitted }, modeRef.current));
                            state = updateAndGetDirtyState(name, false);
                            shouldRender = !isEmptyObject(state) || isFieldWatched(name);
                            if (isBlurEvent &&
                                !get(formStateRef.current.touched, name) &&
                                readFormStateRef.current.touched) {
                                set(formStateRef.current.touched, name, true);
                                state = __assign(__assign({}, state), { touched: formStateRef.current.touched });
                            }
                            if (shouldSkipValidation) {
                                renderWatchedInputs(name);
                                return [2 /*return*/, ((!isEmptyObject(state) ||
                                        (shouldRender && isEmptyObject(state))) &&
                                        updateFormState(state))];
                            }
                            if (!resolverRef.current) return [3 /*break*/, 2];
                            return [4 /*yield*/, resolverRef.current(getValues(), contextRef.current, isValidateAllFieldCriteria)];
                        case 1:
                            errors = (_b.sent()).errors;
                            previousFormIsValid = formStateRef.current.isValid;
                            error = get(errors, name);
                            isValid = isEmptyObject(errors);
                            if (previousFormIsValid !== isValid) {
                                shouldRender = true;
                            }
                            return [3 /*break*/, 4];
                        case 2: return [4 /*yield*/, validateField(fieldsRef, isValidateAllFieldCriteria, field, shallowFieldsStateRef)];
                        case 3:
                            error = (_b.sent())[name];
                            _b.label = 4;
                        case 4:
                            renderWatchedInputs(name);
                            shouldRenderBaseOnError(name, error, shouldRender, state, isValid);
                            _b.label = 5;
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
    function setFieldArrayDefaultValues(data) {
        var e_2, _a, _b;
        if (!shouldUnregister) {
            var copy = cloneObject(data);
            try {
                for (var _c = __values(fieldArrayNamesRef.current), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var value = _d.value;
                    if (isKey(value) && !copy[value]) {
                        copy = __assign(__assign({}, copy), (_b = {}, _b[value] = [], _b));
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_2) throw e_2.error; }
            }
            return copy;
        }
        return data;
    }
    function getValues(payload) {
        var e_3, _a;
        if (isString(payload)) {
            return getFieldValue(fieldsRef, payload, shallowFieldsStateRef);
        }
        if (Array.isArray(payload)) {
            var data = {};
            try {
                for (var payload_1 = __values(payload), payload_1_1 = payload_1.next(); !payload_1_1.done; payload_1_1 = payload_1.next()) {
                    var name_1 = payload_1_1.value;
                    set(data, name_1, getFieldValue(fieldsRef, name_1, shallowFieldsStateRef));
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (payload_1_1 && !payload_1_1.done && (_a = payload_1.return)) _a.call(payload_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
            return data;
        }
        return setFieldArrayDefaultValues(getFieldsValues(fieldsRef, shallowFieldsStateRef));
    }
    var validateResolver = React.useCallback(function (values) {
        if (values === void 0) { values = {}; }
        return __awaiter(_this, void 0, void 0, function () {
            var errors, isValid;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, resolverRef.current(__assign(__assign(__assign({}, defaultValuesRef.current), getValues()), values), contextRef.current, isValidateAllFieldCriteria)];
                    case 1:
                        errors = (_a.sent()).errors;
                        isValid = isEmptyObject(errors);
                        formStateRef.current.isValid !== isValid &&
                            updateFormState({
                                isValid: isValid,
                            });
                        return [2 /*return*/];
                }
            });
        });
    }, [isValidateAllFieldCriteria]);
    var removeFieldEventListener = React.useCallback(function (field, forceDelete) {
        return findRemovedFieldAndRemoveListener(fieldsRef, handleChangeRef.current, field, shallowFieldsStateRef, shouldUnregister, forceDelete);
    }, [shouldUnregister]);
    var removeFieldEventListenerAndRef = React.useCallback(function (field, forceDelete) {
        if (field) {
            removeFieldEventListener(field, forceDelete);
            if (shouldUnregister && !compact(field.options || []).length) {
                unset(defaultValuesAtRenderRef.current, field.ref.name);
                unset(validFieldsRef.current, field.ref.name);
                unset(fieldsWithValidationRef.current, field.ref.name);
                unset(formStateRef.current.errors, field.ref.name);
                set(formStateRef.current.dirtyFields, field.ref.name, true);
                updateFormState({
                    errors: formStateRef.current.errors,
                    isDirty: isFormDirty(),
                    dirtyFields: formStateRef.current.dirtyFields,
                });
                resolverRef.current && validateResolver();
            }
        }
    }, [validateResolver, removeFieldEventListener]);
    function clearErrors(name) {
        name &&
            (Array.isArray(name) ? name : [name]).forEach(function (inputName) {
                return fieldsRef.current[inputName]
                    ? isKey(inputName)
                        ? delete formStateRef.current.errors[inputName]
                        : set(formStateRef.current.errors, inputName, undefined)
                    : unset(formStateRef.current.errors, inputName);
            });
        updateFormState({
            errors: name ? formStateRef.current.errors : {},
        });
    }
    function setError(name, error) {
        var ref = (fieldsRef.current[name] || {}).ref;
        set(formStateRef.current.errors, name, __assign(__assign({}, error), { ref: ref }));
        updateFormState({
            isValid: false,
            errors: formStateRef.current.errors,
        });
        error.shouldFocus && ref && ref.focus && ref.focus();
    }
    var watchInternal = React.useCallback(function (fieldNames, defaultValue, watchId) {
        var watchFields = watchId
            ? useWatchFieldsRef.current[watchId]
            : watchFieldsRef.current;
        var combinedDefaultValues = isUndefined(defaultValue)
            ? defaultValuesRef.current
            : defaultValue;
        var fieldValues = getFieldsValues(fieldsRef, shallowFieldsStateRef, false, fieldNames);
        if (isString(fieldNames)) {
            return assignWatchFields(fieldValues, fieldNames, watchFields, isUndefined(defaultValue)
                ? get(combinedDefaultValues, fieldNames)
                : defaultValue, true);
        }
        if (Array.isArray(fieldNames)) {
            return fieldNames.reduce(function (previous, name) {
                var _a;
                return (__assign(__assign({}, previous), (_a = {}, _a[name] = assignWatchFields(fieldValues, name, watchFields, combinedDefaultValues), _a)));
            }, {});
        }
        isWatchAllRef.current = isUndefined(watchId);
        return transformToNestObject((!isEmptyObject(fieldValues) && fieldValues) ||
            combinedDefaultValues);
    }, []);
    function watch(fieldNames, defaultValue) {
        return watchInternal(fieldNames, defaultValue);
    }
    function unregister(name) {
        var e_4, _a;
        try {
            for (var _b = __values(Array.isArray(name) ? name : [name]), _c = _b.next(); !_c.done; _c = _b.next()) {
                var fieldName = _c.value;
                removeFieldEventListenerAndRef(fieldsRef.current[fieldName], true);
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
    }
    function registerFieldRef(ref, validateOptions) {
        if (validateOptions === void 0) { validateOptions = {}; }
        {
            if (!ref.name) {
                return console.warn('📋 Field is missing `name` attribute', ref, "https://react-hook-form.com/api#useForm");
            }
            if (fieldArrayNamesRef.current.has(ref.name.split(/\[\d+\]$/)[0]) &&
                !RegExp(("^" + ref.name.split(/\[\d+\]$/)[0] + "[\\d+].\\w+")
                    .replace(/\[/g, '\\[')
                    .replace(/\]/g, '\\]')).test(ref.name)) {
                return console.warn('📋 `name` prop should be in object shape: name="test[index].name"', ref, 'https://react-hook-form.com/api#useFieldArray');
            }
        }
        var name = ref.name, type = ref.type, value = ref.value;
        var fieldRefAndValidationOptions = __assign({ ref: ref }, validateOptions);
        var fields = fieldsRef.current;
        var isRadioOrCheckbox = isRadioOrCheckboxFunction(ref);
        var isFieldArray = isNameInFieldArray(fieldArrayNamesRef.current, name);
        var compareRef = function (currentRef) {
            return isWeb && (!isHTMLElement(ref) || currentRef === ref);
        };
        var field = fields[name];
        var isEmptyDefaultValue = true;
        var defaultValue;
        if (field &&
            (isRadioOrCheckbox
                ? Array.isArray(field.options) &&
                    compact(field.options).find(function (option) {
                        return value === option.ref.value && compareRef(option.ref);
                    })
                : compareRef(field.ref))) {
            fields[name] = __assign(__assign({}, field), validateOptions);
            return;
        }
        if (type) {
            field = isRadioOrCheckbox
                ? __assign({ options: __spread(compact((field && field.options) || []), [
                        {
                            ref: ref,
                        },
                    ]), ref: { type: type, name: name } }, validateOptions) : __assign({}, fieldRefAndValidationOptions);
        }
        else {
            field = fieldRefAndValidationOptions;
        }
        fields[name] = field;
        var isEmptyUnmountFields = isUndefined(get(shallowFieldsStateRef.current, name));
        if (!isEmptyObject(defaultValuesRef.current) || !isEmptyUnmountFields) {
            defaultValue = get(isEmptyUnmountFields
                ? defaultValuesRef.current
                : shallowFieldsStateRef.current, name);
            isEmptyDefaultValue = isUndefined(defaultValue);
            if (!isEmptyDefaultValue && !isFieldArray) {
                setFieldValue(name, defaultValue);
            }
        }
        if (!isEmptyObject(validateOptions)) {
            set(fieldsWithValidationRef.current, name, true);
            if (!isOnSubmit && readFormStateRef.current.isValid) {
                validateField(fieldsRef, isValidateAllFieldCriteria, field, shallowFieldsStateRef).then(function (error) {
                    var previousFormIsValid = formStateRef.current.isValid;
                    isEmptyObject(error)
                        ? set(validFieldsRef.current, name, true)
                        : unset(validFieldsRef.current, name);
                    if (previousFormIsValid !== isEmptyObject(error)) {
                        updateFormState();
                    }
                });
            }
        }
        if (!defaultValuesAtRenderRef.current[name] &&
            !(isFieldArray && isEmptyDefaultValue)) {
            var fieldValue = getFieldValue(fieldsRef, name, shallowFieldsStateRef);
            set(defaultValuesAtRenderRef.current, name, isEmptyDefaultValue
                ? isObject(fieldValue)
                    ? __assign({}, fieldValue) : fieldValue
                : defaultValue);
            !isFieldArray && unset(formStateRef.current.dirtyFields, name);
        }
        if (type) {
            attachEventListeners(isRadioOrCheckbox && field.options
                ? field.options[field.options.length - 1]
                : field, isRadioOrCheckbox || isSelectInput(ref), handleChangeRef.current);
        }
    }
    function register(refOrValidationOptions, rules) {
        if (!isWindowUndefined) {
            if (isString(refOrValidationOptions)) {
                registerFieldRef({ name: refOrValidationOptions }, rules);
            }
            else if (isObject(refOrValidationOptions) &&
                'name' in refOrValidationOptions) {
                registerFieldRef(refOrValidationOptions, rules);
            }
            else {
                return function (ref) {
                    return ref && registerFieldRef(ref, refOrValidationOptions);
                };
            }
        }
    }
    var handleSubmit = React.useCallback(function (onValid, onInvalid) { return function (e) { return __awaiter(_this, void 0, void 0, function () {
        var fieldErrors, fieldValues, _a, errors, values, _b, _c, field, name_2, fieldError, e_5_1, _d;
        var e_5, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    if (e && e.preventDefault) {
                        e.preventDefault();
                        e.persist();
                    }
                    fieldErrors = {};
                    fieldValues = setFieldArrayDefaultValues(getFieldsValues(fieldsRef, shallowFieldsStateRef, true));
                    if (readFormStateRef.current.isSubmitting) {
                        updateFormState({
                            isSubmitting: true,
                        });
                    }
                    _f.label = 1;
                case 1:
                    _f.trys.push([1, , 16, 17]);
                    if (!resolverRef.current) return [3 /*break*/, 3];
                    return [4 /*yield*/, resolverRef.current(fieldValues, contextRef.current, isValidateAllFieldCriteria)];
                case 2:
                    _a = _f.sent(), errors = _a.errors, values = _a.values;
                    formStateRef.current.errors = errors;
                    fieldErrors = errors;
                    fieldValues = values;
                    return [3 /*break*/, 10];
                case 3:
                    _f.trys.push([3, 8, 9, 10]);
                    _b = __values(Object.values(fieldsRef.current)), _c = _b.next();
                    _f.label = 4;
                case 4:
                    if (!!_c.done) return [3 /*break*/, 7];
                    field = _c.value;
                    if (!field) return [3 /*break*/, 6];
                    name_2 = field.ref.name;
                    return [4 /*yield*/, validateField(fieldsRef, isValidateAllFieldCriteria, field, shallowFieldsStateRef)];
                case 5:
                    fieldError = _f.sent();
                    if (fieldError[name_2]) {
                        set(fieldErrors, name_2, fieldError[name_2]);
                        unset(validFieldsRef.current, name_2);
                    }
                    else if (get(fieldsWithValidationRef.current, name_2)) {
                        unset(formStateRef.current.errors, name_2);
                        set(validFieldsRef.current, name_2, true);
                    }
                    _f.label = 6;
                case 6:
                    _c = _b.next();
                    return [3 /*break*/, 4];
                case 7: return [3 /*break*/, 10];
                case 8:
                    e_5_1 = _f.sent();
                    e_5 = { error: e_5_1 };
                    return [3 /*break*/, 10];
                case 9:
                    try {
                        if (_c && !_c.done && (_e = _b.return)) _e.call(_b);
                    }
                    finally { if (e_5) throw e_5.error; }
                    return [7 /*endfinally*/];
                case 10:
                    if (!(isEmptyObject(fieldErrors) &&
                        Object.keys(formStateRef.current.errors).every(function (name) { return name in fieldsRef.current; }))) return [3 /*break*/, 12];
                    updateFormState({
                        errors: {},
                        isSubmitting: true,
                    });
                    return [4 /*yield*/, onValid(fieldValues, e)];
                case 11:
                    _f.sent();
                    return [3 /*break*/, 15];
                case 12:
                    formStateRef.current.errors = __assign(__assign({}, formStateRef.current.errors), fieldErrors);
                    _d = onInvalid;
                    if (!_d) return [3 /*break*/, 14];
                    return [4 /*yield*/, onInvalid(fieldErrors, e)];
                case 13:
                    _d = (_f.sent());
                    _f.label = 14;
                case 14:
                    shouldFocusError && focusOnErrorField(fieldsRef.current, fieldErrors);
                    _f.label = 15;
                case 15: return [3 /*break*/, 17];
                case 16:
                    updateFormState({
                        isSubmitted: true,
                        isSubmitting: false,
                        isSubmitSuccessful: isEmptyObject(formStateRef.current.errors),
                        errors: formStateRef.current.errors,
                        submitCount: formStateRef.current.submitCount + 1,
                    });
                    return [7 /*endfinally*/];
                case 17: return [2 /*return*/];
            }
        });
    }); }; }, [shouldFocusError, isValidateAllFieldCriteria]);
    var resetRefs = function (_a) {
        var errors = _a.errors, isDirty = _a.isDirty, isSubmitted = _a.isSubmitted, touched = _a.touched, isValid = _a.isValid, submitCount = _a.submitCount, dirtyFields = _a.dirtyFields;
        if (!isValid) {
            validFieldsRef.current = {};
            fieldsWithValidationRef.current = {};
        }
        defaultValuesAtRenderRef.current = {};
        fieldArrayDefaultValuesRef.current = {};
        watchFieldsRef.current = new Set();
        isWatchAllRef.current = false;
        updateFormState({
            submitCount: submitCount ? formStateRef.current.submitCount : 0,
            isDirty: isDirty ? formStateRef.current.isDirty : false,
            isSubmitted: isSubmitted ? formStateRef.current.isSubmitted : false,
            isValid: isValid ? formStateRef.current.isValid : false,
            dirtyFields: dirtyFields ? formStateRef.current.dirtyFields : {},
            touched: touched ? formStateRef.current.touched : {},
            errors: errors ? formStateRef.current.errors : {},
            isSubmitting: false,
            isSubmitSuccessful: false,
        });
    };
    var reset = function (values, omitResetState) {
        var e_6, _a;
        if (omitResetState === void 0) { omitResetState = {}; }
        if (isWeb) {
            try {
                for (var _b = __values(Object.values(fieldsRef.current)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var field = _c.value;
                    if (field) {
                        var ref = field.ref, options = field.options;
                        var inputRef = isRadioOrCheckboxFunction(ref) && Array.isArray(options)
                            ? options[0].ref
                            : ref;
                        if (isHTMLElement(inputRef)) {
                            try {
                                inputRef.closest('form').reset();
                                break;
                            }
                            catch (_d) { }
                        }
                    }
                }
            }
            catch (e_6_1) { e_6 = { error: e_6_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_6) throw e_6.error; }
            }
        }
        fieldsRef.current = {};
        defaultValuesRef.current = cloneObject(values || defaultValuesRef.current);
        if (values) {
            renderWatchedInputs('');
        }
        shallowFieldsStateRef.current = shouldUnregister
            ? {}
            : cloneObject(values) || {};
        Object.values(resetFieldArrayFunctionRef.current).forEach(function (resetFieldArray) { return isFunction(resetFieldArray) && resetFieldArray(); });
        resetRefs(omitResetState);
    };
    React.useEffect(function () {
        isUnMount.current = false;
        resolver && readFormStateRef.current.isValid && validateResolver();
        observerRef.current =
            observerRef.current || !isWeb
                ? observerRef.current
                : onDomRemove(fieldsRef, removeFieldEventListenerAndRef);
        return function () {
            isUnMount.current = true;
            observerRef.current && observerRef.current.disconnect();
            shallowFieldsStateRef.current = {};
            {
                return;
            }
        };
    }, [removeFieldEventListenerAndRef]);
    if (!resolver && readFormStateRef.current.isValid) {
        formState.isValid =
            deepEqual(validFieldsRef.current, fieldsWithValidationRef.current) &&
                isEmptyObject(formStateRef.current.errors);
    }
    var commonProps = {
        trigger: trigger,
        setValue: React.useCallback(setValue, [setInternalValue, trigger]),
        getValues: React.useCallback(getValues, []),
        register: React.useCallback(register, [defaultValuesRef.current]),
        unregister: React.useCallback(unregister, []),
    };
    var control = __assign({ renderWatchedInputs: renderWatchedInputs,
        shouldUnregister: shouldUnregister,
        removeFieldEventListener: removeFieldEventListener,
        watchInternal: watchInternal, mode: modeRef.current, reValidateMode: {
            isReValidateOnBlur: isReValidateOnBlur,
            isReValidateOnChange: isReValidateOnChange,
        }, fieldsRef: fieldsRef,
        isWatchAllRef: isWatchAllRef,
        watchFieldsRef: watchFieldsRef,
        resetFieldArrayFunctionRef: resetFieldArrayFunctionRef,
        useWatchFieldsRef: useWatchFieldsRef,
        useWatchRenderFunctionsRef: useWatchRenderFunctionsRef,
        fieldArrayDefaultValuesRef: fieldArrayDefaultValuesRef,
        validFieldsRef: validFieldsRef,
        fieldsWithValidationRef: fieldsWithValidationRef,
        fieldArrayNamesRef: fieldArrayNamesRef,
        readFormStateRef: readFormStateRef,
        formStateRef: formStateRef,
        defaultValuesRef: defaultValuesRef,
        shallowFieldsStateRef: shallowFieldsStateRef,
        updateFormState: updateFormState, validateResolver: resolver ? validateResolver : undefined }, commonProps);
    return __assign({ watch: watch,
        control: control, formState: isProxyEnabled
            ? new Proxy(formState, {
                get: function (obj, prop) {
                    {
                        if (prop === 'isValid' && isOnSubmit) {
                            console.warn('📋 `formState.isValid` is applicable with `onTouched`, `onChange` or `onBlur` mode. https://react-hook-form.com/api#formState');
                        }
                    }
                    if (prop in obj) {
                        readFormStateRef.current[prop] = true;
                        return obj[prop];
                    }
                    return undefined;
                },
            })
            : formState, handleSubmit: handleSubmit, reset: React.useCallback(reset, []), clearErrors: React.useCallback(clearErrors, []), setError: React.useCallback(setError, []), errors: formState.errors }, commonProps);
}

var FormContext = React.createContext(null);
FormContext.displayName = 'RHFContext';
var useFormContext = function () {
    return React.useContext(FormContext);
};
var FormProvider = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React.createElement(FormContext.Provider, { value: __assign({}, props) }, children));
};

var generateId = (function () {
    var d = typeof performance === UNDEFINED ? Date.now() : performance.now() * 1000;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (Math.random() * 16 + d) % 16 | 0;
        return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
});

var removeAt = function (data, index) { return __spread(data.slice(0, index), data.slice(index + 1)); };
function removeAtIndexes(data, index) {
    var k = -1;
    while (++k < data.length) {
        if (index.indexOf(k) >= 0) {
            delete data[k];
        }
    }
    return compact(data);
}
var removeArrayAt = (function (data, index) {
    return isUndefined(index)
        ? []
        : Array.isArray(index)
            ? removeAtIndexes(data, index)
            : removeAt(data, index);
});

var moveArrayAt = (function (data, from, to) {
    if (Array.isArray(data)) {
        if (isUndefined(data[to])) {
            data[to] = undefined;
        }
        data.splice(to, 0, data.splice(from, 1)[0]);
        return data;
    }
    return [];
});

var swapArrayAt = (function (data, indexA, indexB) {
    var temp = [data[indexB], data[indexA]];
    data[indexA] = temp[0];
    data[indexB] = temp[1];
});

function prepend(data, value) {
    return __spread((Array.isArray(value) ? value : [value || undefined]), data);
}

function insert(data, index, value) {
    return __spread(data.slice(0, index), (Array.isArray(value) ? value : [value || undefined]), data.slice(index));
}

var fillEmptyArray = (function (value) {
    return Array.isArray(value) ? Array(value.length).fill(undefined) : undefined;
});

function mapValueToBoolean(value) {
    if (isObject(value)) {
        var object = {};
        for (var key in value) {
            object[key] = true;
        }
        return [object];
    }
    return [true];
}
var fillBooleanArray = (function (value) {
    return (Array.isArray(value) ? value : [value])
        .map(mapValueToBoolean)
        .flat();
});

var mapIds = function (values, keyName) {
    return values.map(function (value) {
        var _a;
        return (__assign((_a = {}, _a[keyName] = generateId(), _a), value));
    });
};
var useFieldArray = function (_a) {
    var control = _a.control, name = _a.name, _b = _a.keyName, keyName = _b === void 0 ? 'id' : _b;
    var methods = useFormContext();
    {
        if (!control && !methods) {
            throw new Error('📋 useFieldArray is missing `control` prop. https://react-hook-form.com/api#useFieldArray');
        }
    }
    var focusIndexRef = React.useRef(-1);
    var _c = control || methods.control, isWatchAllRef = _c.isWatchAllRef, resetFieldArrayFunctionRef = _c.resetFieldArrayFunctionRef, fieldArrayNamesRef = _c.fieldArrayNamesRef, fieldsRef = _c.fieldsRef, defaultValuesRef = _c.defaultValuesRef, removeFieldEventListener = _c.removeFieldEventListener, formStateRef = _c.formStateRef, shallowFieldsStateRef = _c.shallowFieldsStateRef, updateFormState = _c.updateFormState, readFormStateRef = _c.readFormStateRef, watchFieldsRef = _c.watchFieldsRef, validFieldsRef = _c.validFieldsRef, fieldsWithValidationRef = _c.fieldsWithValidationRef, fieldArrayDefaultValuesRef = _c.fieldArrayDefaultValuesRef, validateResolver = _c.validateResolver, renderWatchedInputs = _c.renderWatchedInputs, getValues = _c.getValues, shouldUnregister = _c.shouldUnregister;
    var fieldArrayParentName = getFieldArrayParentName(name);
    var memoizedDefaultValues = React.useRef(__spread((get(fieldArrayDefaultValuesRef.current, fieldArrayParentName)
        ? get(fieldArrayDefaultValuesRef.current, name, [])
        : get(shouldUnregister
            ? defaultValuesRef.current
            : shallowFieldsStateRef.current, name, []))));
    var _d = __read(React.useState(mapIds(memoizedDefaultValues.current, keyName)), 2), fields = _d[0], setFields = _d[1];
    var allFields = React.useRef(fields);
    var getCurrentFieldsValues = function () {
        return get(getValues(), name, allFields.current).map(function (item, index) { return (__assign(__assign({}, allFields.current[index]), item)); });
    };
    allFields.current = fields;
    fieldArrayNamesRef.current.add(name);
    if (!get(fieldArrayDefaultValuesRef.current, fieldArrayParentName)) {
        set(fieldArrayDefaultValuesRef.current, fieldArrayParentName, get(defaultValuesRef.current, fieldArrayParentName));
    }
    var setFieldAndValidState = function (fieldsValues) {
        setFields(fieldsValues);
        if (readFormStateRef.current.isValid && validateResolver) {
            var values = getValues();
            set(values, name, fieldsValues);
            validateResolver(values);
        }
    };
    var getIsDirtyState = function (flagOrFields) {
        return (readFormStateRef.current.isDirty ||
            readFormStateRef.current.dirtyFields) &&
            (isUndefined(flagOrFields) ||
                !deepEqual(flagOrFields.map(function (_a) {
                    if (_a === void 0) { _a = {}; }
                    var _b = keyName, omitted = _a[_b], rest = __rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
                    return rest;
                }), get(defaultValuesRef.current, name)));
    };
    var resetFields = function () {
        for (var key in fieldsRef.current) {
            isMatchFieldArrayName(key, name) &&
                removeFieldEventListener(fieldsRef.current[key], true);
        }
    };
    var cleanup = function (ref) {
        return !compact(get(ref, name, [])).length && unset(ref, name);
    };
    var updateDirtyFieldsWithDefaultValues = function (updatedFieldArrayValues) {
        var defaultFieldArrayValues = get(defaultValuesRef.current, name, []);
        var updateDirtyFieldsBaseOnDefaultValues = function (base, target) {
            var _a;
            for (var key in base) {
                for (var innerKey in base[key]) {
                    if (innerKey !== keyName &&
                        (!target[key] ||
                            !base[key] ||
                            base[key][innerKey] !== target[key][innerKey])) {
                        set(formStateRef.current.dirtyFields, name + "[" + key + "]", __assign(__assign({}, get(formStateRef.current.dirtyFields, name + "[" + key + "]", {})), (_a = {}, _a[innerKey] = true, _a)));
                    }
                }
            }
        };
        if (updatedFieldArrayValues) {
            updateDirtyFieldsBaseOnDefaultValues(defaultFieldArrayValues, updatedFieldArrayValues);
            updateDirtyFieldsBaseOnDefaultValues(updatedFieldArrayValues, defaultFieldArrayValues);
        }
    };
    var batchStateUpdate = function (method, args, updatedFieldValues, isDirty, shouldSet, shouldUpdateValid) {
        if (isDirty === void 0) { isDirty = true; }
        if (shouldSet === void 0) { shouldSet = true; }
        if (shouldUpdateValid === void 0) { shouldUpdateValid = false; }
        if (get(shallowFieldsStateRef.current, name)) {
            var output = method(get(shallowFieldsStateRef.current, name), args.argA, args.argB);
            shouldSet && set(shallowFieldsStateRef.current, name, output);
        }
        if (get(fieldArrayDefaultValuesRef.current, name)) {
            var output = method(get(fieldArrayDefaultValuesRef.current, name), args.argA, args.argB);
            shouldSet && set(fieldArrayDefaultValuesRef.current, name, output);
            cleanup(fieldArrayDefaultValuesRef.current);
        }
        if (Array.isArray(get(formStateRef.current.errors, name))) {
            var output = method(get(formStateRef.current.errors, name), args.argA, args.argB);
            shouldSet && set(formStateRef.current.errors, name, output);
            cleanup(formStateRef.current.errors);
        }
        if (readFormStateRef.current.touched &&
            get(formStateRef.current.touched, name)) {
            var output = method(get(formStateRef.current.touched, name), args.argA, args.argB);
            shouldSet && set(formStateRef.current.touched, name, output);
            cleanup(formStateRef.current.touched);
        }
        if (readFormStateRef.current.dirtyFields ||
            readFormStateRef.current.isDirty) {
            var output = method(get(formStateRef.current.dirtyFields, name, []), args.argC, args.argD);
            shouldSet && set(formStateRef.current.dirtyFields, name, output);
            updateDirtyFieldsWithDefaultValues(updatedFieldValues);
            cleanup(formStateRef.current.dirtyFields);
        }
        if (shouldUpdateValid &&
            readFormStateRef.current.isValid &&
            !validateResolver) {
            set(validFieldsRef.current, name, method(get(validFieldsRef.current, name, []), args.argA));
            cleanup(validFieldsRef.current);
            set(fieldsWithValidationRef.current, name, method(get(fieldsWithValidationRef.current, name, []), args.argA));
            cleanup(fieldsWithValidationRef.current);
        }
        updateFormState({
            errors: formStateRef.current.errors,
            dirtyFields: formStateRef.current.dirtyFields,
            isDirty: isDirty,
            touched: formStateRef.current.touched,
        });
    };
    var append = function (value, shouldFocus) {
        if (shouldFocus === void 0) { shouldFocus = true; }
        var updateFormValues = __spread(allFields.current, mapIds(Array.isArray(value) ? value : [value], keyName));
        setFieldAndValidState(updateFormValues);
        if (readFormStateRef.current.dirtyFields ||
            readFormStateRef.current.isDirty) {
            updateDirtyFieldsWithDefaultValues(updateFormValues);
            updateFormState({
                isDirty: true,
                dirtyFields: formStateRef.current.dirtyFields,
            });
        }
        if (!shouldUnregister) {
            shallowFieldsStateRef.current[name] = __spread((shallowFieldsStateRef.current[name] || []), [
                value,
            ]);
        }
        focusIndexRef.current = shouldFocus ? allFields.current.length : -1;
    };
    var prepend$1 = function (value, shouldFocus) {
        if (shouldFocus === void 0) { shouldFocus = true; }
        var emptyArray = fillEmptyArray(value);
        var updatedFieldArrayValues = prepend(getCurrentFieldsValues(), mapIds(Array.isArray(value) ? value : [value], keyName));
        setFieldAndValidState(updatedFieldArrayValues);
        resetFields();
        batchStateUpdate(prepend, {
            argA: emptyArray,
            argC: fillBooleanArray(value),
        }, updatedFieldArrayValues);
        focusIndexRef.current = shouldFocus ? 0 : -1;
    };
    var remove = function (index) {
        var fieldValues = getCurrentFieldsValues();
        var updatedFieldValues = removeArrayAt(fieldValues, index);
        setFieldAndValidState(updatedFieldValues);
        resetFields();
        batchStateUpdate(removeArrayAt, {
            argA: index,
            argC: index,
        }, updatedFieldValues, getIsDirtyState(removeArrayAt(fieldValues, index)), true, true);
    };
    var insert$1 = function (index, value, shouldFocus) {
        if (shouldFocus === void 0) { shouldFocus = true; }
        var emptyArray = fillEmptyArray(value);
        var fieldValues = getCurrentFieldsValues();
        var updatedFieldArrayValues = insert(fieldValues, index, mapIds(Array.isArray(value) ? value : [value], keyName));
        setFieldAndValidState(updatedFieldArrayValues);
        resetFields();
        batchStateUpdate(insert, {
            argA: index,
            argB: emptyArray,
            argC: index,
            argD: fillBooleanArray(value),
        }, updatedFieldArrayValues, getIsDirtyState(insert(fieldValues, index)));
        focusIndexRef.current = shouldFocus ? index : -1;
    };
    var swap = function (indexA, indexB) {
        var fieldValues = getCurrentFieldsValues();
        swapArrayAt(fieldValues, indexA, indexB);
        resetFields();
        setFieldAndValidState(__spread(fieldValues));
        batchStateUpdate(swapArrayAt, {
            argA: indexA,
            argB: indexB,
            argC: indexA,
            argD: indexB,
        }, undefined, getIsDirtyState(fieldValues), false);
    };
    var move = function (from, to) {
        var fieldValues = getCurrentFieldsValues();
        moveArrayAt(fieldValues, from, to);
        resetFields();
        setFieldAndValidState(__spread(fieldValues));
        batchStateUpdate(moveArrayAt, {
            argA: from,
            argB: to,
            argC: from,
            argD: to,
        }, undefined, getIsDirtyState(fieldValues), false);
    };
    var reset = function (data) {
        resetFields();
        !data && unset(fieldArrayDefaultValuesRef.current, name);
        unset(shallowFieldsStateRef.current, name);
        memoizedDefaultValues.current = get(data || defaultValuesRef.current, name);
        setFields(mapIds(memoizedDefaultValues.current, keyName));
    };
    React.useEffect(function () {
        var e_1, _a;
        {
            if (!name) {
                console.warn('📋 useFieldArray is missing `name` attribute. https://react-hook-form.com/api#useFieldArray');
            }
        }
        var defaultValues = get(fieldArrayDefaultValuesRef.current, name);
        if (defaultValues && fields.length < defaultValues.length) {
            defaultValues.pop();
            set(fieldArrayDefaultValuesRef.current, name, defaultValues);
        }
        if (isWatchAllRef.current) {
            updateFormState();
        }
        else if (watchFieldsRef) {
            var shouldRenderUseWatch = true;
            try {
                for (var _b = __values(watchFieldsRef.current), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var watchField = _c.value;
                    if (watchField.startsWith(name)) {
                        updateFormState();
                        shouldRenderUseWatch = false;
                        break;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            shouldRenderUseWatch && renderWatchedInputs(name);
        }
        if (focusIndexRef.current > -1) {
            for (var key in fieldsRef.current) {
                var field = fieldsRef.current[key];
                if (key.startsWith(name + "[" + focusIndexRef.current + "]") &&
                    field.ref.focus) {
                    field.ref.focus();
                    break;
                }
            }
        }
        focusIndexRef.current = -1;
    }, [fields, name]);
    React.useEffect(function () {
        var resetFunctions = resetFieldArrayFunctionRef.current;
        var fieldArrayNames = fieldArrayNamesRef.current;
        if (!getFieldArrayParentName(name)) {
            resetFunctions[name] = reset;
        }
        return function () {
            resetFields();
            delete resetFunctions[name];
            fieldArrayNames.delete(name);
        };
    }, []);
    return {
        swap: React.useCallback(swap, [name]),
        move: React.useCallback(move, [name]),
        prepend: React.useCallback(prepend$1, [name]),
        append: React.useCallback(append, [name]),
        remove: React.useCallback(remove, [name]),
        insert: React.useCallback(insert$1, [name]),
        fields: fields,
    };
};

function useWatch(_a) {
    var control = _a.control, name = _a.name, defaultValue = _a.defaultValue;
    var methods = useFormContext();
    {
        if (!control && !methods) {
            throw new Error('📋 useWatch is missing `control` prop. https://react-hook-form.com/api#useWatch');
        }
    }
    var _b = control || methods.control, useWatchFieldsRef = _b.useWatchFieldsRef, useWatchRenderFunctionsRef = _b.useWatchRenderFunctionsRef, watchInternal = _b.watchInternal, defaultValuesRef = _b.defaultValuesRef;
    var _c = __read(React.useState(isUndefined(defaultValue)
        ? isString(name)
            ? get(defaultValuesRef.current, name)
            : Array.isArray(name)
                ? name.reduce(function (previous, inputName) {
                    var _a;
                    return (__assign(__assign({}, previous), (_a = {}, _a[inputName] = get(defaultValuesRef.current, inputName), _a)));
                }, {})
                : defaultValuesRef.current
        : defaultValue), 2), value = _c[0], setValue = _c[1];
    var idRef = React.useRef();
    var defaultValueRef = React.useRef(value);
    var updateWatchValue = React.useCallback(function () {
        var value = watchInternal(name, defaultValueRef.current, idRef.current);
        setValue(isObject(value)
            ? __assign({}, value) : Array.isArray(value)
            ? __spread(value) : value);
    }, [setValue, watchInternal, defaultValueRef, name, idRef]);
    React.useEffect(function () {
        {
            if (name === '') {
                console.warn('📋 useWatch is missing `name` attribute. https://react-hook-form.com/api#useWatch');
            }
        }
        var id = (idRef.current = generateId());
        var watchFieldsHookRender = useWatchRenderFunctionsRef.current;
        var watchFieldsHook = useWatchFieldsRef.current;
        watchFieldsHook[id] = new Set();
        watchFieldsHookRender[id] = updateWatchValue;
        watchInternal(name, defaultValueRef.current, id);
        return function () {
            delete watchFieldsHook[id];
            delete watchFieldsHookRender[id];
        };
    }, [
        name,
        updateWatchValue,
        useWatchRenderFunctionsRef,
        useWatchFieldsRef,
        watchInternal,
        defaultValueRef,
    ]);
    return (isUndefined(value) ? defaultValue : value);
}

var getInputValue = (function (event) {
    return isPrimitive(event) ||
        !isObject(event.target) ||
        (isObject(event.target) && !event.type)
        ? event
        : isUndefined(event.target.value)
            ? event.target.checked
            : event.target.value;
});

var Controller = function (_a) {
    var name = _a.name, rules = _a.rules, as = _a.as, render = _a.render, defaultValue = _a.defaultValue, control = _a.control, onFocus = _a.onFocus, rest = __rest(_a, ["name", "rules", "as", "render", "defaultValue", "control", "onFocus"]);
    var methods = useFormContext();
    {
        if (!control && !methods) {
            throw new Error('📋 Controller is missing `control` prop. https://react-hook-form.com/api#Controller');
        }
    }
    var _b = control || methods.control, defaultValuesRef = _b.defaultValuesRef, setValue = _b.setValue, register = _b.register, unregister = _b.unregister, trigger = _b.trigger, mode = _b.mode, _c = _b.reValidateMode, isReValidateOnBlur = _c.isReValidateOnBlur, isReValidateOnChange = _c.isReValidateOnChange, _d = _b.formStateRef.current, isSubmitted = _d.isSubmitted, touched = _d.touched, updateFormState = _b.updateFormState, readFormStateRef = _b.readFormStateRef, fieldsRef = _b.fieldsRef, fieldArrayNamesRef = _b.fieldArrayNamesRef, shallowFieldsStateRef = _b.shallowFieldsStateRef;
    var isNotFieldArray = !isNameInFieldArray(fieldArrayNamesRef.current, name);
    var getInitialValue = function () {
        return !isUndefined(get(shallowFieldsStateRef.current, name)) && isNotFieldArray
            ? get(shallowFieldsStateRef.current, name)
            : isUndefined(defaultValue)
                ? get(defaultValuesRef.current, name)
                : defaultValue;
    };
    var _e = __read(React.useState(getInitialValue()), 2), value = _e[0], setInputStateValue = _e[1];
    var valueRef = React.useRef(value);
    var onFocusRef = React.useRef(onFocus);
    var shouldValidate = function (isBlurEvent) {
        return !skipValidation(__assign({ isBlurEvent: isBlurEvent,
            isReValidateOnBlur: isReValidateOnBlur,
            isReValidateOnChange: isReValidateOnChange,
            isSubmitted: isSubmitted, isTouched: !!get(touched, name) }, mode));
    };
    var commonTask = function (_a) {
        var _b = __read(_a, 1), event = _b[0];
        var data = getInputValue(event);
        setInputStateValue(data);
        valueRef.current = data;
        return data;
    };
    var registerField = React.useCallback(function () {
        if ( !name) {
            return console.warn('📋 Field is missing `name` prop. https://react-hook-form.com/api#Controller');
        }
        if (fieldsRef.current[name]) {
            fieldsRef.current[name] = __assign({ ref: fieldsRef.current[name].ref }, rules);
        }
        else {
            register(Object.defineProperty({ name: name, focus: onFocusRef.current }, VALUE, {
                set: function (data) {
                    setInputStateValue(data);
                    valueRef.current = data;
                },
                get: function () {
                    return valueRef.current;
                },
            }), rules);
            if (isNotFieldArray && !get(defaultValuesRef.current, name)) {
                setInputStateValue(getInitialValue());
            }
        }
    }, [rules, name, register]);
    React.useEffect(function () { return function () { return unregister(name); }; }, [unregister, name]);
    React.useEffect(function () {
        {
            if (isUndefined(value)) {
                console.warn("\uD83D\uDCCB " + name + " is missing in the 'defaultValue' prop of either its Controller (https://react-hook-form.com/api#Controller) or useForm (https://react-hook-form.com/api#useForm)");
            }
            if ((!as && !render) || (as && render)) {
                console.warn("\uD83D\uDCCB " + name + " Controller should use either the 'as' or 'render' prop, not both. https://react-hook-form.com/api#Controller");
            }
            if (!isNotFieldArray && isUndefined(defaultValue)) {
                console.warn('📋 Controller is missing `defaultValue` prop when using `useFieldArray`. https://react-hook-form.com/api#Controller');
            }
        }
        registerField();
    }, [registerField]);
    React.useEffect(function () {
        if (!fieldsRef.current[name]) {
            registerField();
            if (isNotFieldArray) {
                setInputStateValue(getInitialValue());
            }
        }
    });
    var onBlur = function () {
        if (readFormStateRef.current.touched && !get(touched, name)) {
            set(touched, name, true);
            updateFormState({
                touched: touched,
            });
        }
        if (shouldValidate(true)) {
            trigger(name);
        }
    };
    var onChange = function () {
        var event = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            event[_i] = arguments[_i];
        }
        return setValue(name, commonTask(event), {
            shouldValidate: shouldValidate(),
            shouldDirty: true,
        });
    };
    var props = __assign(__assign({}, rest), { onChange: onChange,
        onBlur: onBlur,
        name: name,
        value: value });
    return as
        ? React.isValidElement(as)
            ? React.cloneElement(as, props)
            : React.createElement(as, props)
        : render
            ? render({
                onChange: onChange,
                onBlur: onBlur,
                value: value,
                name: name,
            })
            : null;
};

exports.Controller = Controller;
exports.FormProvider = FormProvider;
exports.appendErrors = appendErrors;
exports.get = get;
exports.transformToNestObject = transformToNestObject;
exports.useFieldArray = useFieldArray;
exports.useForm = useForm;
exports.useFormContext = useFormContext;
exports.useWatch = useWatch;
//# sourceMappingURL=index.ie11.development.js.map
