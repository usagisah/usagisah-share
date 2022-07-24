"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isHexColor = exports.isRgbColor = exports.isRgbaColor = exports.isNumberString = exports.isPromise = exports.isPlainObject = exports.isObject = exports.isArray = exports.isDate = exports.isSet = exports.isMap = exports.isEmpty = exports.isNull = exports.isUndefined = exports.isSymbol = exports.isFunction = exports.isNumber = exports.isBoolean = exports.isString = void 0;
const _toString = Object.prototype.toString;
const _undefined = void 0;
/**
 * @description 是否是字符串
 * @example isString(1)
 */
const isString = (value) => {
    return typeof value === "string";
};
exports.isString = isString;
/**
 * @description 是否是布尔值
 * @example isBoolean(0)
 */
const isBoolean = (value) => {
    return typeof value === "boolean";
};
exports.isBoolean = isBoolean;
/**
 * @description 是否是数字
 */
const isNumber = (value) => {
    return typeof value === "number";
};
exports.isNumber = isNumber;
/**
 * @description 是否是函数
 */
const isFunction = (value) => {
    return typeof value === "function";
};
exports.isFunction = isFunction;
/**
 * @description 是否是symbol
 */
const isSymbol = (value) => {
    return typeof value === "symbol";
};
exports.isSymbol = isSymbol;
/**
 * @description 是否是 undefined
 */
const isUndefined = (value) => {
    return value === void undefined;
};
exports.isUndefined = isUndefined;
/**
 * @description 是否是 null
 */
const isNull = (value) => {
    return value === null;
};
exports.isNull = isNull;
/**
 * @description 是否是 null 或 undefined 或 ""
 */
const isEmpty = (value) => {
    return value === null || value === _undefined || value === "";
};
exports.isEmpty = isEmpty;
/**
 * @description 是否是 new Map 的实例
 */
const isMap = (value) => {
    return _toString.call(value) === "[object Map]";
};
exports.isMap = isMap;
/**
 * @description 是否是 new Set 的实例
 */
const isSet = (value) => {
    return toString.call(value) === "[object Set]";
};
exports.isSet = isSet;
/**
 * @description 是否是 new Date 的实例
 */
const isDate = (value) => {
    return value instanceof Date;
};
exports.isDate = isDate;
/**
 * @description 是否是数组
 */
const isArray = (value) => {
    return Array.isArray(value);
};
exports.isArray = isArray;
/**
 * @description 是否是对象, 非严格意义的对象，即不是 null, undefined, 数组
 */
const isObject = (value) => {
    return !Array.isArray(value) && value !== null && typeof value === "object";
};
exports.isObject = isObject;
/**
 * @description 是否是纯对象，即严格意义的对象，即{}方式的
 */
const isPlainObject = (value) => {
    return _toString.call(value) === "[object Object]";
};
exports.isPlainObject = isPlainObject;
/**
 * @description 是否是 Promise
 */
const isPromise = (value) => {
    return ((0, exports.isObject)(value) && (0, exports.isFunction)(value["then"]) && (0, exports.isFunction)(value["catch"]));
};
exports.isPromise = isPromise;
/**
 * @description 是否是字符串数字
 * @example isNumberString( ”123“ )//true
 */
const isNumberString = (value) => {
    return !isNaN(Number(value));
};
exports.isNumberString = isNumberString;
const rgbColor = /^rgb\((([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\s*,\s*){2}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\)$/;
const rgbaColor = /^rgba\((([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\s*,\s*){3}(0?\.\d|1(\.0)?|0(\.0)?)\)$/;
const rgbColorPercent = /^rgb\((([0-9]%|[1-9][0-9]%|100%),){2}([0-9]%|[1-9][0-9]%|100%)\)/;
const rgbaColorPercent = /^rgba\((([0-9]%|[1-9][0-9]%|100%),){3}(0?\.\d|1(\.0)?|0(\.0)?)\)/;
const hexcolor = /^#?([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i;
/**
 * @description 是否是 rgba 格式的颜色
 */
const isRgbaColor = (value) => {
    return (0, exports.isString)(value)
        ? rgbaColor.test(value) || rgbaColorPercent.test(value)
        : false;
};
exports.isRgbaColor = isRgbaColor;
/**
 * @description 是否是 rgb 格式的颜色
 */
const isRgbColor = (value) => {
    return (0, exports.isString)(value)
        ? rgbColor.test(value) || rgbColorPercent.test(value)
        : false;
};
exports.isRgbColor = isRgbColor;
/**
 * @description 是否是 十六进制 格式的颜色
 */
const isHexColor = (value) => {
    return (0, exports.isString)(value) ? hexcolor.test(value) : false;
};
exports.isHexColor = isHexColor;
//# sourceMappingURL=validate.js.map