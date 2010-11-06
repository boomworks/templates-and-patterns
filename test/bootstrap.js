var BWX = {
	load: function(uris, type, ctx, success){
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

	}
};

