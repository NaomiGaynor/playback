/******************************
Items view class 

******************************/

define([
	"backbone"
	, "./picture"
	],
function(
	Backbone
	, pictureView	
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
			var picture; 
			this.$el.html('');
			if(this.options && this.options.hasOwnPropery('collection')){
				this.options.collection.each(function(model){
					//assigns each picture view to model passsed in as argumnet of function
					pictureView = new pictureView({
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