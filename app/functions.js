if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
      return fn.apply(null, arr);
    },

    speak : function(fn, obj) {
      return fn.call(obj);
    },

    functionFunction : function(str) {
      return function (str2) {
        return str + ', ' + str2;
      };
    },

    makeClosures : function(arr, fn) {
      var funcs = [];

      function makeFunc (x) {
        return function () {
          return fn(x);
        };
      }

      for (var i = 0; i < arr.length; i++) {
        funcs.push(makeFunc(arr[i]));
      }

      return funcs;
    },

    partial : function(fn, str1, str2) {
      return function (str) {
        return fn(str1, str2, str);
      };
    },

    useArguments : function() {
      var arr = Array.prototype.slice.call(arguments);
      var ret = 0;

      for (var i = 0; i < arr.length; i++) {
        ret += arr[i];
      }

      return ret;
    },

    callIt : function(fn) {
      var args = Array.prototype.slice.call(arguments, 1);
      fn.apply(null, args);
    },

    partialUsingArguments : function(fn) {
      var args = Array.prototype.slice.call(arguments, 1);

      return function () {
        args = args.concat(Array.prototype.slice.call(arguments));
        return fn.apply(null, args);
      };
    },

    curryIt : function(fn) {
      var args = [];
      var length = fn.length;

      return function addArguments (arg) {
        args.push(arg);

        if (args.length < length) {
          return addArguments;
        } else {
          return fn.apply(null, args);
        }
      };
    }
  };
});
