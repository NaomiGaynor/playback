/*************************************

defines imageview class 
*************************************/

define([
	'backbone'
	,'text!../../templates/image.html'
], 
function (
	Backbone 
	, imageTemplate
){

	var imageView = Backbone.View.extend({

		tagName: "li",

		template: _.template(imageTemplate),

		//serialize function will save all attributes from the model into a context object
		serialize: function() {
			var context = {};
			
				if (this.model) {
					context = this.model.toJSON();
				}
			return context;
		}, 

		render: function(){
			if (!this.template) {
				throw Error('BaseView.render(): <template> property is required!');
			}
			this.$el.html(this.template(this.serialize()));
			return this;
		}

	});
	return imageView;

});