/**
 * @description 快速获取元素
 * @param sel document.querySelector 的选择器参数
 * @param all 布尔值，默认是 false，开启将用于 querySelectorAll
 */
export declare function $(sel: string): ReturnType<typeof document.querySelector>;
export declare function $(sel: string, all: true): ReturnType<typeof document.querySelectorAll>;
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
export declare function setAnimationFrame<T = unknown>(handler: (...props: T[]) => unknown, timeout?: number, ...rest: T[]): () => void;
/**
 * @description 获取当前浏览器的帧数，默认获取 1000ms 的帧率
 */
export declare function useFps(timer?: number): Promise<number>;
/**
 * @description 将 url 字符串转换成对象，如果不提供转换的字符串将会默认使用 window.location.search
 * @param search string, a=1&b=2
 */
export declare function useQueryParams(search?: string): Record<string, string>;
/**
 * @description 将对象转换成 url 的参数。
 * @description {a: 1, b: 2} ==> a=1&b=2
 */
export declare function useFromQueryParams(query: Record<string, string>): string;
/**
 * @description 当目标事件触发在目标（target）之外时，回调函数才会被启动
 * @param target string || HTMLElement ,用于要比较的对象
 * @param cb function ，回调函数
 * @param options \{ type: 触发的事件类型 }
 */
export declare function onEventOutside<T = Event>(target: HTMLElement | string, cb: (e: T) => unknown, options: {
    type: string;
}): () => void;
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
export declare function useOutEventListener<K extends keyof HTMLElementEventMap>(target: HTMLElement[], type: K, listener: (event: HTMLElementEventMap[K]) => void): () => void;
