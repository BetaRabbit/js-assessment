if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      // loop is much faster than indexOf
      if (typeof Array.prototype.indexOf === 'function') {
        return arr.indexOf(item);
      }

      for (var i = 0, l = arr.length; i< l; i++) {
        if (arr[i] === item) {
          return i;
        }
      }

      return -1;
    },

    sum : function(arr) {
      var sum = 0;
      for (var i = 0, l = arr.length; i < l; i++) {
        sum += arr[i];
      }

      return sum;
    },

    remove : function(arr, item) {
      var ret = [];
      for (var i = 0, l = arr.length; i < l; i++) {
        if (arr[i] !== item) {
          ret.push(arr[i]);
        }
      }

      return ret;
    },

    removeWithoutCopy : function(arr, item) {
      for (var i = 0, l = arr.length; i < l; i++) {
        if (arr[i] === item) {
          arr.splice(i, 1);
          i -= 1;
          l -= 1;
        }
      }

      return arr;
    },

    append : function(arr, item) {
      arr.push(item);
      
      return arr;
    },

    truncate : function(arr) {
      arr.pop();

      return arr;
    },

    prepend : function(arr, item) {
      arr.unshift(item);

      return arr;
    },

    curtail : function(arr) {
      arr.shift();

      return arr;
    },

    concat : function(arr1, arr2) {
      return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
      arr.splice(index, 0, item);

      return arr;
    },

    count : function(arr, item) {
      var count = 0;
      
      for (var i=0, l=arr.length;i<l;i++) {
        if (arr[i] === item) {
          count++;
        }
      }

      return count;
    },

    duplicates : function(arr) {
      var seen = {};
      var duplicates = [];

      for (var i = 0; i < arr.length; i++) {
        seen[arr[i]] = seen[arr[i]] ? seen[arr[i]] + 1 : 1;
      }

      for (var prop in seen) {
        if (seen.hasOwnProperty(prop) && seen[prop] > 1) {
          duplicates.push(prop);
        }
      }

      return duplicates;
    },

    square : function(arr) {
      var ret = [];

      // loop is much faster than map
      if (typeof Array.prototype.map === 'function') {
        ret = arr.map(function (value, index, array) {
          return value * value;
        });

        return ret;
      }

      for (var i = 0; i < arr.length; i++) {
        ret.push(arr[i]*arr[i]);
      }

      return ret;
    },

    findAllOccurrences : function(arr, target) {
      var ret = [];

      for (var i = 0, l = arr.length; i< l; i++) {
        if (target === arr[i]) {
          ret.push(i);
        }
      }

      return ret;
    }
  };
});
