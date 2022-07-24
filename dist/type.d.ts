/**
 * 无限制的函数
 */
export declare type Func<P = any, R = any> = (...arg: Array<P>) => R;
/**
 * 无限制的对象
 */
export declare type Obj = Record<any, any>;
/**
 * 所有基本类型
 */
export declare type Primitive = null | undefined | string | number | boolean | symbol | bigint;
/**
 * 将给行长度转换成同样长度的数组
 */
export declare type BuildAry<T extends number, R extends any[] = []> = R["length"] extends T ? R : BuildAry<T, [...R, any]>;
declare type SplitHelper<S extends string, L extends string, R extends string[] = []> = S extends `${infer item}${L}${infer rest}` ? SplitHelper<rest, L, [...R, item]> : R;
/**
 * 将字符串切割成数组
 */
export declare type Split<S extends string, L extends string = ""> = SplitHelper<S, L>;
/**
 * 将对象拉平
 */
export declare type Flatten<T extends object> = {
    [K in keyof T]: T[K];
};
/**
 * 排除对象中的 undefined，以及 void 类型
 */
export declare type NoUndefined<T> = T extends undefined ? never : T;
export {};
