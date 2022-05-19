"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const array_1 = require("../lib/array");
const vitest_1 = require("vitest");
const dom_1 = require("../lib/dom");
(0, vitest_1.describe)("dom $", () => {
    const div = document.createElement("div");
    div.id = "root";
    document.body.appendChild(div);
    const divList = (0, array_1.range)(5, () => {
        const div = document.createElement("div");
        div.classList.add("item");
        document.body.appendChild(div);
        return div;
    });
    (0, vitest_1.test)("$ 单参数", () => {
        (0, vitest_1.expect)((0, dom_1.$)("#root")).toBe(div);
    });
    (0, vitest_1.test)("$ 双参数", () => {
        const list = (0, dom_1.$)(".item", true);
        (0, vitest_1.expect)(list).toHaveLength(5);
        (0, vitest_1.expect)(Array.from(list)).toEqual(divList);
    });
});
(0, vitest_1.describe)("dom useQueryParams", () => {
    (0, vitest_1.test)("useQueryParams", () => {
        const query1 = (0, dom_1.useQueryParams)("a=1&b=2");
        (0, vitest_1.expect)(query1).toEqual({ a: "1", b: "2" });
        const query2 = (0, dom_1.useQueryParams)("");
        (0, vitest_1.expect)(query2).toEqual({});
        const query3 = (0, dom_1.useQueryParams)("a&b&c&d=&=1&e=2");
        (0, vitest_1.expect)(query3).toEqual({ e: "2" });
    });
});
//# sourceMappingURL=dom.test.js.map