var ModuleTest = (function(_this, $, undefined){

	// Public properties
	_this.major_version = 0;
	_this.minor_version = 0;
	_this.revision = 1;
	_this.version = [_this.major_version, _this.minor_version, _this.revision].join('.');

	// Constructor
	_this.initialise = function(){
		$(function(){
			log(_this.toString());
		});
		return _this;
	};

	// Public methods
	_this.foo = function(){
		return 'foo';
	};

	_this.toString = function(){
		return 'ModuleTest v'+_this.version;
	};

	// Private properties
	var _rockin = 'damn straight';

	// Private methods
	var _bar = function(){
		return 'bar';
	};

	// Public & private
	var log = _this.log = function(){
		try{
			console.log.apply(console, arguments);
		}catch(e){
			try{
				opera.postError.apply(opera, arguments);
			}catch(e){
				alert(Array.prototype.join.call(arguments, ' '));
			}
		}
	};

	// Determines the type of a variable
	var typeOf = _this.typeOf = function(v){
		if(typeof v === 'undefined') return 'undefined';
		if(v === null) return 'null';
		// Need to test if this is a native object, in case an object with one of these methods is passed in
		if(v.constructor.toString().indexOf('[native code]') != -1){
			if(v.charAt) return 'string';
			if(v.splice) return 'array';
			if(v.toFixed) return 'number';
			if(v.exec) return 'regexp';
			if(v.getTime) return 'date';
			if(v.toString() === 'true' || v.toString() === 'false') return 'boolean';
		}
		return typeof v;
	};

	return _this.initialise();

}(ModuleTest || {}, jQuery));

