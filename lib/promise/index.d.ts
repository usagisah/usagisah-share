type NoUndefined<T> = T extends undefined ? never : T

Promise.resolve(1).finally
interface Promise<T> {
  delay(ms: number): Promise<T>

  props<R>(
    fn: (
      key: keyof T,
      value: { [P in keyof T]: T[P] },
      index: number,
      originObj: T
    ) => R,
    filter?: boolean
  ): Promise<NoUndefined<R>[]>

  map<R>(
    fn: (item: T[number], index: number, array: T[]) => R,
    filter?: boolean
  ): Promise<NoUndefined<R>[]>
  map<R>(
    fn: (item: T[number], index: number, array: T[]) => R,
    options: { filter?: boolean; concurrent?: number }
  ): Promise<NoUndefined<R>[]>

  each<R>(
    fn: (item: T[number], index: number, array: T[]) => R,
    filter?: boolean
  ): Promise<NoUndefined<R>[]>
}

interface PromiseConstructor {
  static delay<T>(ms: number, value?: T): Promise<Awaited<T>>

  static fn<T>(fn: () => T): Promise<T>

  static method<T = any, R>(
    fn: (param: T) => R
  ): (param: T) => Promise<Awaited<R>>

  static methods<T = any, R = T>(
    ...fns: ((param: T) => R)[]
  ): (param: T) => Promise<Awaited<R>>

  static props<T extends Record<any, any>, R>(
    obj: T,
    fn: (key: keyof T, value: T[keyof T], index: number, originObj: T) => R,
    filter?: boolean
  ): Promise<NoUndefined<Awaited<R>>[]>

  static map<T, R>(
    ary: T[],
    fn: (item: T, index: number, array: T[]) => R,
    filter?: boolean
  ): Promise<NoUndefined<Awaited<R>>>
  static map<T, R>(
    ary: T[],
    fn: (item: T, index: number, array: T[]) => R,
    options: { filter?: boolean; concurrent?: number }
  ): Promise<NoUndefined<Awaited<R>>>

  static each<T, R>(
    ary: T[],
    fn: (item: T, index: number, array: T[]) => R,
    filter?: boolean
  ): Promise<NoUndefined<Awaited<R>>>
}
