import { Func, Obj } from "./type"
import { isObject, isPromise } from "./validate"

/**
 * @description 深拷贝
 */
export function deepClone<T extends Obj | Array<any>>(target: T): T {
  let res: any = null
  const reference = [Date, RegExp, Set, WeakSet, Map, WeakMap, Error]

  if (Array.isArray(target)) {
    res = []
    target.forEach((e, i) => {
      res[i] = deepClone(e)
    })
  } else if (isObject(target)) {
    if (reference.includes((target as any).constructor)) {
      res = new (target as any).constructor(target)
    } else if (target !== null) {
      res = {}
      for (const key in target) {
        if (Object.hasOwnProperty.call(target, key)) {
          res[key] = deepClone(target[key])
        }
      }
    }
  } else {
    res = target
  }
  return res
}

/**
 * @description 没有延时的异步函数
 */
export const asyncCallback = (function createAsyncFactory() {
  let fn: Func = () => { }
  if ('setImmediate' in globalThis) {
    fn = globalThis.setImmediate
  } else if (MessageChannel) {
    const { port1, port2 } = new MessageChannel()
    const useAsyncInfo = {
      cb: () => { }
    }
    port2.onmessage = () => {
      useAsyncInfo.cb()
      useAsyncInfo.cb = () => { }
    }
    fn = () => port1.postMessage(null)
  } else {
    fn = setTimeout
  }

  return fn
})()

/**
 * @description 延时执行
 */
export const delay = (time: number = 0) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(null)
    }, time)
  })
}

/**
 * @description 占位空函数
 */
export function noop<T>(arg?: T): T | undefined {
  return arg
}

/**
 * @description 占位promise
 */
export function noopPromise<T>(arg?: T | Promise<T>): Promise<T | undefined> {
  return isPromise(arg)
    ? arg.then(
        v => v,
        e => {
          throw e
        }
      )
    : Promise.resolve(arg)
}

/**
 * @description 占位错误函数
 */
export function noopError(arg?: string): never {
  throw Error(arg)
}