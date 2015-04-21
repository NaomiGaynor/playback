define([
	'backbone'
	, 'text!../../templates/no-image.html'
],
function(
	Backbone
	, TemplatingEngine
	, NoItemsTemplate
) {

	var NoItemsView = Backbone.View.extend({

		template: _.template("NoItemsTemplate")

		, initialize: function() {
			this.options.model = new Backbone.Model({
				message: this.options && this.options.message ? this.options.message : ''
			});
		}


	});

	return NoItemsView;
});