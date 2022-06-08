"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bufferToBase64 = exports.noopError = exports.noopPromise = exports.noop = exports.delay = exports.asyncCallback = exports.deepClone = void 0;
const validate_1 = require("./validate");
/**
 * @description 深拷贝
 */
function deepClone(target) {
    let res = null;
    const reference = [Date, RegExp, Set, WeakSet, Map, WeakMap, Error];
    if (Array.isArray(target)) {
        res = [];
        target.forEach((e, i) => {
            res[i] = deepClone(e);
        });
    }
    else if ((0, validate_1.isObject)(target)) {
        if (reference.includes(target.constructor)) {
            res = new target.constructor(target);
        }
        else if (target !== null) {
            res = {};
            for (const key in target) {
                if (Object.hasOwnProperty.call(target, key)) {
                    res[key] = deepClone(target[key]);
                }
            }
        }
    }
    else {
        res = target;
    }
    return res;
}
exports.deepClone = deepClone;
/**
 * @description 没有延时的异步函数
 */
exports.asyncCallback = (function createAsyncFactory() {
    let fn = () => { };
    if ("setImmediate" in globalThis) {
        fn = globalThis.setImmediate;
    }
    else if (MessageChannel) {
        const { port1, port2 } = new MessageChannel();
        const useAsyncInfo = {
            cb: () => { }
        };
        port2.onmessage = () => {
            useAsyncInfo.cb();
            useAsyncInfo.cb = () => { };
        };
        fn = () => port1.postMessage(null);
    }
    else {
        fn = setTimeout;
    }
    return fn;
})();
/**
 * @description 延时执行
 */
const delay = (time = 0) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(null);
        }, time);
    });
};
exports.delay = delay;
/**
 * @description 占位空函数
 */
function noop(arg) {
    return arg;
}
exports.noop = noop;
/**
 * @description 占位promise
 */
function noopPromise(arg) {
    return (0, validate_1.isPromise)(arg)
        ? arg.then(v => v, e => {
            throw e;
        })
        : Promise.resolve(arg);
}
exports.noopPromise = noopPromise;
/**
 * @description 占位错误函数
 */
function noopError(arg) {
    throw Error(arg);
}
exports.noopError = noopError;
/**
 * @description 二进制流转base64，
 * 比如将二进制图片流转换为base64作为图片链接
 *
 * @description 需要将 axios/fetch/ajax 的返回类型(responseType)设置成"arraybuffer"
 *
 * @param {arraybuffer} data 二进制流
 * @param {string} type 转换的类型
 *
 * @example
 * const res = await bufferToBase64(data, "image/jpeg")
 */
function bufferToBase64(data, type) {
    return new Promise((resolve) => {
        const blob = new Blob([data], { type });
        let reader = new FileReader();
        reader.onload = function (e) {
            resolve(e.target.result);
        };
        reader.readAsDataURL(blob);
    });
}
exports.bufferToBase64 = bufferToBase64;
//# sourceMappingURL=utils.js.map