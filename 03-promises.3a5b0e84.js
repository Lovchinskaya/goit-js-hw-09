!function(){function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=o.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){t[e]=o},o.parcelRequired7c6=r);var i=r("iU1Pc");document.querySelector(["delay"]),document.querySelector(["step"]),document.querySelector(["amount"]);function l(o,n){Math.random()>.3||e(i).Notify.failure("Failure")}({form:document.querySelector(".form")}).form.addEventListener("submit",l),l(position).then((function(e){var o=e.position,n=e.delay;console.log("✅ Fulfilled promise ".concat(o," in ").concat(n,"ms"))})).catch((function(e){var o=e.position,n=e.delay;console.log("❌ Rejected promise ".concat(o," in ").concat(n,"ms"))})),shouldResolve?e(i).Notify.success("Success"):e(i).Notify.failure("Failure")}();
//# sourceMappingURL=03-promises.3a5b0e84.js.map