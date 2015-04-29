define([
	'backbone'
	//require-text is used to load html into the js file as text
	, 'text!../../templates/no-image.html'
],
function(
	Backbone
	, noImageTemplate
) {

	var NoItemsView = Backbone.View.extend({
		//appends html using underscore
		template: _.template(noImageTemplate),
		//in the senario of no images being returned this message will appear
		initialize: function() {
			this.model = new Backbone.Model({
				message:  this.message ? this.message : 'No Images found!'
			});
		},
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

	return NoItemsView;
});