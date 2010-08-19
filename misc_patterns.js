
/* ***************************************************************************
 * Loops
 */ 

// Looping over an array, order unimportant
var foo = ['goat', 'yak', 'ox', 'otter'], i = foo.length;
while(i--){
	foo[i] = foo[i] + '!';
}

// Looping over an array, order important
var foo = ['goat', 'yak', 'ox', 'otter'], foo_length = foo.length, i = 0;
for(; i < foo_length; i++){
	alert(foo[i] + ' stew');
}

// ...or possibly:
var foo = ['goat', 'yak', 'ox', 'otter'], i = 0, l = foo.length;
do{
	foo[i] = foo[i] + '!';
}while(++i < l);


/* ***************************************************************************
 * Functions
 */ 

// Defaulting arguments
function foo(speed){
	var speed = speed || 'damn fast';
}

// Group variable definitions at top of function
function foo(){
	var
		bar1 = 'b1',
		bar2 = 'b2',
		bar3 = 'b3'
	;

}

// Early bailout - Return as early as possible to avoid overhead 
function foo(bar){

	if(bar === null) return false;

	// Something that would suck CPU like a Dyson

	return 'Great justice!';

}

// Self-executing anonymous function
(function(args){
	alert(args + 's are awesome');
})('llama');

// Assigning function to event handler & executing immediately
foo.onclick = (function(){
	// Do something
	return arguments.callee;
})();

// Potentially more useful to just do this if you need to reuse the function
var foo_click_handler = foo.onclick = function(){
	// Do something
};
foo_click_handler();
