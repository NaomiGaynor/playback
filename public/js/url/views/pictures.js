/******************************
Items view class 

******************************/

define([
	"backbone"
	, "./picture"
	],
function(
	Backbone
	, PictureView	
){
	//defines class of picture view 
	var picturesView = Backbone.View.extend({

		views: {
			//pictures views cache
			pictures: {}
		},
		//appending to all image thumbnails
		tagName: 'ul',

		//setting attributes 
		attributes: {
			class: 'thumbnails'
		},

		//render function which loops through array of images and  stores json object in a model
		render: function (){

			var picture; 
			this.$el.html('');
			if(this.collection.options ){
				(this.collection.models).forEach(function(model){

					//assigns each picture view to model passsed in as argumnet of function
					pictureView = new PictureView({
						model:model
					});
					
					this.views.pictures[pictureView.cid] = pictureView;
					this.$el.append( pictureView.render().el );
				}, this);
			}
			return this;
		}
	});

	return picturesView;
});