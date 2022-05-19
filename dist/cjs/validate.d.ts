/**
 * @description 是否是字符串
 * @example isString(1)
 */
export declare const isString: (value: unknown) => value is string;
/**
 * @description 是否是布尔值
 * @example isBoolean(0)
 */
export declare const isBoolean: (value: unknown) => value is boolean;
/**
 * @description 是否是数字
 */
export declare const isNumber: (value: unknown) => value is number;
/**
 * @description 是否是函数
 */
export declare const isFunction: (value: unknown) => value is (...arg: any[]) => any;
/**
 * @description 是否是symbol
 */
export declare const isSymbol: (value: unknown) => value is symbol;
/**
 * @description 是否是 undefined
 */
export declare const isUndefined: (value: unknown) => value is undefined;
/**
 * @description 是否是 null
 */
export declare const isNull: (value: unknown) => value is null;
/**
 * @description 是否是 null 或 undefined 或 ""
 */
export declare const isEmpty: (value: unknown) => boolean;
/**
 * @description 是否是 new Map 的实例
 */
export declare const isMap: (value: unknown) => value is Map<any, any>;
/**
 * @description 是否是 new Set 的实例
 */
export declare const isSet: (value: unknown) => value is Set<any>;
/**
 * @description 是否是 new Date 的实例
 */
export declare const isDate: (value: unknown) => value is Date;
/**
 * @description 是否是数组
 */
export declare const isArray: <T = any>(value: unknown) => value is T[];
/**
 * @description 是否是对象
 */
export declare const isObject: <K extends string | number | symbol = string | number | symbol, V = any>(value: unknown) => value is Record<K, V>;
/**
 * @description 是否是 Promise
 */
export declare const isPromise: <T = any>(value: unknown) => value is Promise<T>;
/**
 * @description 是否是字符串数字
 * @example isNumberString( ”123“ )
 */
export declare const isNumberString: (value: unknown) => value is number;
/**
 * @description 是否是 rgba 格式的颜色
 */
export declare const IsRgbaColor: (value: unknown) => boolean;
/**
 * @description 是否是 rgb 格式的颜色
 */
export declare const IsRgbColor: (value: unknown) => boolean;
/**
 * @description 是否是 十六进制 格式的颜色
 */
export declare const IsHexColor: (value: unknown) => boolean;
/**
 * @description 是否是 HSL 格式的颜色
 */
export declare const IsHSLColor: (value: unknown) => boolean;
