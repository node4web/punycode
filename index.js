"use strict";
exports.decode =
  exports.encode =
  exports.toASCII =
  exports.toUnicode =
  exports.ucs2 =
  exports.version =
    void 0;

console.warn(
  "The `punycode` module is deprecated. Please use a userland " +
    "alternative instead.",
);

module.exports = require("punycode.js");
