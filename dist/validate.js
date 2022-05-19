const _toString = Object.prototype.toString;
const _undefined = void 0;
/**
 * @description 是否是字符串
 * @example isString(1)
 */
export const isString = (value) => {
    return typeof value === "string";
};
/**
 * @description 是否是布尔值
 * @example isBoolean(0)
 */
export const isBoolean = (value) => {
    return typeof value === "boolean";
};
/**
 * @description 是否是数字
 */
export const isNumber = (value) => {
    return typeof value === "number";
};
/**
 * @description 是否是函数
 */
export const isFunction = (value) => {
    return typeof value === "function";
};
/**
 * @description 是否是symbol
 */
export const isSymbol = (value) => {
    return typeof value === "symbol";
};
/**
 * @description 是否是 undefined
 */
export const isUndefined = (value) => {
    return value === undefined;
};
/**
 * @description 是否是 null
 */
export const isNull = (value) => {
    return value === null;
};
/**
 * @description 是否是 null 或 undefined 或 ""
 */
export const isEmpty = (value) => {
    return value === null || value === _undefined || value === "";
};
/**
 * @description 是否是 new Map 的实例
 */
export const isMap = (value) => {
    return _toString.call(value) === "[object Map]";
};
/**
 * @description 是否是 new Set 的实例
 */
export const isSet = (value) => {
    return toString.call(value) === "[object Set]";
};
/**
 * @description 是否是 new Date 的实例
 */
export const isDate = (value) => {
    return value instanceof Date;
};
/**
 * @description 是否是数组
 */
export const isArray = (value) => {
    return Array.isArray(value);
};
/**
 * @description 是否是对象
 */
export const isObject = (value) => {
    return !Array.isArray(value) && value !== null && typeof value === "object";
};
/**
 * @description 是否是 Promise
 */
export const isPromise = (value) => {
    return (isObject(value) && isFunction(value["then"]) && isFunction(value["catch"]));
};
/**
 * @description 是否是字符串数字
 * @example isNumberString( ”123“ )//true
 */
export const isNumberString = (value) => {
    return !isNaN(Number(value));
};
const rgbColor = /^rgb\((([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\s*,\s*){2}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\)$/;
const rgbaColor = /^rgba\((([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\s*,\s*){3}(0?\.\d|1(\.0)?|0(\.0)?)\)$/;
const rgbColorPercent = /^rgb\((([0-9]%|[1-9][0-9]%|100%),){2}([0-9]%|[1-9][0-9]%|100%)\)/;
const rgbaColorPercent = /^rgba\((([0-9]%|[1-9][0-9]%|100%),){3}(0?\.\d|1(\.0)?|0(\.0)?)\)/;
const hexcolor = /^#?([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i;
/**
 * @description 是否是 rgba 格式的颜色
 */
export const isRgbaColor = (value) => {
    return isString(value)
        ? rgbaColor.test(value) || rgbaColorPercent.test(value)
        : false;
};
/**
 * @description 是否是 rgb 格式的颜色
 */
export const isRgbColor = (value) => {
    return isString(value)
        ? rgbColor.test(value) || rgbColorPercent.test(value)
        : false;
};
/**
 * @description 是否是 十六进制 格式的颜色
 */
export const isHexColor = (value) => {
    return isString(value) ? hexcolor.test(value) : false;
};
//# sourceMappingURL=validate.js.map