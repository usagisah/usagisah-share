"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const array_1 = require("../lib/array");
(0, vitest_1.describe)("array > shuffle", () => {
    (0, vitest_1.test)("shuffle", () => {
        const ary = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        (0, vitest_1.expect)((0, array_1.shuffle)(ary)).not.toEqual(ary);
    });
    (0, vitest_1.test)("shuffle 会不会改变源数组", () => {
        const ary = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const ary1 = [...ary];
        (0, array_1.shuffle)(ary);
        (0, vitest_1.expect)(ary).toEqual(ary1);
    });
});
(0, vitest_1.describe)("array > range", () => {
    (0, vitest_1.test)("range 返回基本值", () => {
        const ary = (0, array_1.range)(3, (index) => index);
        (0, vitest_1.expect)(ary).toBeDefined();
        (0, vitest_1.expect)(ary.length).toBe(3);
        (0, vitest_1.expect)(ary).toEqual([0, 1, 2]);
    });
    (0, vitest_1.test)("range 返回对象", () => {
        const ary = (0, array_1.range)(3, (index) => ({ index }));
        (0, vitest_1.expect)(ary).toBeDefined();
        (0, vitest_1.expect)(ary.length).toBe(3);
        (0, vitest_1.expect)(ary).toEqual([{ index: 0 }, { index: 1 }, { index: 2 }]);
    });
    (0, vitest_1.test)("range只传一个参数", () => {
        const ary = (0, array_1.range)(3);
        (0, vitest_1.expect)(ary).toBeDefined();
        (0, vitest_1.expect)(ary.length).toBe(3);
        (0, vitest_1.expect)(ary).toEqual([0, 1, 2]);
    });
});
(0, vitest_1.describe)("array > compose", () => {
    (0, vitest_1.test)("compose", () => {
        const fn = (0, array_1.compose)(v => v + 1, v => v + 1);
        (0, vitest_1.expect)(typeof fn).toBe("function");
        const res = fn(1);
        (0, vitest_1.expect)(res).toBe(3);
    });
    (0, vitest_1.test)("compose 没有参数", () => {
        const fn = (0, array_1.compose)();
        (0, vitest_1.expect)(typeof fn).toBe("function");
        const res = fn(1);
        (0, vitest_1.expect)(res).toBe(1);
    });
});
(0, vitest_1.describe)("array > composeAsync", () => {
    (0, vitest_1.test)("composeAsync", () => {
        const fn = (0, array_1.composeAsync)(v => Promise.resolve(v + 1), v => Promise.resolve(v + 1));
        (0, vitest_1.expect)(typeof fn).toBe("function");
        const res = fn(1);
        (0, vitest_1.expect)(res).resolves.toBe(3);
    });
    (0, vitest_1.test)("composeAsync 没有参数", () => {
        const res = (0, array_1.composeAsync)()(1);
        (0, vitest_1.expect)(res).resolves.toBe(1);
    });
});
//# sourceMappingURL=array.test.js.map