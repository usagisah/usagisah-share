import { describe, expect, test } from "vitest"
import {
  asyncCallback,
  deepClone,
  delay,
  noop,
  noopError,
  noopPromise
} from "../lib/utils"

describe("utils > deepClone", () => {
  test("deepClone", () => {
    const obj = {
      a: 1,
      b: {
        c: "",
        d: false,
        e: null,
        f: undefined,
        g: [1, 2, 3],
        h: new Set([1, 2, 3]),
        i: new Map([
          ["a", 1],
          ["b", 2]
        ])
      }
    }
    const cloneObj = deepClone(obj)
    expect(cloneObj).not.toBe(obj)
    expect(cloneObj).toEqual(obj)
    expect(cloneObj).not.toBe(obj)
  })
})

describe("utils > asyncCallback", () => {
  test("asyncCallback", done => {
    let num = 0
    setTimeout(() => {
      expect(num).toBe(2)
      num = 1
      done()
    })
    asyncCallback(() => {
      expect(num).toBe(0)
      num = 2
    })
  })
})

describe("utils > delay", () => {
  test("delay", async () => {
    const start = Date.now()
    await delay(2)
    const end = Date.now()
    expect(end - start).toBeGreaterThanOrEqual(2)
  })

  test("delay", async () => {
    const start = Date.now()
    await delay()
    const end = Date.now()
    expect(end - start).toBeGreaterThanOrEqual(1)
  })
})

describe("utils > noop", () => {
  test("noop", () => {
    expect(noop()).toBe(undefined)
    expect(noop(true)).toBe(true)
    expect(noop([1, 2, 3])).toEqual([1, 2, 3])
  })
})

describe("utils > noopError", () => {
  test("noopError", () => {
    expect(() => noopError()).toThrow()
    expect(() => noopError("123")).toThrowError("123")
  })
})

describe("utils > noopPromise", () => {
  test("noopPromise", () => {
    expect(noopPromise()).resolves.toBe(undefined)
    expect(noopPromise(123)).resolves.toBe(123)
    expect(noopPromise([1, 2, 3])).resolves.toEqual([1, 2, 3])
  })
})
