/*!
 * Boomworks::utils - JavaScript utility library
 *
 * Copyright (c) 2010 Boomworks <http://boomworks.com.au/>
 * Author: Lindsay Evans
 * Licensed under the MIT license <http://www.opensource.org/licenses/mit-license.php> 
 */

var Boomworks_utils = (function(_this, window, undefined){


	/* **************************************************************************
	 * Private variables
	 */

	var
		old_u,
		U = _this
	;

	/* **************************************************************************
	 * Public properties
	 */
	_this.debug = _this.debug || false;

	// Metadata
	U.name = 'Boomworks::utils';
	U.globals = ['Boomworks_utils', 'U'];
	U.type = 'library';
	U.major_version = 0;
	U.minor_version = 0;
	U.patch_version = 1;
	U.special_version = '';
	U.version = [U.major_version, U.minor_version, U.patch_version].join('.') + U.special_version;

	/* **************************************************************************
	 * Public methods
	 */

	// Constructor
	_this.initialise = function(){
		old_u = window.U;
		U.log('Initialising ' + _this.toString());
		return window.U = _this;
	};

	// No conflict
	_this.no_conflict = _this.noConflict = function(){
		window.U = old_u;
		return _this;
	};


	// Logging methods

	// Generic logging method 
	_this.log = function(){

		if(!_this.debug) return false;

		try{
			console.log.apply(console, arguments);
		}catch(e){
			try{
				opera.postError.apply(opera, arguments);
			}catch(e){
				alert(Array.prototype.join.call(arguments, ' '));
			}
		}

		return true;

	};


	// Type checking etc.

	// Determines the type of a variable
	_this.typeOf = function(v, extras){

		var extras = extras || false;

		if(typeof v === 'undefined') return 'undefined';
		if(v === null) return 'null';

		// Check if the object can tell us what it is
		if(extras && v.type) return v.type;

		// Check if the object is jQuery itself
		if(extras && v === jQuery) return 'jquery-library';

		// Check if the object is a jQuery object
		if(extras && v.jquery) return 'jquery-object';

		// Test if this is a native object, in case an object with one of these methods is passed in
		if(v.constructor.toString().indexOf('[native code]') != -1){
			if(v.charAt) return 'string';
			if(v.splice) return 'array';
			if(v.toFixed) return 'number';
			if(v.exec) return 'regexp';
			if(v.getTime) return 'date';
			if(v.toString() === 'true' || v.toString() === 'false') return 'boolean';
		}

		return typeof v; // object, function

	};

	// Determines if a variable is of a certain type
	// TODO:
	// - check if floats really are (might not be possible - e.g. 1.0)
	_this.is = function(v, t, extras){

		var
			t = t.toLowerCase(),
			extras = extras || false
		;

		switch(t){

			case 'bool':
				t = 'boolean';
				break;

			case 'num':
			case 'float':
			case 'double':
				t = 'number';
				break;

			case 'int':
			case 'integer':
				return _this.typeOf(v, extras) === 'number' && Math.floor(v) === v;
				break;

		}

		return _this.typeOf(v, extras) === t;

	};



	/* **************************************************************************
	 * Loading & prefetching of external resources
	 */

	// Asynchonously load a list of resources in order
	_this.load = function(uris, type, ctx, success){
		var d = document,
				type = type || 'text/javascript',
		    ctx = ctx || d.getElementsByTagName('head')[0],
				success = success || function(){return arguments;},
				node, node_type = 'script',
				i = 0, uris_length = uris.length, uri, loaded = 0
		;

		for(i; i < uris_length; i++){
			uri = uris[i];
			node = d.createElement('object');
			node.data = uri;
			ctx.appendChild(node);

			node.onload = function(){
				ctx.removeChild(this);
				if(++loaded === uris_length){
					for(i = 0; i < uris_length; i++){
						uri = uris[i];
						node = d.createElement(node_type);
						node.src = uri;
						ctx.appendChild(node);
					}
					return success.call(uris, type, ctx, success);
				}
			}
		}

	};

	_this.toString = function(){
		return _this.name + ' v' + _this.version;
	};

	/* **************************************************************************
	 * Call the module constructor & return self
	 */
	return _this.initialise();

}(Boomworks_utils || {}, window));

