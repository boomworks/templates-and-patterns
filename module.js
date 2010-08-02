
// http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth

var MODULE_NAME = (function(_this, $){

	// Public properties
	_this.major_version = 0;
	_this.minor_version = 0;
	_this.revision = 1;
	_this.version = [_this.major_version, _this.minor_version, _this.revision].join('.');

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

	return _this;

}(MODULE_NAME || {}, jQuery));

