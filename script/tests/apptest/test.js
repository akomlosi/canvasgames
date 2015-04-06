/// <reference path="../types/chai/chai.d.ts" />
/// <reference path="../types/mocha/mocha.d.ts" />
/// <reference path="../types/sinon/sinon.d.ts" />
var chai = require('chai');
var hi = require('../../libs/app/app');
describe('Greeter test', function () {
    it('should greet me', function () {
        chai.assert.isTrue(new hi.SayHello().greet('Yvett') === 'hello, Yvett');
    });
    it('should greet the world', function () {
        chai.assert.isTrue(new hi.SayHello().greet() === 'hello world');
    });
});
//# sourceMappingURL=test.js.map