"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const utils_1 = require("../lib/utils");
(0, vitest_1.describe)("utils > deepClone", () => {
    (0, vitest_1.test)("deepClone", () => {
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
        };
        const cloneObj = (0, utils_1.deepClone)(obj);
        (0, vitest_1.expect)(cloneObj).not.toBe(obj);
        (0, vitest_1.expect)(cloneObj).toEqual(obj);
        (0, vitest_1.expect)(cloneObj).not.toBe(obj);
    });
});
(0, vitest_1.describe)("utils > asyncCallback", () => {
    (0, vitest_1.test)("asyncCallback", done => {
        let num = 0;
        setTimeout(() => {
            (0, vitest_1.expect)(num).toBe(2);
            num = 1;
            done();
        });
        (0, utils_1.asyncCallback)(() => {
            (0, vitest_1.expect)(num).toBe(0);
            num = 2;
        });
    });
});
(0, vitest_1.describe)("utils > delay", () => {
    (0, vitest_1.test)("delay", async () => {
        const start = Date.now();
        await (0, utils_1.delay)(2);
        const end = Date.now();
        (0, vitest_1.expect)(end - start).toBeGreaterThanOrEqual(2);
    });
    (0, vitest_1.test)("delay", async () => {
        const start = Date.now();
        await (0, utils_1.delay)();
        const end = Date.now();
        (0, vitest_1.expect)(end - start).toBeGreaterThanOrEqual(1);
    });
});
(0, vitest_1.describe)("utils > noop", () => {
    (0, vitest_1.test)("noop", () => {
        (0, vitest_1.expect)((0, utils_1.noop)()).toBe(undefined);
        (0, vitest_1.expect)((0, utils_1.noop)(true)).toBe(true);
        (0, vitest_1.expect)((0, utils_1.noop)([1, 2, 3])).toEqual([1, 2, 3]);
    });
});
(0, vitest_1.describe)("utils > noopError", () => {
    (0, vitest_1.test)("noopError", () => {
        (0, vitest_1.expect)(() => (0, utils_1.noopError)()).toThrow();
        (0, vitest_1.expect)(() => (0, utils_1.noopError)("123")).toThrowError("123");
    });
});
(0, vitest_1.describe)("utils > noopPromise", () => {
    (0, vitest_1.test)("noopPromise", () => {
        (0, vitest_1.expect)((0, utils_1.noopPromise)()).resolves.toBe(undefined);
        (0, vitest_1.expect)((0, utils_1.noopPromise)(123)).resolves.toBe(123);
        (0, vitest_1.expect)((0, utils_1.noopPromise)([1, 2, 3])).resolves.toEqual([1, 2, 3]);
    });
});
//# sourceMappingURL=utils.test.js.map