define([
	'backbone'
	//require-text is used to load html into the js file as text
	, 'text!../../templates/no-image.html'
],
function(
	Backbone
	, TemplatingEngine
	, NoItemsTemplate
) {

	var NoItemsView = Backbone.View.extend({
		//appends html using underscore
		template: _.template("NoItemsTemplate")
		//in the senario of no images being returned this message will appear
		, initialize: function() {
			this.options.model = new Backbone.Model({
				message: this.options && this.options.message ? this.options.message : ''
			});
		}


	});

	return NoItemsView;
});