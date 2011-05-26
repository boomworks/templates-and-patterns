/*!
 * Application_name 0.0.1 - Description
 *
 * Copyright (c) 2011 Boomworks <http://boomworks.com.au/>
 * Licensed under the MIT <http://www.opensource.org/licenses/mit-license.php)> license.
 */

var Application_name = (function(_this, $){

	// Metadata
	_this.type = 'application';
	_this.name = 'Application_name';
	_this.major_version = 0;
	_this.minor_version = 0;
	_this.patch_version = 2;
	_this.special_version = '';
	_this.version = '0.0.1';
	_this.globals = ['Application_name'];


	// Public properties
	_this.bar = 'bar';


	// Constructor
	_this.initialise = function(){
		$(function(){
			console.log('Application_name v'+_this.version);
		});
		return _this;
	};


	// Public methods
	_this.foo = function(){
		return 'foo';
	};


	// Private properties
	var _rockin = 'damn straight';


	// Private methods
	var _bar = function(){
		return 'bar';
	};


	return _this.initialise();

}(Application_name || {}, jQuery));

