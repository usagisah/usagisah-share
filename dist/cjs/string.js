"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toUnescape = exports.toEscape = void 0;
/**
 * @description 转译html
 */
const toEscape = (value) => {
    return value
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\//g, '&#x2F;')
        .replace(/\\/g, '&#x5C;')
        .replace(/`/g, '&#96;');
};
exports.toEscape = toEscape;
/**
 * @description 还原转译的html
 */
const toUnescape = (value) => {
    return value
        .replace(/&quot;/g, '"')
        .replace(/&#x27;/g, "'")
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&#x2F;/g, '/')
        .replace(/&#x5C;/g, '\\')
        .replace(/&#96;/g, '`')
        .replace(/&amp;/g, '&');
};
exports.toUnescape = toUnescape;
//# sourceMappingURL=string.js.map