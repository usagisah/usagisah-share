import { range } from "../lib/array"
import { describe, test, expect } from "vitest"
import { $, useQueryParams } from "../lib/dom"

describe("dom $", () => {
  const div = document.createElement("div")
  div.id = "root"
  document.body.appendChild(div)

  const divList = range(5, () => {
    const div = document.createElement("div")
    div.classList.add("item")
    document.body.appendChild(div)
    return div
  })

  test("$ 单参数", () => {
    expect($("#root")).toBe(div)
  })
  test("$ 双参数", () => {
    const list = $(".item", true)
    expect(list).toHaveLength(5)
    expect(Array.from(list)).toEqual(divList)
  })
})


describe("dom useQueryParams", () => {
  test("useQueryParams", () => {
    const query1 = useQueryParams("a=1&b=2")
    expect(query1).toEqual({ a: "1", b: "2" })

    const query2 = useQueryParams("")
    expect(query2).toEqual({})

    const query3 = useQueryParams("a&b&c&d=&=1&e=2")
    expect(query3).toEqual({ e: "2" })
  })
})