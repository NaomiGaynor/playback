

//define used to prevent the polluting of global namespace.
//first argument of define requires other modules.
// second argument is function that requires modules.

define([
	'jquery'
	, 'url/main'
	, 'backbone'
	], function (
		$
		, BurberryPictureRouter
		, Backbone
	){

		var DOMReady = function (){
			URL.routers = {
				//creating new router, which is defined in url/main.js 
				BurberryPictureRouter: new BurberryPictureRouter({
					$el: $('.wrapper.canvas')
					, $search: $('.wrapper.search')
				})
			};
		};
		//DOMReady will be called by jquery on index load. 
		$(document).ready(DOMReady);

		//Start backbone history a necessary step for bookmarkable URL's 
		Backbone.history.start();
	});