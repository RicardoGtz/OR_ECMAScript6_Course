"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _options;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var print = exports.print = function print() {
    return console.log((arguments.length <= 0 ? undefined : arguments[0]) + ": " + (arguments.length <= 1 ? undefined : arguments[1]));
};

var INPUT_OPTIONS = exports.INPUT_OPTIONS = Symbol("input_options");

var options = exports.options = (_options = {
    _intro: "You can type"
}, _defineProperty(_options, INPUT_OPTIONS, ["left", "rigth", "up", "down", "help", "poke"]), _defineProperty(_options, "outpoutOptions", function outpoutOptions() {
    var _this = this;

    this[INPUT_OPTIONS].forEach(function (f) {
        return addToOutput(_this._intro + " " + f);
    });
}), _options);
//# sourceMappingURL=additions.js.map