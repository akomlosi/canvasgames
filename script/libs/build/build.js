(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/// <reference path="../core/dts/all.d.ts" />
var h = require('./app2');
var SayHello = (function () {
    function SayHello() {
    }
    SayHello.prototype.greet = function (name) {
        if (!name) {
            return new h.HelloWorld().doit();
        }
        return 'hello, ' + name;
    };
    return SayHello;
})();
exports.SayHello = SayHello;
//# sourceMappingURL=app.js.map
},{"./app2":2}],2:[function(require,module,exports){
var HelloWorld = (function () {
    function HelloWorld() {
    }
    HelloWorld.prototype.doit = function () {
        return 'hello world';
    };
    return HelloWorld;
})();
exports.HelloWorld = HelloWorld;
//# sourceMappingURL=app2.js.map
},{}]},{},[1,2]);
