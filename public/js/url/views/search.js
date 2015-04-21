define([
	"backbone"
	, "text!../../templates/search.html"
], 
function(
	Backbone
	, searchTemplate
){
	var PictureDetailsView = Backbone.View.extend({

		tagName: 'form',

		attributes: {
			class: 'pull-right'
		},

		template: _.template(searchTemplate),

		//store a submit event that will update tag on search 
		events: {
			"submit": "onSearch"
		}, 

		onSearch: function(){
			this.options.route.navigate(["search/", this.$('input[name="search"]').val()].join(""), {trigger: true});
			return false;
		}, 

		initialize: function() {
			_.bindAll(this, 'onSearch');
		}, 

		setTerm: function(searchTerm) {
			this.$('input[name="search"]').val(searchTerm);
		},

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

	});
	return PictureDetailsView
})