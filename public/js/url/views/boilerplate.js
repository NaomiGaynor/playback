/*************************
Boilerpate view created so that all views can be extended from this

no longer in use

*************************/

define([
	'backbone'
	],
function(Backbone){

	var Boilerpate = Backbone.View.extend({

		//serialize function will save all attributes from the model into a context object
		serialize: function() {
			var context = {};
			if (this.options) {
				if (this.options.model) {
					context = this.options.model.toJSON();
				}
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
	})
})