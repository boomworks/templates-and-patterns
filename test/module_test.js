var ModuleTest = (function(_this, $, window, undefined){

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
			_this.log('Initialising ' + _this.toString());
		});
		return _this;
	};

	// Generic logging function 
	_this.log = function(){
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
	// TODO:
	// - jQuery returns 'function', $('b') returns 'array'
	// - Advanced types? e.g. global objects, HTML elements, jQuery objects...
	_this.typeOf = function(v){
		if(typeof v === 'undefined') return 'undefined';
		if(v === null) return 'null';
		// Test if this is a native object, in case an object with one of these methods is passed in
		if(v.constructor.toString().indexOf('[native code]') != -1){
			if(v.charAt) return 'string';
			if(v.splice) return 'array';
			if(v.toFixed) return 'number';
			if(v.exec) return 'regexp';
			if(v.getTime) return 'date';
			if(v.toString() === 'true' || v.toString() === 'false') return 'boolean';
		}
		// Check if the object can tell us what it is
		if(v.type) return v.type;
		return typeof v; // object, function
	};

	_this.toString = function(){
		return _this.module_name + ' v' + _this.version;
	};


	/* **************************************************************************
	 * Private properties
	 */

	var _rockin = 'damn straight';


	/* **************************************************************************
	 * Private methods
	 */

	var _bar = function(){
		return 'bar';
	};


	/* **************************************************************************
	 * Call the module constructor & return self
	 */
	return _this.initialise();

}(ModuleTest || {}, jQuery, window));

