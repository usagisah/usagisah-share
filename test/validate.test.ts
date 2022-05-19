import { describe, expect, test } from "vitest"
import {
  isString,
  isArray,
  isBoolean,
  isDate,
  isEmpty,
  isFunction,
  isMap,
  isNull,
  isNumber,
  isNumberString,
  isUndefined,
  isObject,
  isPromise,
  isSet,
  isSymbol,
  isHexColor,
  isRgbColor,
  isRgbaColor,
  isPlainObject
} from "../lib/validate"

describe("validate isString", () => {
  test("isString", () => {
    expect(isString(1)).toBe(false)
    expect(isString([])).toBe(false)
    expect(isString({})).toBe(false)
    expect(isString(Symbol())).toBe(false)
    expect(isString(() => {})).toBe(false)
    expect(isString("")).toBe(true)
  })
})

describe("validate isArray", () => {
  test("isArray", () => {
    expect(isArray(1)).toBe(false)
    expect(isArray({})).toBe(false)
    expect(isArray(Symbol())).toBe(false)
    expect(isArray(() => {})).toBe(false)
    expect(isArray("")).toBe(false)
    expect(isArray([])).toBe(true)
  })
})

describe("validate isBoolean", () => {
  test("isBoolean", () => {
    expect(isBoolean(1)).toBe(false)
    expect(isBoolean({})).toBe(false)
    expect(isBoolean(Symbol())).toBe(false)
    expect(isBoolean(() => {})).toBe(false)
    expect(isBoolean("")).toBe(false)
    expect(isBoolean([])).toBe(false)
    expect(isBoolean(false)).toBe(true)
  })
})

describe("validate isFunction", () => {
  test("isFunction", () => {
    expect(isFunction(1)).toBe(false)
    expect(isFunction({})).toBe(false)
    expect(isFunction(Symbol())).toBe(false)
    expect(isFunction("")).toBe(false)
    expect(isFunction([])).toBe(false)
    expect(isFunction(false)).toBe(false)
    expect(isFunction(() => {})).toBe(true)
  })
})

describe("validate isNumber", () => {
  test("isNumber", () => {
    expect(isNumber({})).toBe(false)
    expect(isNumber(1)).toBe(true)
  })
})

describe("validate isObject", () => {
  test("isObject", () => {
    expect(isObject([])).toBe(false)
    expect(isObject(null)).toBe(false)
    expect(isObject(Promise.resolve(1))).toBe(true)
    expect(isObject(new Map())).toBe(true)
    expect(isObject({})).toBe(true)
  })
})

describe("validate isPlainObject", () => {
  test("isPlainObject", () => {
    expect(isPlainObject([])).toBe(false)
    expect(isPlainObject(null)).toBe(false)
    expect(isPlainObject(Promise.resolve(1))).toBe(false)
    expect(isPlainObject(new Map())).toBe(false)
    expect(isPlainObject({})).toBe(true)
  })
})

describe("validate isPromise", () => {
  test("isPromise", () => {
    expect(isPromise({})).toBe(false)
    expect(isPromise(Promise.resolve(1))).toBe(true)
  })
})

describe("validate isUndefined", () => {
  test("isUndefined", () => {
    expect(isUndefined({})).toBe(false)
    expect(isUndefined(null)).toBe(false)
    expect(isUndefined("undefined")).toBe(false)
    expect(isUndefined(void 0)).toBe(true)
  })
})

describe("validate isNull", () => {
  test("isNull", () => {
    expect(isNull({})).toBe(false)
    expect(isNull(null)).toBe(true)
  })
})

describe("validate isEmpty", () => {
  test("isEmpty", () => {
    expect(isEmpty({})).toBe(false)
    expect(isEmpty(" ")).toBe(false)
    expect(isEmpty(0)).toBe(false)

    expect(isEmpty(null)).toBe(true)
    expect(isEmpty(undefined)).toBe(true)
    expect(isEmpty("")).toBe(true)
  })
})

describe("validate isSymbol", () => {
  test("isSymbol", () => {
    expect(isSymbol({})).toBe(false)
    expect(isSymbol(Symbol())).toBe(true)
  })
})

describe("validate isMap", () => {
  test("isMap", () => {
    expect(isMap({})).toBe(false)
    expect(isMap(new Map())).toBe(true)
  })
})

describe("validate isSet", () => {
  test("isSet", () => {
    expect(isSet({})).toBe(false)
    expect(isSet(new Set())).toBe(true)
  })
})

describe("validate isDate", () => {
  test("isDate", () => {
    expect(isDate({})).toBe(false)
    expect(isDate(new Date())).toBe(true)
  })
})

describe("validate isNumberString", () => {
  test("isNumberString", () => {
    expect(isNumberString({})).toBe(false)

    expect(isNumberString(1)).toBe(true)
    expect(isNumberString("1")).toBe(true)
  })
})

describe("validate isHexColor", () => {
  test("isHexColor", () => {
    expect(isHexColor({})).toBe(false)
    expect(isHexColor("#")).toBe(false)
    expect(isHexColor("#ff")).toBe(false)
    expect(isHexColor("#ff f")).toBe(false)
    expect(isHexColor("#fffff f")).toBe(false)
    expect(isHexColor("rgba(0,0,0, 0)")).toBe(false)
    expect(isHexColor("rgb(0,0,0)")).toBe(false)

    expect(isHexColor("#fff")).toBe(true)
    expect(isHexColor("#ffffff")).toBe(true)
  })
})

describe("validate isRgbColor", () => {
  test("isRgbColor", () => {
    expect(isRgbColor({})).toBe(false)
    expect(isRgbColor("rgba(0,0,0, 0)")).toBe(false)
    expect(isRgbColor("#fff")).toBe(false)
    expect(isRgbColor("#ffffff")).toBe(false)
    expect(isRgbColor("rgb (0 , 0 , 0)")).toBe(false)

    expect(isRgbColor("rgb(0 , 0 , 0)")).toBe(true)
    expect(isRgbColor("rgb(0,0,0)")).toBe(true)
  })
})

describe("validate isRgbaColor", () => {
  test("isRgbColor", () => {
    expect(isRgbaColor({})).toBe(false)
    expect(isRgbaColor("#fff")).toBe(false)
    expect(isRgbaColor("#ffffff")).toBe(false)
    expect(isRgbaColor("rgb (0 , 0 , 0)")).toBe(false)
    expect(isRgbaColor("rgb(0 , 0 , 0)")).toBe(false)
    expect(isRgbaColor("rgb(0,0,0)")).toBe(false)

    expect(isRgbaColor("rgba(0,0, 0,0)")).toBe(true)
    expect(isRgbaColor("rgba(0, 0, 0, 0)")).toBe(true)
  })
})
