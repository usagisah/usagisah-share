"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
require("../lib/promise");
(0, vitest_1.describe)("static delay", () => {
    (0, vitest_1.test)("是否在规定时间后执行", () => {
        return new Promise((resolve, reject) => {
            const fn = vitest_1.vi.fn();
            Promise.delay(100, null).then(fn);
            setTimeout(() => {
                resolve((0, vitest_1.expect)(fn).toBeCalled());
            }, 100);
        });
    }, 2000);
    (0, vitest_1.test)("传值", () => {
        return new Promise((resolve, reject) => {
            (0, vitest_1.expect)(Promise.delay(100, "res")).resolves.toBe("res");
            (0, vitest_1.expect)(Promise.delay(100, "err").then(v => {
                throw v;
            })).rejects.toBe("err");
            setTimeout(() => {
                resolve();
            }, 100);
        });
    }, 500);
});
(0, vitest_1.describe)("static fn", () => {
    (0, vitest_1.test)("测试返回任何值", () => {
        (0, vitest_1.expect)(Promise.fn(() => 1)).resolves.toBe(1);
        (0, vitest_1.expect)(Promise.fn(async () => true)).resolves.toBe(true);
        (0, vitest_1.expect)(Promise.fn(() => {
            throw "err1";
        })).rejects.toBe("err1");
        (0, vitest_1.expect)(Promise.fn(() => Promise.reject("err2"))).rejects.toBe("err2");
    });
    (0, vitest_1.test)("fn + delay", () => {
        (0, vitest_1.expect)(Promise.fn(() => Promise.delay(500, "res"))).resolves.toBe("res");
        (0, vitest_1.expect)(Promise.fn(() => Promise.delay(600, "err").then(v => {
            throw v;
        }))).rejects.toBe("err");
    });
});
(0, vitest_1.describe)("static props", () => {
    (0, vitest_1.test)("传值", () => {
        (0, vitest_1.expect)(Promise.props({ a: 10, b: false }, (key, value, index) => ({
            key,
            value,
            index
        }))).resolves.toEqual([
            { key: "a", value: 10, index: 0 },
            { key: "b", value: false, index: 1 }
        ]);
    });
    (0, vitest_1.test)("测试过滤", () => {
        (0, vitest_1.expect)(Promise.props({ a: 10, b: false }, (key, value, index) => { })).resolves.toEqual([]);
    });
});
(0, vitest_1.describe)("static method", () => {
    (0, vitest_1.test)("method", () => {
        const fn = Promise.method((v) => !v);
        (0, vitest_1.expect)(fn(true)).resolves.toBe(false);
    });
    (0, vitest_1.test)("methods", () => {
        const fn = Promise.methods(v => v * 10, v => v.toString());
        (0, vitest_1.expect)(fn(1)).resolves.toBe("10");
    });
});
(0, vitest_1.describe)("static each", () => {
    (0, vitest_1.test)("基本使用", () => {
        const p = Promise.each([1, "a", false], (value, index) => {
            return { index, value };
        });
        (0, vitest_1.expect)(p).resolves.toEqual([
            { index: 0, value: 1 },
            { index: 1, value: "a" },
            { index: 2, value: false }
        ]);
    });
    (0, vitest_1.test)("测试过滤", () => {
        const p = Promise.each([1, "a", false], (value, index) => { });
        (0, vitest_1.expect)(p).resolves.toEqual([]);
    });
});
(0, vitest_1.describe)("static map", () => {
    (0, vitest_1.test)("基本使用", async () => {
        const res = await Promise.map([1, "a", false], (value, index) => {
            return { index, value };
        });
        (0, vitest_1.expect)(res).toEqual([
            { index: 0, value: 1 },
            { index: 1, value: "a" },
            { index: 2, value: false }
        ]);
    });
    (0, vitest_1.test)("测试过滤", async () => {
        const res = await Promise.map([1, "a", false], (value, index) => { });
        (0, vitest_1.expect)(res).toEqual([]);
    });
    (0, vitest_1.test)("测试并发, 1", async () => {
        const fn = vitest_1.vi.fn();
        Promise.map([2, 4, 1, 3], v => Promise.delay(v * 100, v)).then(fn);
        await Promise.delay(1050);
        (0, vitest_1.expect)(fn).toBeCalled();
    });
    (0, vitest_1.test)("测试并发, 2", async () => {
        const fn = vitest_1.vi.fn();
        await Promise.map([2, 4, 1, 3], v => Promise.delay(v * 100, v), {
            concurrent: 2
        }).then(fn);
        await Promise.delay(650);
        (0, vitest_1.expect)(fn).toBeCalled();
    });
});
/* --------------  -------------- */
(0, vitest_1.describe)(".delay", () => {
    (0, vitest_1.test)("是否在规定时间后执行", () => {
        Promise.resolve;
        return new Promise((resolve, reject) => {
            const fn = vitest_1.vi.fn();
            Promise.resolve(1).delay(100).then(fn);
            setTimeout(() => {
                resolve((0, vitest_1.expect)(fn).toBeCalled());
            }, 110);
        });
    });
    (0, vitest_1.test)("传值", () => {
        return new Promise((resolve, reject) => {
            (0, vitest_1.expect)(Promise.resolve("res").delay(100)).resolves.toBe("res");
            (0, vitest_1.expect)(Promise.reject("err").delay(100)).rejects.toBe("err");
            setTimeout(() => {
                resolve();
            }, 110);
        });
    });
});
(0, vitest_1.describe)(".props", () => {
    (0, vitest_1.test)("传值", () => {
        (0, vitest_1.expect)(Promise.resolve({ a: 10, b: false }).props((key, value, index) => ({
            key,
            value,
            index
        }))).resolves.toEqual([
            { key: "a", value: 10, index: 0 },
            { key: "b", value: false, index: 1 }
        ]);
    });
    (0, vitest_1.test)("测试过滤", () => {
        (0, vitest_1.expect)(Promise.resolve({ a: 10, b: false }).props((key, value, index) => { })).resolves.toEqual([]);
    });
});
(0, vitest_1.describe)(".each", () => {
    (0, vitest_1.test)("基本使用", () => {
        const p = Promise.resolve([1, "a", false]).each((value, index) => {
            return { index, value };
        });
        (0, vitest_1.expect)(p).resolves.toEqual([
            { index: 0, value: 1 },
            { index: 1, value: "a" },
            { index: 2, value: false }
        ]);
    });
    (0, vitest_1.test)("测试过滤", () => {
        const p = Promise.resolve([1, "a", false]).each((value, index) => { });
        (0, vitest_1.expect)(p).resolves.toEqual([]);
    });
});
(0, vitest_1.describe)(".map", () => {
    (0, vitest_1.test)("基本使用", async () => {
        const res = await Promise.resolve([1, "a", false]).map((value, index) => {
            return { index, value };
        });
        (0, vitest_1.expect)(res).toEqual([
            { index: 0, value: 1 },
            { index: 1, value: "a" },
            { index: 2, value: false }
        ]);
    });
    (0, vitest_1.test)("测试过滤", async () => {
        const res = await Promise.resolve([1, "a", false]).map((value, index) => { });
        (0, vitest_1.expect)(res).toEqual([]);
    });
    (0, vitest_1.test)("测试并发, 1", async () => {
        const fn = vitest_1.vi.fn();
        Promise.resolve([2, 4, 1, 3])
            .map(v => Promise.delay(v * 100, v))
            .then(fn);
        await Promise.delay(1050);
        (0, vitest_1.expect)(fn).toBeCalled();
    });
    (0, vitest_1.test)("测试并发, 2", async () => {
        const fn = vitest_1.vi.fn();
        Promise.resolve([2, 4, 1, 3])
            .map(v => Promise.delay(v * 100, v), {
            concurrent: 2
        })
            .then(fn);
        await Promise.delay(600);
        (0, vitest_1.expect)(fn).toBeCalled();
    });
});
//# sourceMappingURL=promise.test.js.map