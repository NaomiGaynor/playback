/**************************************

Module to build image model

**************************************/

define([
	"backbone"
	, "../config"
	], function (
	Backbone
	, config
	){
		//defines class for model 
		var ImageModel = Backbone.Model.extend({

			//define a parse function 
			parse: function (response) {
				// sets fileName to jpg image
				response.fileName = this.urlTruncate(response.media.m);
				response.tagsArray = response.tags.split(' ');
				return response;
			},

			getFileName: function (){
				var fileName = "";

				if (this.get('media')){
					fileName = this.urlTruncate(this.get("media").m)
				}
				return fileName;
			},

			urlTruncate: function (url){
				return url.split("/").pop();
			}
		});
		return ImageModel;
	});