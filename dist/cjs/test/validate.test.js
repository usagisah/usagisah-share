"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const validate_1 = require("../lib/validate");
(0, vitest_1.describe)("validate isString", () => {
    (0, vitest_1.test)("isString", () => {
        (0, vitest_1.expect)((0, validate_1.isString)(1)).toBe(false);
        (0, vitest_1.expect)((0, validate_1.isString)([])).toBe(false);
        (0, vitest_1.expect)((0, validate_1.isString)({})).toBe(false);
        (0, vitest_1.expect)((0, validate_1.isString)(Symbol())).toBe(false);
        (0, vitest_1.expect)((0, validate_1.isString)(() => { })).toBe(false);
        (0, vitest_1.expect)((0, validate_1.isString)("")).toBe(true);
    });
});
(0, vitest_1.describe)("validate isArray", () => {
    (0, vitest_1.test)("isArray", () => {
        (0, vitest_1.expect)((0, validate_1.isArray)(1)).toBe(false);
        (0, vitest_1.expect)((0, validate_1.isArray)({})).toBe(false);
        (0, vitest_1.expect)((0, validate_1.isArray)(Symbol())).toBe(false);
        (0, vitest_1.expect)((0, validate_1.isArray)(() => { })).toBe(false);
        (0, vitest_1.expect)((0, validate_1.isArray)("")).toBe(false);
        (0, vitest_1.expect)((0, validate_1.isArray)([])).toBe(true);
    });
});
(0, vitest_1.describe)("validate isBoolean", () => {
    (0, vitest_1.test)("isBoolean", () => {
        (0, vitest_1.expect)((0, validate_1.isBoolean)(1)).toBe(false);
        (0, vitest_1.expect)((0, validate_1.isBoolean)({})).toBe(false);
        (0, vitest_1.expect)((0, validate_1.isBoolean)(Symbol())).toBe(false);
        (0, vitest_1.expect)((0, validate_1.isBoolean)(() => { })).toBe(false);
        (0, vitest_1.expect)((0, validate_1.isBoolean)("")).toBe(false);
        (0, vitest_1.expect)((0, validate_1.isBoolean)([])).toBe(false);
        (0, vitest_1.expect)((0, validate_1.isBoolean)(false)).toBe(true);
    });
});
(0, vitest_1.describe)("validate isFunction", () => {
    (0, vitest_1.test)("isFunction", () => {
        (0, vitest_1.expect)((0, validate_1.isFunction)(1)).toBe(false);
        (0, vitest_1.expect)((0, validate_1.isFunction)({})).toBe(false);
        (0, vitest_1.expect)((0, validate_1.isFunction)(Symbol())).toBe(false);
        (0, vitest_1.expect)((0, validate_1.isFunction)("")).toBe(false);
        (0, vitest_1.expect)((0, validate_1.isFunction)([])).toBe(false);
        (0, vitest_1.expect)((0, validate_1.isFunction)(false)).toBe(false);
        (0, vitest_1.expect)((0, validate_1.isFunction)(() => { })).toBe(true);
    });
});
(0, vitest_1.describe)("validate isNumber", () => {
    (0, vitest_1.test)("isNumber", () => {
        (0, vitest_1.expect)((0, validate_1.isNumber)({})).toBe(false);
        (0, vitest_1.expect)((0, validate_1.isNumber)(1)).toBe(true);
    });
});
(0, vitest_1.describe)("validate isObject", () => {
    (0, vitest_1.test)("isObject", () => {
        (0, vitest_1.expect)((0, validate_1.isObject)([])).toBe(false);
        (0, vitest_1.expect)((0, validate_1.isObject)(null)).toBe(false);
        (0, vitest_1.expect)((0, validate_1.isObject)(Promise.resolve(1))).toBe(true);
        (0, vitest_1.expect)((0, validate_1.isObject)(new Map())).toBe(true);
        (0, vitest_1.expect)((0, validate_1.isObject)({})).toBe(true);
    });
});
(0, vitest_1.describe)("validate isPlainObject", () => {
    (0, vitest_1.test)("isPlainObject", () => {
        (0, vitest_1.expect)((0, validate_1.isPlainObject)([])).toBe(false);
        (0, vitest_1.expect)((0, validate_1.isPlainObject)(null)).toBe(false);
        (0, vitest_1.expect)((0, validate_1.isPlainObject)(Promise.resolve(1))).toBe(false);
        (0, vitest_1.expect)((0, validate_1.isPlainObject)(new Map())).toBe(false);
        (0, vitest_1.expect)((0, validate_1.isPlainObject)({})).toBe(true);
    });
});
(0, vitest_1.describe)("validate isPromise", () => {
    (0, vitest_1.test)("isPromise", () => {
        (0, vitest_1.expect)((0, validate_1.isPromise)({})).toBe(false);
        (0, vitest_1.expect)((0, validate_1.isPromise)(Promise.resolve(1))).toBe(true);
    });
});
(0, vitest_1.describe)("validate isUndefined", () => {
    (0, vitest_1.test)("isUndefined", () => {
        (0, vitest_1.expect)((0, validate_1.isUndefined)({})).toBe(false);
        (0, vitest_1.expect)((0, validate_1.isUndefined)(null)).toBe(false);
        (0, vitest_1.expect)((0, validate_1.isUndefined)("undefined")).toBe(false);
        (0, vitest_1.expect)((0, validate_1.isUndefined)(void 0)).toBe(true);
    });
});
(0, vitest_1.describe)("validate isNull", () => {
    (0, vitest_1.test)("isNull", () => {
        (0, vitest_1.expect)((0, validate_1.isNull)({})).toBe(false);
        (0, vitest_1.expect)((0, validate_1.isNull)(null)).toBe(true);
    });
});
(0, vitest_1.describe)("validate isEmpty", () => {
    (0, vitest_1.test)("isEmpty", () => {
        (0, vitest_1.expect)((0, validate_1.isEmpty)({})).toBe(false);
        (0, vitest_1.expect)((0, validate_1.isEmpty)(" ")).toBe(false);
        (0, vitest_1.expect)((0, validate_1.isEmpty)(0)).toBe(false);
        (0, vitest_1.expect)((0, validate_1.isEmpty)(null)).toBe(true);
        (0, vitest_1.expect)((0, validate_1.isEmpty)(undefined)).toBe(true);
        (0, vitest_1.expect)((0, validate_1.isEmpty)("")).toBe(true);
    });
});
(0, vitest_1.describe)("validate isSymbol", () => {
    (0, vitest_1.test)("isSymbol", () => {
        (0, vitest_1.expect)((0, validate_1.isSymbol)({})).toBe(false);
        (0, vitest_1.expect)((0, validate_1.isSymbol)(Symbol())).toBe(true);
    });
});
(0, vitest_1.describe)("validate isMap", () => {
    (0, vitest_1.test)("isMap", () => {
        (0, vitest_1.expect)((0, validate_1.isMap)({})).toBe(false);
        (0, vitest_1.expect)((0, validate_1.isMap)(new Map())).toBe(true);
    });
});
(0, vitest_1.describe)("validate isSet", () => {
    (0, vitest_1.test)("isSet", () => {
        (0, vitest_1.expect)((0, validate_1.isSet)({})).toBe(false);
        (0, vitest_1.expect)((0, validate_1.isSet)(new Set())).toBe(true);
    });
});
(0, vitest_1.describe)("validate isDate", () => {
    (0, vitest_1.test)("isDate", () => {
        (0, vitest_1.expect)((0, validate_1.isDate)({})).toBe(false);
        (0, vitest_1.expect)((0, validate_1.isDate)(new Date())).toBe(true);
    });
});
(0, vitest_1.describe)("validate isNumberString", () => {
    (0, vitest_1.test)("isNumberString", () => {
        (0, vitest_1.expect)((0, validate_1.isNumberString)({})).toBe(false);
        (0, vitest_1.expect)((0, validate_1.isNumberString)(1)).toBe(true);
        (0, vitest_1.expect)((0, validate_1.isNumberString)("1")).toBe(true);
    });
});
(0, vitest_1.describe)("validate isHexColor", () => {
    (0, vitest_1.test)("isHexColor", () => {
        (0, vitest_1.expect)((0, validate_1.isHexColor)({})).toBe(false);
        (0, vitest_1.expect)((0, validate_1.isHexColor)("#")).toBe(false);
        (0, vitest_1.expect)((0, validate_1.isHexColor)("#ff")).toBe(false);
        (0, vitest_1.expect)((0, validate_1.isHexColor)("#ff f")).toBe(false);
        (0, vitest_1.expect)((0, validate_1.isHexColor)("#fffff f")).toBe(false);
        (0, vitest_1.expect)((0, validate_1.isHexColor)("rgba(0,0,0, 0)")).toBe(false);
        (0, vitest_1.expect)((0, validate_1.isHexColor)("rgb(0,0,0)")).toBe(false);
        (0, vitest_1.expect)((0, validate_1.isHexColor)("#fff")).toBe(true);
        (0, vitest_1.expect)((0, validate_1.isHexColor)("#ffffff")).toBe(true);
    });
});
(0, vitest_1.describe)("validate isRgbColor", () => {
    (0, vitest_1.test)("isRgbColor", () => {
        (0, vitest_1.expect)((0, validate_1.isRgbColor)({})).toBe(false);
        (0, vitest_1.expect)((0, validate_1.isRgbColor)("rgba(0,0,0, 0)")).toBe(false);
        (0, vitest_1.expect)((0, validate_1.isRgbColor)("#fff")).toBe(false);
        (0, vitest_1.expect)((0, validate_1.isRgbColor)("#ffffff")).toBe(false);
        (0, vitest_1.expect)((0, validate_1.isRgbColor)("rgb (0 , 0 , 0)")).toBe(false);
        (0, vitest_1.expect)((0, validate_1.isRgbColor)("rgb(0 , 0 , 0)")).toBe(true);
        (0, vitest_1.expect)((0, validate_1.isRgbColor)("rgb(0,0,0)")).toBe(true);
    });
});
(0, vitest_1.describe)("validate isRgbaColor", () => {
    (0, vitest_1.test)("isRgbColor", () => {
        (0, vitest_1.expect)((0, validate_1.isRgbaColor)({})).toBe(false);
        (0, vitest_1.expect)((0, validate_1.isRgbaColor)("#fff")).toBe(false);
        (0, vitest_1.expect)((0, validate_1.isRgbaColor)("#ffffff")).toBe(false);
        (0, vitest_1.expect)((0, validate_1.isRgbaColor)("rgb (0 , 0 , 0)")).toBe(false);
        (0, vitest_1.expect)((0, validate_1.isRgbaColor)("rgb(0 , 0 , 0)")).toBe(false);
        (0, vitest_1.expect)((0, validate_1.isRgbaColor)("rgb(0,0,0)")).toBe(false);
        (0, vitest_1.expect)((0, validate_1.isRgbaColor)("rgba(0,0, 0,0)")).toBe(true);
        (0, vitest_1.expect)((0, validate_1.isRgbaColor)("rgba(0, 0, 0, 0)")).toBe(true);
    });
});
//# sourceMappingURL=validate.test.js.map