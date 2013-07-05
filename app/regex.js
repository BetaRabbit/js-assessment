if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
      return (/\d/).test(str);
    },

    containsRepeatingLetter : function(str) {
      return (/([a-zA-Z])\1/).test(str);
    },

    endsWithVowel : function(str) {
      return (/[aeiou]$/i).test(str);
    },

    captureThreeNumbers : function(str) {
      var matches = str.match(/\d{3}/);
      return matches ? matches[0] : false;
    },

    matchesPattern : function(str) {
      return (/^\d{3}\-\d{3}\-\d{4}$/).test(str);
    },

    isUSD : function(str) {
      return (/^\$[1-9]\d{0,2}(?:,\d{3})*(?:\.\d[1-9])?$/).test(str);
    }
  };
});
