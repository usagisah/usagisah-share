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
export declare function noop<T>(arg?: T): T | undefined;
/**
 * @description 占位promise
 */
export declare function noopPromise<T>(arg?: T | Promise<T>): Promise<T | undefined>;
/**
 * @description 占位错误函数
 */
export declare function noopError(arg?: string): never;
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
export declare function bufferToBase64(data: BlobPart, type: string): Promise<string>;
