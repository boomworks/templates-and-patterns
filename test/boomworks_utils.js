
var Boomworks = {};
Boomworks.utils = (function(Boomworks, _this, window, undefined){

	/* **************************************************************************
	 * Public properties
	 */
	_this.type = 'module';
	_this.module_name = 'Boomworks.utils';
	_this.major_version = 0;
	_this.minor_version = 0;
	_this.revision = 1;
	_this.version = [_this.major_version, _this.minor_version, _this.revision].join('.');


	/* **************************************************************************
	 * Public methods
	 */

	// Constructor
	_this.initialise = function(){
		old_u = window.u;
		return window.U = _this;
	};

	//  No conflict
	_this.no_conflict = _this.noConflict = function(){
		window.u = old_u;
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

	// Determines if a variable is of a certain type
	// TODO:
	// - check if int & float really are
	_this.is = function(v, t){
		var t = t.toLowerCase();

		switch(t){
			case 'bool':
				t = 'boolean';
				break;
			case 'num':
			case 'int':
			case 'integer':
			case 'float':
			case 'double':
				t = 'number';
				break;
		}
		
		return _this.typeOf(v) === t;
	};


	_this.toString = function(){
		return _this.module_name + ' v' + _this.version;
	};


	/* **************************************************************************
	 * Private variables
	 */

	var old_u;
	

	/* **************************************************************************
	 * Call the module constructor & return self
	 */
	return _this.initialise();

}(Boomworks || {}, Boomworks.utils || {}, window));

