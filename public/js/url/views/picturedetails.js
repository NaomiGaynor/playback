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

		, events: {
			'click .btn.back': 'goBack'
		}

		, goBack: function() {
			window.history.back();
			return false;
		},

		serialize: function() {
			var context = {};
			
			console.log(this.model.attributes);
				if (this.model) {
					context = this.model.toJSON();
					console.log("context is: "+context);
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