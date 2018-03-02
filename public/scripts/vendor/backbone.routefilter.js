/*! backbone.routefilter - v0.1.0 - 2012-09-10
* https://github.com/boazsender/backbone.routefilter
* Copyright (c) 2012 Boaz Sender; Licensed MIT 
* https://raw.githubusercontent.com/duego/backbone.routefilter/bf3fe001a1d688ace7d78bc41b239c3306abd718/src/backbone.routefilter.js
*/

(function(Backbone, _) {

  // Save a reference to the original route method to be called
  // after we pave it over.
  var originalRoute = Backbone.Router.prototype.route;

  // Create a reusable no operation func for the case where a before
  // or after filter is not set. Backbone or Underscore should have
  // a global one of these in my opinion.
  var nop = function(){};

  // Extend the router prototype with a default before function,
  // a default after function, and a pave over of _bindRoutes.
  _.extend(Backbone.Router.prototype, {

    // Add default before filter.
    before: nop,

    // Add default after filter.
    after: nop,

    // Pave over Backbone.Router.prototype.route, the public method used
    // for adding routes to a router instance on the fly, and the
    // method which backbone uses internally for binding routes to handlers
    // on the Backbone.history singleton once it's instantiated.
    route: function(route, name, callback) {

      // If there is no callback present for this route, then set it to
      // be the name that was set in the routes property of the constructor,
      // or the name arguement of the route method invocation. This is what
      // Backbone.Router.route already does. We need to do it again,
      // because we are about to wrap the callback in a function that calls
      // the before and after filters as well as the original callback that
      // was passed in.
      if( !callback ){
        callback = this[ name ];
      }

      // Create a new callback to replace the original callback that calls
      // the before and after filters as well as the original callback
      // internally.
      var wrappedCallback = _.bind( function() {

        // Call the before filter and if it returns false, run the
        // route's original callback, and after filter. This allows
        // the user to return false from within the before filter
        // to prevent the original route callback and after
        // filter from running.
        var callbackArgs = _.toArray(arguments),
          async = false,
          alwaysBeforeCallback,
          alwaysBeforeArgs = [ route, callbackArgs ],
          alwaysBeforeResult,
          beforeAfterArgs = [ route, callbackArgs ],
          beforeCallback,
          beforeResult,
          mainAfterCallbacks;

          if ( _.isFunction(this.alwaysBefore) ) {

            // If the this.alwaysBefore filter is just a single function, then call
            // it with the arguments.
            alwaysBeforeCallback = this.alwaysBefore;
          } else if (this.alwaysBefore && typeof this.alwaysBefore[route] !== "undefined" ) {

            // otherwise, find the appropriate callback for the route name
            // and call that.
            alwaysBeforeCallback = this.alwaysBefore[route];
          } else {

            // otherwise, if we have a hash of routes, but no before callback
            // for this route, just use a nop function.
            alwaysBeforeCallback = nop;
          }

        alwaysBeforeResult = alwaysBeforeCallback.apply(this, alwaysBeforeArgs);
        if ( alwaysBeforeResult === false ) {
          return;
        }

        if ( _.isFunction(this.before) ) {

          // If the before filter is just a single function, then call
          // it with the arguments.
          beforeCallback = this.before;
        } else if (this.before && typeof this.before[route] !== "undefined" ) {

          // otherwise, find the appropriate callback for the route name
          // and call that.
          beforeCallback = this.before[route];
        } else {

          // otherwise, if we have a hash of routes, but no before callback
          // for this route, just use a nop function.
          beforeCallback = nop;
        }

        beforeResult = beforeCallback.apply(this, beforeAfterArgs);

        // If the before callback fails during its execusion (by returning)
        // false, then do not proceed with the route triggering.
        if ( beforeResult === false ) {
          return;
        }

        mainAfterCallbacks = _.bind(function(proceed){
          if(async){
            if(!proceed){
              return;
            }
          }
          // If the callback exists, then call it. This means that the before
          // and after filters will be called whether or not an actual
          // callback function is supplied to handle a given route.
          if( callback ) {
            callback.apply( this, callbackArgs );
          }

          var afterCallback;
          if ( _.isFunction(this.after) ) {

            // If the after filter is a single funciton, then call it with
            // the proper arguments.
            afterCallback = this.after;

          } else if (this.after && typeof this.after[route] !== "undefined" ) {

            // otherwise if we have a hash of routes, call the appropriate
            // callback based on the route name.
            afterCallback = this.after[route];

          } else {

            // otherwise, if we have a has of routes but no after callback
            // for this route, just use the nop function.
            afterCallback = nop;
          }

          // Call the after filter.
          afterCallback.apply( this, beforeAfterArgs );

        }, this);

        // If the beforeCallback returned a deferred object then
        // execute the main callback after the deferred object is resolved
        if ( _.isObject(beforeResult) && beforeResult.done ) {
          async = true;
          beforeResult.done(mainAfterCallbacks);
        }
        // otherwise, execute the main callback immediately
        else {
          mainAfterCallbacks();
        }

      }, this);

      // Call our original route, replacing the callback that was originally
      // passed in when Backbone.Router.route was invoked with our wrapped
      // callback that calls the before and after callbacks as well as the
      // original callback.
      return originalRoute.call( this, route, name, wrappedCallback );
    }

  });

}(Backbone, _));