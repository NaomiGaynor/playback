/*************************************
Specrunner.js:
* Load dependancies 
* Configire testing environment 
* Load test suites 
* Run test engine
**************************************/

require.config({
	baseUrl: '../'
	//solves browser caching 
	, urlArgs
	, paths: {
		jquery: 'libs/jquery/dist/jquery.min'
		, underscore: 'libs/underscore/underscore'
		, backbone: 'libs/backbone/backbone'
		, jasmine: 'lib/jasmine-core/jasmine.js'
		, 'jamsmine-html': 'lib/jasmine-core/jasmin-html.js'
		, spec: 'tests/spec'
	}, 

	shim: {
		backbone: {
			deps:['underscore', 'jquery']
			, exports: 'backbone'
		}, 

		underscore: {
			exports: '_'
		}, 

		jasmine: {
      	exports: 'jasmine'
    	},

    	'jasmine-html': {
      	deps: ['jasmine'],
      	exports: 'jasmine'
    	}
	}
});

window.store = "TestStore"; // override local storage store name - for testing

require(['underscore', 'jquery', 'jasmine-html'], function(_, $, jasmine){

  var jasmineEnv = jasmine.getEnv();
  jasmineEnv.updateInterval = 1000;

  var htmlReporter = new jasmine.HtmlReporter();

  jasmineEnv.addReporter(htmlReporter);

  jasmineEnv.specFilter = function(spec) {
    return htmlReporter.specFilter(spec);
  };

  var specs = [];

  specs.push('spec/views/imagespec');



  $(function(){
    require(specs, function(){
      jasmineEnv.execute();
    });
  });

});