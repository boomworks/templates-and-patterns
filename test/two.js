Boomworks_utils.log('two.js');
Boomworks_utils.log('jQuery should be available:');
Boomworks_utils.log(jQuery);
Boomworks_utils.log('var \'foo\' from one.js:');
Boomworks_utils.log(foo);

$(document).ready(function(){
	console.log('$(document).ready()');
	console.log((new Date()) - start);
});

