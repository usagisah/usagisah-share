import { describe, expect, test, vi } from "vitest"
import "../lib/promise"

describe("static delay", () => {
  test("是否在规定时间后执行", () => {
    return new Promise((resolve, reject) => {
      const fn = vi.fn()
      Promise.delay(100, null).then(fn)
      setTimeout(() => {
        resolve(expect(fn).toBeCalled())
      }, 100)
    })
  }, 2000)

  test("传值", () => {
    return new Promise((resolve, reject) => {
      expect(Promise.delay(100, "res")).resolves.toBe("res")
      expect(
        Promise.delay(100, "err").then(v => {
          throw v
        })
      ).rejects.toBe("err")

      setTimeout(() => {
        resolve()
      }, 100)
    })
  }, 500)
})

describe("static fn", () => {
  test("测试返回任何值", () => {
    expect(Promise.fn(() => 1)).resolves.toBe(1)
    expect(Promise.fn(async () => true)).resolves.toBe(true)

    expect(
      Promise.fn(() => {
        throw "err1"
      })
    ).rejects.toBe("err1")
    expect(Promise.fn(() => Promise.reject("err2"))).rejects.toBe("err2")
  })

  test("fn + delay", () => {
    expect(Promise.fn(() => Promise.delay(500, "res"))).resolves.toBe("res")
    expect(
      Promise.fn(() =>
        Promise.delay(600, "err").then(v => {
          throw v
        })
      )
    ).rejects.toBe("err")
  })
})

describe("static props", () => {
  test("传值", () => {
    expect(
      Promise.props({ a: 10, b: false }, (key, value, index) => ({
        key,
        value,
        index
      }))
    ).resolves.toEqual([
      { key: "a", value: 10, index: 0 },
      { key: "b", value: false, index: 1 }
    ])
  })

  test("测试过滤", () => {
    expect(
      Promise.props({ a: 10, b: false }, (key, value, index) => {})
    ).resolves.toEqual([])
  })
})

describe("static method", () => {
  test("method", () => {
    const fn = Promise.method((v: boolean) => !v)
    expect(fn(true)).resolves.toBe(false)
  })

  test("methods", () => {
    const fn = Promise.methods(
      v => v * 10,
      v => v.toString()
    )
    expect(fn(1)).resolves.toBe("10")
  })
})

describe("static each", () => {
  test("基本使用", () => {
    const p = Promise.each([1, "a", false], (value, index) => {
      return { index, value }
    })
    expect(p).resolves.toEqual([
      { index: 0, value: 1 },
      { index: 1, value: "a" },
      { index: 2, value: false }
    ])
  })

  test("测试过滤", () => {
    const p = Promise.each([1, "a", false], (value, index) => {})
    expect(p).resolves.toEqual([])
  })
})

describe("static map", () => {
  test("基本使用", async () => {
    const res = await Promise.map([1, "a", false], (value, index) => {
      return { index, value }
    })
    expect(res).toEqual([
      { index: 0, value: 1 },
      { index: 1, value: "a" },
      { index: 2, value: false }
    ])
  })

  test("测试过滤", async () => {
    const res = await Promise.map([1, "a", false], (value, index) => {})
    expect(res).toEqual([])
  })

  test("测试并发, 1", async () => {
    const fn = vi.fn()
    Promise.map([2, 4, 1, 3], v => Promise.delay(v * 100, v)).then(fn)
    await Promise.delay(1050)
    expect(fn).toBeCalled()
  })

  test("测试并发, 2", async () => {
    const fn = vi.fn()
    await Promise.map([2, 4, 1, 3], v => Promise.delay(v * 100, v), {
      concurrent: 2
    }).then(fn)
    await Promise.delay(650)
    expect(fn).toBeCalled()
  })
})

/* --------------  -------------- */

describe(".delay", () => {
  test("是否在规定时间后执行", () => {Promise.resolve
    return new Promise((resolve, reject) => {
      const fn = vi.fn()
      Promise.resolve(1).delay(100).then(fn)
      setTimeout(() => {
        resolve(expect(fn).toBeCalled())
      }, 110)
    })
  })

  test("传值", () => {
    return new Promise((resolve, reject) => {
      expect(Promise.resolve("res").delay(100)).resolves.toBe("res")
      expect(Promise.reject("err").delay(100)).rejects.toBe("err")

      setTimeout(() => {
        resolve()
      }, 110)
    })
  })
})

describe(".props", () => {
  test("传值", () => {
    expect(
      Promise.resolve({ a: 10, b: false }).props((key, value, index) => ({
        key,
        value,
        index
      }))
    ).resolves.toEqual([
      { key: "a", value: 10, index: 0 },
      { key: "b", value: false, index: 1 }
    ])
  })

  test("测试过滤", () => {
    expect(
      Promise.resolve({ a: 10, b: false }).props((key, value, index) => {})
    ).resolves.toEqual([])
  })
})

describe(".each", () => {
  test("基本使用", () => {
    const p = Promise.resolve([1, "a", false]).each((value, index) => {
      return { index, value }
    })
    expect(p).resolves.toEqual([
      { index: 0, value: 1 },
      { index: 1, value: "a" },
      { index: 2, value: false }
    ])
  })

  test("测试过滤", () => {
    const p = Promise.resolve([1, "a", false]).each((value, index) => {})
    expect(p).resolves.toEqual([])
  })
})

describe(".map", () => {
  test("基本使用", async () => {
    const res = await Promise.resolve([1, "a", false]).map((value, index) => {
      return { index, value }
    })
    expect(res).toEqual([
      { index: 0, value: 1 },
      { index: 1, value: "a" },
      { index: 2, value: false }
    ])
  })

  test("测试过滤", async () => {
    const res = await Promise.resolve([1, "a", false]).map((value, index) => {})
    expect(res).toEqual([])
  })

  test("测试并发, 1", async () => {
    const fn = vi.fn()
    Promise.resolve([2, 4, 1, 3])
      .map(v => Promise.delay(v * 100, v))
      .then(fn)
    await Promise.delay(1050)
    expect(fn).toBeCalled()
  })

  test("测试并发, 2", async () => {
    const fn = vi.fn()
    Promise.resolve([2, 4, 1, 3])
      .map(v => Promise.delay(v * 100, v), {
        concurrent: 2
      })
      .then(fn)
    await Promise.delay(600)
    expect(fn).toBeCalled()
  })
})
