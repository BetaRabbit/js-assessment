if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
      return fn.call(obj);
    },

    alterObjects : function(constructor, greeting) {
      constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
      var results = [];
      for (var idx in obj) {
        if (obj.hasOwnProperty(idx))
          results.push(idx + ': ' + obj[idx]);
      }

      return results;
    }
  };
});
