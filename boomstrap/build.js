// r.js build file
// see: https://github.com/jrburke/r.js/blob/master/build/example.build.js
({
    appDir: '.',
    baseUrl: 'js',
	dir: '../dist',
    paths: {
		jquery: 'jquery-1.7.min',
		underscore: 'underscore-1.2.1.min'
    },
	optimizeCss: 'none',
    modules: [
        {
            name: 'project_id',
            exclude: ['jquery']
        }
    ]
})


