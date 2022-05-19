"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shuffle = exports.composeAsync = exports.compose = exports.range = void 0;
const validate_1 = require("./validate");
/**
 * @description 返回给定长度数量的，回调返回的数组
 * @param {number} length
 * @param {Func(index: number)} callback
 * @param {boolean} 是否要过滤掉返回空的值，默认是 false，判断基于 isEmpty 函数来判断
 */
function range(length, fn, filter = false) {
    const result = [];
    fn = fn ?? (v => v);
    for (let i = 0; i < length; i++) {
        const value = fn(i);
        if (filter && (0, validate_1.isEmpty)(value)) {
            continue;
        }
        result.push(value);
    }
    return result;
}
exports.range = range;
/**
 * @description 同步的组合函数
 * @example const res = compose(v => v, v => v)(1) //1
 */
function compose(...fns) {
    return function (value) {
        return fns.reduce((acc, item) => item(acc), value);
    };
}
exports.compose = compose;
/**
 * @description 支持异步的 compose 函数
 */
function composeAsync(...fns) {
    return function (prop) {
        return new Promise(async (resolve, reject) => {
            let index = 0;
            while (index < fns.length) {
                const fn = fns[index];
                try {
                    prop = await Promise.resolve(fn(prop));
                }
                catch (err) {
                    reject(err);
                }
                index += 1;
            }
            resolve(prop);
        });
    };
}
exports.composeAsync = composeAsync;
/**
 * @description 打乱数组中的元素顺序
 */
function shuffle(array) {
    if (array.length < 2) {
        return array;
    }
    if (array.length === 2) {
        return [array[1], array[0]];
    }
    const result = [];
    const map = new Map();
    while (true) {
        const index = Math.floor(Math.random() * array.length);
        if (map.has(index)) {
            continue;
        }
        map.set(index, true);
        result.push(array[index]);
        if (result.length === array.length) {
            break;
        }
    }
    return result;
}
exports.shuffle = shuffle;
//# sourceMappingURL=array.js.map