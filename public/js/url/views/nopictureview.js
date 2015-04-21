define([
	'backbone'
	, 'urltemplating'
	, 'text!../../templates/no-image.html'
],
function(
	Backbone
	, TemplatingEngine
	, NoItemsTpl
) {

	var NoItemsView = Backbone.View.extend({

		template: NoItemsTpl

		, initialize: function() {
			this.options.model = new Backbone.Model({
				message: this.options && this.options.message ? this.options.message : ''
			});
		}


	});

	return NoItemsView;
});