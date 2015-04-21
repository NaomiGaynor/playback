/************************************

Config file for require.js paths load dependancies 
deps link to personal js scripts

*************************************/

require.config({
	baseUrl: 'js/',

	paths: {
		jquery: 'libs/jquery/dist/jquery.min'
		, underscore: 'libs/underscore/underscore'
		, backbone: 'libs/backbone/backbone'
		, text: 'libs/requirejs-text/text' 
	},
	//shim config for non AMD scipts
	shim: {
		backbone: {
			deps:['underscore', 'jquery']
			, exports: 'backbone'
		}, 

		underscore: {
			exports: '_'
		}
	},

	//links to contents.js
	deps: ['./contents']
});