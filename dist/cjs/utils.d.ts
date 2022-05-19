import { Func, Obj } from "./type";
/**
 * @description 深拷贝
 */
export declare function deepClone<T extends Obj | Array<any>>(target: T): T;
/**
 * @description 没有延时的异步函数
 */
export declare const asyncCallback: Func<any, any>;
/**
 * @description 延时执行
 */
export declare const delay: (time?: number) => Promise<unknown>;
/**
 * @description 占位空函数
 */
export declare function noop<T>(arg: T): T;
/**
 * @description 占位promise
 */
export declare function noopPromise<T>(arg: T | Promise<T>): Promise<T>;
/**
 * @description 占位错误函数
 */
export declare function noopError(arg: string): never;
