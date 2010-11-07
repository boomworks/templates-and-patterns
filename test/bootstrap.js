var BWX = {

	/**
	* Prefetches & then appends a list of resources
	* TODO:
	* - Resources aren't cached in Chrome OSX
	*	- Test in IE
	* @argument {Array} uris URIs of resources you want to load
	* @argument {String} type Optional - MIME type of resources, defaults to 'text/javascript'
	* @argument {DOMElement} ctx Optional - The context to which resources should be attached
	* @argument {Function} success Optinal - Callback function to be executed when all resources have been successfully loaded
	*/
	load: function(uris, type, ctx, success){
		var d = document, // Cache document
				type = type || 'text/javascript', // Default type to JS
		    ctx = ctx || d.getElementsByTagName('head')[0], // Default context to <head>
				success = success || function(){return arguments;}, // Default success function
				node, node_type = 'script',
				i = 0, uris_length = uris.length, uri, loaded = 0
		;

		// Loop over URIs & append an <object> to context - preloads the resource
		for(i; i < uris_length; i++){
			uri = uris[i];
			node = d.createElement('object');
			node.type = type;
			node.data = uri;
			d.body.appendChild(node);

			// When the resource has loaded, remove the node & increment counter
			node.onload = function(){

				d.body.removeChild(this);

				// If all the resources have been loaded, loop over URIs & append the relevant element to context
				if(++loaded === uris_length){
					for(i = 0; i < uris_length; i++){
						uri = uris[i];
						node = d.createElement(node_type);
						node.src = uri;
						ctx.appendChild(node);
					}

					// Call the success function
					return success.call(uris, type, ctx, success);
				}
			};
		}

	}
};

