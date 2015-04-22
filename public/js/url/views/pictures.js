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

	var picturesView = Backbone.View.extend({

		views: {
			//pictures views cache
			pictures: {}
		},

		tagName: 'ul',

		//setting attributes 
		attributes: {
			className: 'thumbnails'
		},

		//render function 
		render: function (){
			console.log(this.collection.models);
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