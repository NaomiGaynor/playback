# playback


learning to use backbone.js

This application uses the public Flickr API to retrieve images which have been tagged with the Burberry brand. 

There is a search feature that also allows the user to make tag based searches on other images.

finally all images are links allowing the user to navigate to another page which contains more content related to the specified image. 

It relies on BackboneJS, RequireJS and UnderscoreJS

###Development instructions: 

Fork and clone repository 

	$ npm install 

	$ bower install 

Starting the app: 

	$ npm install 

### Technologies 

* Bower - Fronend dependancy management 
* Require - dependency management 
* Backbone.js - MVC framework 
* Flickr public API
* Underscore.js - Templating Library 
* http-server.js - serves static files.


### Deployment 

In order for this app to be deployed, it would be neccessary to build a node server, using either express or hapi to make a route that could serve the static files that are generated dynamically. 

Once the server is built it could then be deployed onto heroku or any other PaaS
