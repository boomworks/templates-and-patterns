var ModuleTest = (function(_this, $, U, undefined){

	/* **************************************************************************
	 * Public properties
	 */
	_this.type = 'module';
	_this.module_name = 'ModuleTest';
	_this.major_version = 0;
	_this.minor_version = 0;
	_this.revision = 1;
	_this.version = [_this.major_version, _this.minor_version, _this.revision].join('.');


	/* **************************************************************************
	 * Public methods
	 */

	// Constructor
	_this.initialise = function(){
		$(function(){
			U.log('Initialising ' + _this.toString());
			_this.run_tests();
		});
		return _this;
	};

	_this.run_tests = function(){

		module('Boomworks.utils');
		test('typeOf()', function(){
			var foo, bar = null;

			// jQuery
			equals(U.typeOf($('#qunit-fixture #foo')), 'array', '$(#foo)'); // array
			equals(U.typeOf($('#qunit-fixture b')), 'array', '$(b)'); // array
			equals(U.typeOf($), 'function', '$'); // function

			// .type support
			equals(U.typeOf(ModuleTest), 'module', 'ModuleTest');

			// Literals
			equals(U.typeOf(function(){}), 'function', 'function(){}');
			equals(U.typeOf([]), 'array', '[]');
			equals(U.typeOf({}), 'object', '{}');
			equals(U.typeOf(''), 'string', '\'\'');
			equals(U.typeOf(1), 'number', '1');
			equals(U.typeOf(true), 'boolean', 'true');
			equals(U.typeOf(false), 'boolean', 'false');
			equals(U.typeOf(/\s/g), 'regexp', '/\s/g');
			equals(U.typeOf(null), 'null', 'null');

			// Constructors
			equals(U.typeOf(new Function()), 'function', 'new Function()');
			equals(U.typeOf(new Array(1,2,3,4)), 'array', 'new Array()');
			equals(U.typeOf(new Object()), 'object', 'new Object()');
			equals(U.typeOf(new String('Hello world')), 'string', 'new String()');
			equals(U.typeOf(new Number(1234)), 'number', 'new Number()');
			equals(U.typeOf(new RegExp('/\s/g')), 'regexp', 'new RegExp()');
			equals(U.typeOf(new Date()), 'date', 'new Date()');
			equals(U.typeOf(new Boolean(true)), 'boolean', 'new Boolean()');

			// Native
			equals(U.typeOf(-1.7976931348623157E+10308), 'number', '-1.7976931348623157E+10308');
			equals(U.typeOf(Infinity), 'number', 'Infinity');
			equals(U.typeOf(-Infinity), 'number', '-Infinity');
			equals(U.typeOf(NaN), 'number', 'NaN');
			equals(U.typeOf(Math.E), 'number', 'Math.E');
			equals(U.typeOf(Math.log), 'function', 'Math.log');

			// Browser objects
			equals(U.typeOf(window), 'object', 'window');
			equals(U.typeOf(navigator), 'object', 'navigator');
			equals(U.typeOf(screen), 'object', 'screen');
			equals(U.typeOf(history), 'object', 'history');
			equals(U.typeOf(location), 'object', 'location');

			// Variables
			equals(U.typeOf(bar), 'null', 'bar');
			equals(U.typeOf(foo), 'undefined', 'foo');
		});

		test('is()', function(){
			ok(U.is('foo', 'string'), 'string');
			ok(!U.is('foo', 'number'), 'string != number');
			ok(U.is(true, 'boolean'), 'boolean');
			ok(U.is(true, 'bool'), 'bool');


			ok(U.is(1, 'number'), 'number');
			ok(U.is(1, 'num'), 'num');

			ok(U.is(1, 'int'), 'int');
			ok(U.is(1, 'integer'), 'integer');
			//ok(!U.is(1.0, 'int'), 'float != int');
			//ok(!U.is(1.0, 'integer'), 'float != integer');

			ok(U.is(1.0, 'float'), 'float');
			ok(U.is(1.0, 'double'), 'double');
			//ok(!U.is(1, 'float'), 'int != float');
			//ok(!U.is(1, 'double'), 'int != double');

		});

	};

	/* **************************************************************************
	 * Call the module constructor & return self
	 */
	return _this.initialise();

}(ModuleTest || {}, jQuery, Boomworks.utils));

