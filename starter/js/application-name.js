var APPLICATION_NAME = (function(_this, $){

	// Public properties
	_this.major_version = 0;
	_this.minor_version = 0;
	_this.revision = 1;
	_this.version = [_this.major_version, _this.minor_version, _this.revision].join('.');

	// Constructor
	_this.initialise = function(){
		$(function(){
			console.log('APPLICATION_NAME v'+_this.version);
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

}(APPLICATION_NAME || {}, jQuery));

