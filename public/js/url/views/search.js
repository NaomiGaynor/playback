define([
	"backbone"
	, "../main"
	, "text!../../templates/search.html"
], 
function(
	Backbone
	, router
	, searchTemplate
){
	var SearchBoxView = Backbone.View.extend({

		tagName: 'form',

		attributes: {
			class: "form-search"
		},

		template: _.template(searchTemplate),

		//store a submit event that will update tag on search 
		events: {
			"submit": "onSearch"
		}, 

		initialize: function() {

			_.bindAll(this, 'onSearch');
		},

		//when a search term is entered this function is triggered and will change the url.
		onSearch: function(e){
			e.preventDefault();
			Backbone.history.navigate('search/'+ this.$('input[name="search"]').val(), {trigger: true});
			return false;
		},  


		//setTerm function that will input the searchterm currently being searched into the input search box 
		setTerm: function(searchTerm) {

			this.$('input[name="search"]').val(searchTerm);
			
		},

		//serialize function will save all attributes from the model into a context object
		serialize: function() {
			var context = {};
			console.log(this.options);
			if (this.options) {
				if (this.options.model) {
					context = this.options.model.toJSON();
				}
			}
			return context;
		}, 
		//rrender function will append template to the DOM 
		render: function(){

			if (!this.template) {
				throw Error('View.render(): <template> property is required!');
			}
			this.$el.html(this.template(this.serialize()));
			return this;
		}

	});
	return SearchBoxView
})