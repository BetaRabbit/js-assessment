if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
      return 1 & (num >> (bit - 1));
    },

    base10: function(str) {
      return parseInt(str, 2);
    },

    convertToBinary: function(num) {
      var str = num.toString(2);
      for (var i = 0, l = 8 - str.length; i < l; i++) {
        str = '0' + str;
      }

      return str;
    },

    multiply: function(a, b) {

    }
  };
});

