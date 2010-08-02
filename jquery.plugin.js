(function($){

	// $.my_function();
	$.my_function = function(){
		return 'I am $.foo()';
	};

	// $('foo').my_method();
	$.fn.my_method = function(settings){

		var config = {foo: 'bar'};
		if(settings) $.extend(config, settings);

		return this.each(function(i){
			var $this = $(this);
		});
	};

})(jQuery);

