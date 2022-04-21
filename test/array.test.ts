import { describe, expect, test } from "vitest";
import { compose, composeAsync, range, shuffle } from "../lib/array";
import { isPromise } from "../lib/validate";

describe("array > shuffle", () => {
  test("shuffle", () => {
    const ary = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    expect(shuffle(ary)).not.toEqual(ary)
  })

  test("shuffle 会不会改变源数组", () => {
    const ary = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const ary1 = [...ary]
    shuffle(ary)
    expect(ary).toEqual(ary1)
  })
})

describe("array > range", () => {
  test("range 返回基本值", () => {
    const ary = range(3, (index) => index)
    expect(ary).toBeDefined()
    expect(ary.length).toBe(3)
    expect(ary).toEqual([0, 1, 2])
  })

  test("range 返回对象", () => {
    const ary = range(3, (index) => ({ index }))
    expect(ary).toBeDefined()
    expect(ary.length).toBe(3)
    expect(ary).toEqual([{ index: 0 }, { index: 1 }, { index: 2 }])
  })

  test("range只传一个参数", () => {
    const ary = range(3)
    expect(ary).toBeDefined()
    expect(ary.length).toBe(3)
    expect(ary).toEqual([0, 1, 2])
  })
})

describe("array > compose", () => {
  test("compose", () => {
    const fn = compose(
      v => v + 1, 
      v => v + 1
    )
    expect(typeof fn).toBe("function")

    const res = fn(1)
    expect(res).toBe(3)
  })

  test("compose 没有参数", () => {
    const fn = compose()
    expect(typeof fn).toBe("function")

    const res = fn(1)
    expect(res).toBe(1)
  })
})

describe("array > composeAsync", () => {
  test("composeAsync", () => {
    const fn = composeAsync(
      v => Promise.resolve(v + 1), 
      v => Promise.resolve(v + 1)
    )
    expect(typeof fn).toBe("function")

    const res = fn(1)
    expect(res).resolves.toBe(3)
  })

  test("composeAsync 没有参数", () => {
    const res = composeAsync()(1)
    expect(res).resolves.toBe(1)
  })
})