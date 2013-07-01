if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
      var deferred = $.Deferred();

      deferred.resolve(value);

      return deferred.promise();
    },

    manipulateRemoteData : function(url) {
      var deferred = $.Deferred();
      
      $.get(url, function(data) {
        var name = data.people.map(function(value) {
          return value.name;
        });
        deferred.resolve(name.sort()); 
      });

      return deferred.promise();
    }
  };
});
