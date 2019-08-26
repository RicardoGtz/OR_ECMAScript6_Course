(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
}, _defineProperty(_options, INPUT_OPTIONS, ["left", "rigth", "up", "down", "help"]), _defineProperty(_options, "outpoutOptions", function outpoutOptions() {
    var _this = this;

    this[INPUT_OPTIONS].forEach(function (f) {
        return addToOutput(_this._intro + " " + f);
    });
}), _options);

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.generate = generate;

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Encounter = exports.Encounter = function () {
    function Encounter() {
        var introText = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

        _classCallCheck(this, Encounter);

        this.introText = introText;
    }

    _createClass(Encounter, [{
        key: "whenEncounter",
        value: function whenEncounter() {
            return this.introText;
        }
    }]);

    return Encounter;
}();

var Bear = exports.Bear = function (_Encounter) {
    _inherits(Bear, _Encounter);

    function Bear() {
        _classCallCheck(this, Bear);

        return _possibleConstructorReturn(this, (Bear.__proto__ || Object.getPrototypeOf(Bear)).call(this, "grr grow, you encountered a bear!"));
    }

    return Bear;
}(Encounter);

var Angel = exports.Angel = function (_Encounter2) {
    _inherits(Angel, _Encounter2);

    function Angel() {
        _classCallCheck(this, Angel);

        return _possibleConstructorReturn(this, (Angel.__proto__ || Object.getPrototypeOf(Angel)).call(this, "Wow, you encounter an Angel! this will give you strenght and healing posibilities"));
    }

    return Angel;
}(Encounter);

var Ghost = exports.Ghost = function (_Encounter3) {
    _inherits(Ghost, _Encounter3);

    function Ghost() {
        _classCallCheck(this, Ghost);

        var _this3 = _possibleConstructorReturn(this, (Ghost.__proto__ || Object.getPrototypeOf(Ghost)).call(this));

        _this3.introText = "Booh, you encountered a Ghost!";
        return _this3;
    }

    return Ghost;
}(Encounter);

function generate() {
    var number = Math.floor(Math.random() * (4 - 1)) + 1;

    if (number == 1) {
        return new Bear();
    } else if (number == 2) {
        return new Angel();
    } else if (number == 3) {
        return new Ghost();
    } else if (number == 4) {
        return new Encounter();
    }
}

},{}],3:[function(require,module,exports){
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
            var interaction = this._name + " You just stumble upon ..." + this._encounter.whenEncounter();
            return interaction;
        }
    }]);

    return Enviroment;
}();

},{"./encounter.js":2}],4:[function(require,module,exports){
'use strict';

var _enviroment = require('./enviroment.js');

var _additions = require('./additions.js');

var defaultLine = "Start your jorney now!";
var BR = "<br />";

var enviroment = new _enviroment.Enviroment("Forest -");
var treasures = new WeakMap();
var tresCoords = new Set();

function main() {
    var enterEl = document.querySelector("#enter");
    enterEl.addEventListener("click", onClickEnter, false);
    addToOutput();

    var coordinate1 = { x: 2, y: 2 };
    tresCoords.add(coordinate1);
    treasures.set(coordinate1, { name: "treausre chest", value: 100 });
    var coordinate2 = { x: 2, y: 0 };
    tresCoords.add(coordinate2);
    treasures.set(coordinate2, { name: "medaillon", value: 10 });
}

function findTreasures() {
    var findCoords = void 0;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = tresCoords[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var coords = _step.value;

            if (coords.x == x && coords.y == y) {
                findCoords = coords;
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    if (findCoords) {
        var _treasures$get = treasures.get(findCoords),
            name = _treasures$get.name,
            value = _treasures$get.value;

        if (value) {
            addToOutput('you found ' + name + ' (' + value + ')');
        }
    }
}

var x = 0,
    y = 0;

function navigate(stepX, stepY) {
    var _ref = [x + stepX, y + stepY];
    x = _ref[0];
    y = _ref[1];


    var coordinates = document.querySelector("#coordinates");
    coordinates.innerHTML = x + ',' + y;

    findTreasures();
}

function addToOutput() {
    var newLine = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultLine;

    var output = document.querySelector("#output");
    output.innerHTML = output.innerHTML + BR + newLine;
}

function onCommand(command) {
    if (command === "help") {
        _additions.options.outpoutOptions();
    } else if (command === "left") {
        navigate(-1, 0);
        addToOutput(enviroment.stumbleUpon(command));
    } else if (command === "right") {
        navigate(1, 0);
        addToOutput(enviroment.stumbleUpon(command));
    } else if (command === "up") {
        navigate(0, 1);
        addToOutput(enviroment.stumbleUpon(command));
    } else if (command === "down") {
        navigate(0, -1);
        addToOutput(enviroment.stumbleUpon(command));
    } else {
        addToOutput(command);
    }
}

function onClickEnter() {
    var commands = document.querySelector("#commands");

    onCommand(commands.value);
}

main();

(0, _additions.print)("hola", "wey");
console.log("hello");
console.log(Object.getOwnPropertySymbols(_additions.options));

},{"./additions.js":1,"./enviroment.js":3}]},{},[4]);
