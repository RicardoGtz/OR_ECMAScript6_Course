"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Enviroment = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _encounter = require("./encounter.js");

var encounter = _interopRequireWildcard(_encounter);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Enviroment = exports.Enviroment = function () {
    function Enviroment(name) {
        _classCallCheck(this, Enviroment);

        this._name = name;
        this._encounter = encounter.generate();
    }

    _createClass(Enviroment, [{
        key: "stumbleUpon",
        value: function stumbleUpon() {
            this._encounter = encounter.generate();
            this.pokeEncounter = this._encounter.poke();
            var interaction = this._name + " You just stumble upon ..." + this._encounter.whenEncounter();
            return interaction;
        }
    }, {
        key: "poke",
        value: function poke() {
            var pokeReturn = this.pokeEncounter.next();
            if (!pokeReturn.done) {
                return pokeReturn.value;
            }
        }
    }]);

    return Enviroment;
}();
//# sourceMappingURL=enviroment.js.map