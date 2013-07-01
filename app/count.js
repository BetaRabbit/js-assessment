if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
      var timer;

      function doCount () {
        console.log(start++);

        if (start <= end) {
         timer = setTimeout(doCount, 100);
        }
      }

      doCount();

      return {
        cancel: function () {
          if (timer) {
            clearTimeout(timer);
          }
        }
      };
    }
  };
});