/*********************************

Module to build router 

Flickr API Service: http://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json&jsoncallback=?

*********************************/

define([
	'backbone'
	, './config'
	, './collections/pictures'
	, './views/pictures'
	, './views/nopictureview'
	, './views/pictureDetails'
	, './views/search'
	], 
	function (
		Backbone
		, CONFIGURATION	
		, PicturesCollection
		, PicturesView
		, NoPicturesView
		, PictureView
		, SearchView
		){

		//defines custom router class
		var BurberryPictureRouter = Backbone.Router.extend({
			//empty objects that will be populated during the initialize function
			ns: {
				collections: {}
				, views: {}
			}, 

			//specified routes for app 
			routes: {
				"": "initialGallery"
				, "picture/:photo_name" : "GETPictureinfo"
				, "search/:tag" : "search"
			}, 

			//initialize function 
			initialize: function (options){


				//set $root and $search to equal $el and $search respectively, passed in from contents.js module 
				this.$root = options.$el;
				this.$search = options.$search;

				//loads new collection class into collections object and calls function to extend collection 
				this.ns.collections.pictures = new PicturesCollection(); 
				//loads new views class into views object and links view with collection and calls PituresView extend function  
				this.ns.views.pictures = new PicturesView({ collection: this.ns.collections.pictures });

				//passes route object here new route can be defined later 

				this.ns.views.search = new SearchView({ route: this.routes });

				//calls render function in SearchView to update new search
				this.$search.html( this.ns.views.search.render().el );

				//events methods that will listen for change and then update the collection by calling render function 
				this.listenTo(this.ns.collections.pictures, "reset change", this.renderGallery);
				

			},

			//renderGallery function 
			renderGallery: function (collection, options) {

				//error handling 
				if (!collection.size()) {
					if(!this.ns.views.noPicture) {
						this.ns.views.noPicture = new NoPicturesView({ message: "No Images found" });
					}
					this.$root.html( this.ns.views.noPicture.render().el );
				} else {
					//re-render picture gallery on change
					this.$root.html( this.ns.views.pictures.render().el)
				}
			}, 

			//this handler is responsible for populating the initial gallery with photos tagged with burberry from configuration module
			initialGallery: function (){
				this.search(CONFIGURATION.filter.tags);
			},

			//handler responsible for rendering image details 
			GETPictureinfo: function (filename) {

				var imageModel;

				if (this.ns.collections.pictures.size()){
					imageModel = this.ns.collections.pictures.retrieveFileName(filename);
					if(imageModel) {
						this.ns.views.image = new PictureView({ model: imageModel });
						this.$root.html( this.ns.views.image.render().el );
					}else {
						//no image found 
						if (!this.ns.views.noimage){
							this.ns.views.noimage = new NoPicturesView({ message: ["No Image found with ",filename," was found"].join(" ")});
							this.$root.html( this.ns.views.noimage.render().el );
						}
					}
				}
			}, 

			//search function saves selected search as the filter in collection. 
			search: function(tags) {

                	this.ns.collections.pictures.setFilter({ tags: tags });
                	this.ns.collections.pictures.fetch({ reset: true });
            	this.ns.views.search.setTerm(tags);
        	}


		});
		
		return BurberryPictureRouter;
	});