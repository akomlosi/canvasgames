/// <reference path="../core/dts/all.d.ts" />
import h = require('./app2');
export class SayHello {
	public greet(name?: String) {
		if (!name) {
			return new h.HelloWorld().doit();
		}
		return 'hello, ' + name;
	}
}
