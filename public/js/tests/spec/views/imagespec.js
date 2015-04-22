/************************************

Some example tests for views
************************************/
define([
	'jasmine'
    , 'url/config'
    , './url/collections/pictures'
    , './url/views/pictures'
    , './url/views/picture'
    , './views/search'
],
function (
	Jasmine
	, config
	, PictureCollection 
	, PicturesView
	, PictureView
	, SearchView
	){

	describe('test suite for picturesview', function (){

		beforeEach(function (){

			this.PicturesView = new PicturesView({ collection: this.PictureCollection });
		});

		it('expects collection parsed on initiation to be set', function (){
			expect(this.PicturesView.options.collection).toEqual(this.PicturesCollection);
		});
	});

	describe('test suite for PictureView', function (){

		beforeEach(function (){
			this.PictureView = new PictureView();
		});

		it('expects html to append once render() function is called', function (){
			expect(this.PictureView.render()).toBe($('#sandbox').html(this.PictureView.render().el);)
		});
	});

	describe('test suite for search view', function (){
		beforeEach(function (){
			this.SearchView = new SearchView();
		});

		it ('expects there to be an event listener on submit', function (){
			expect(this.SearchViewe.events)toBe("submit");
		});
	});
});