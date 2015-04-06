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