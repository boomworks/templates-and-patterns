/*!
 * project_name 0.0.1 - Description
 *
 * Copyright (c) 2011 Boomworks <http://boomworks.com.au/>
 * Licensed under the MIT <http://www.opensource.org/licenses/mit-license.php)> license.
 */

// ==ClosureCompiler==
// @compilation_level SIMPLE_OPTIMIZATIONS
// @output_file_name project_name.min.js
// ==/ClosureCompiler==

/*jslint eqeqeq: true */

var ProjectName = (function(_this, window, document, $, undefined){

	// Metadata
	_this.meta = {
		type: 'application',
		name: 'project_name',
		major_version: 0,
		minor_version: 0,
		patch_version: 1,
		special_version: 'a',
		version: '0.0.1a',
		globals: ['ProjectName']
	};

	// Public properties
	_this.bar = 'bar';

	// Constructor
	_this.initialise = function(){
		// Initialise application
		// Return self
		return _this;
	};


	// Public methods
	_this.foo = function(){
		return 'foo';
	};


	// Private
	
	var

		// Properties
		_bar = 'bar!',


		// Methods
		_foo = function(){
			return 'foo!';
		}


	;

	// Call constructor & return self
	return _this.initialise();

}(ProjectName || {}, window, document, jQuery));
