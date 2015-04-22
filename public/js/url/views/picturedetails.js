define([
	'backbone'
	, 'text!../../templates/image-detail.html'
],
function(
	Backbone
	, ImageDetailsTemplate
) {

	var ImageDetailsView = Backbone.View.extend({

		tagName: 'article'

		, attributes: {
			class: "thumbnail"
		}

		, template: _.template(ImageDetailsTemplate)

		//event that will listen for click event on back button.
		, events: {
			'click .btn-small.back': 'goBack'
		}

		//go back function, if used outside development mode would have to add an if statement to redirect to home page if user had accessed the site from a different site.
		, goBack: function() {
			window.history.back();
			return false;
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

	return ImageDetailsView;
});