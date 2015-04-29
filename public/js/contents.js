

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
					//will append $el to .wrapper.canvas on index.html 
					$el: $('.wrapper.canvas')
					//will append $search to .wrapper.search
					, $search: $('.wrapper.search')
				})
			};
		};
		//DOMReady will be called by jquery on index load. 
		$(document).ready(DOMReady);

		//Start backbone history a necessary step for bookmarkable URL's will tell backbone that it should start monitoring backbone events 
		Backbone.history.start();
	});