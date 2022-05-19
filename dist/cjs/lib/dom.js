"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useOutEventListener = exports.onEventOutside = exports.useFromQueryParams = exports.useQueryParams = exports.useFps = exports.setAnimationFrame = exports.$ = void 0;
const validate_1 = require("./validate");
function $(sel, all = false) {
    return all ? document.querySelectorAll(sel) : document.querySelector(sel);
}
exports.$ = $;
/**
 * @description 用于在多少毫秒后执行回调函数，和 setTimeout 不同的是，
 * 该方法基于requestAnimationFrame进行封装，对于页面性能会更好，也具备较高的优先级
 *
 * @param handler 回调函数
 * @param timeout number，默认是0，即1帧后，用于多少毫秒后执行
 *
 * @example
 * const stop = setAnimationFrame(() => console.log(1), 1000)
 * stop() //当调用 stop 时，会提前结束
 */
function setAnimationFrame(handler, timeout = 0, ...rest) {
    if (!(0, validate_1.isNumber)(timeout)) {
        timeout = 0;
    }
    if (!(0, validate_1.isFunction)(handler)) {
        throw Error('setAnimationFrame handler 必须是一个函数');
    }
    let token = -1;
    const start = performance.now();
    const run = () => {
        token = requestAnimationFrame(now => {
            if (now - start > timeout) {
                handler.apply(null, rest);
                return;
            }
            run();
        });
    };
    run();
    return function clearAnimationFrame() {
        return cancelAnimationFrame(token);
    };
}
exports.setAnimationFrame = setAnimationFrame;
/**
 * @description 获取当前浏览器的帧数，默认获取 1000ms 的帧率
 */
function useFps(timer = 1000) {
    return new Promise(resolve => {
        let pre = performance.now();
        let fps = 0;
        const next = () => {
            requestAnimationFrame(() => {
                const now = performance.now();
                const dif = now - pre;
                fps += 1;
                if (dif > timer) {
                    pre = now;
                    resolve(fps);
                    return;
                }
                next();
            });
        };
        next();
    });
}
exports.useFps = useFps;
/**
 * @description 将 url 字符串转换成对象，如果不提供转换的字符串将会默认使用 window.location.search
 * @param search string, a=1&b=2
 */
function useQueryParams(search) {
    const str = (0, validate_1.isString)(search) ? search : globalThis.location.search.slice(1);
    const query = Object.fromEntries(str.split('&').reduce((acc, item) => {
        const temp = item.split('=');
        if (temp[0] && temp[1]) {
            acc.push([temp[0], decodeURIComponent(temp[1])]);
        }
        return acc;
    }, []));
    return query;
}
exports.useQueryParams = useQueryParams;
/**
 * @description 将对象转换成 url 的参数。
 * @description {a: 1, b: 2} ==> a=1&b=2
 */
function useFromQueryParams(query) {
    return Object.entries(query)
        .reduce((map, item) => {
        if (item[0] && item[1]) {
            map.push(item.join('='));
        }
        return map;
    }, [])
        .join('&');
}
exports.useFromQueryParams = useFromQueryParams;
/**
 * @description 当目标事件触发在目标（target）之外时，回调函数才会被启动
 * @param target string || HTMLElement ,用于要比较的对象
 * @param cb function ，回调函数
 * @param options \{ type: 触发的事件类型 }
 */
function onEventOutside(target, cb, options) {
    const type = options.type ?? 'click';
    const _target = target instanceof HTMLElement ? target : document.querySelector(target);
    function Event(e) {
        if (!_target.contains(e.target)) {
            cb(e);
        }
    }
    document.addEventListener(type, Event);
    return () => {
        document.removeEventListener(type, Event);
    };
}
exports.onEventOutside = onEventOutside;
const mountTypeMap = new Map();
const docEventSet = new Set();
const doc = document.documentElement;
/**
 * @description 给document注册一个相反的事件，当触发事件的目标在监听元素之外才会触发回调函数
 * @param {HTMLElement[]} targets 监听元素的元素列表
 * @param {string} type 监听的事件类型
 * @param {(event: HTMLElementEventMap[K]) => void} listener 回调函数
 *
 * @example
 * const stop = useOutEventListener(
 *  [div, span],
 *  "click",
 *  () => console.log(1)
 * )
 *
 * stop()
 */
function useOutEventListener(target, type, listener) {
    const item = { type, target, listener };
    docEventSet.add(item);
    const listenerEvent = (e) => {
        for (const item of [...docEventSet]) {
            const { type: uType, target, listener } = item;
            if (type !== uType) {
                continue;
            }
            if (target.some(t => t.contains(e.target))) {
                return;
            }
            listener(e);
        }
    };
    if (!mountTypeMap.has(type)) {
        mountTypeMap.set(type, listener);
        doc.addEventListener(type, listenerEvent);
    }
    return function stopListener() {
        docEventSet.delete(item);
        mountTypeMap.forEach((listener, type) => {
            if ([...docEventSet].every(item => item.type !== type)) {
                doc.removeEventListener(type, listener);
                mountTypeMap.delete(type);
            }
        });
    };
}
exports.useOutEventListener = useOutEventListener;
//# sourceMappingURL=dom.js.map