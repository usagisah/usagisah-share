import { Func } from "./type";
/**
 * @description 返回给定长度数量的，回调返回的数组
 * @param {number} length
 * @param {Func(index: number)} callback
 * @param {boolean} 是否要过滤掉返回空的值，默认是 false，判断基于 isEmpty 函数来判断
 */
export declare function range<T>(length: number, fn?: (index: number) => T, filter?: boolean): T[];
/**
 * @description 同步的组合函数
 * @example const res = compose(v => v, v => v)(1) //1
 */
export declare function compose(...fns: Func[]): <T>(value: T) => T;
/**
 * @description 支持异步的 compose 函数
 */
export declare function composeAsync(...fns: Func[]): <T>(prop: T) => Promise<T>;
/**
 * @description 打乱数组中的元素顺序
 */
export declare function shuffle<T extends any[]>(array: T): T;
