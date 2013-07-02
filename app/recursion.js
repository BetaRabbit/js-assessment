if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
      var result = [];
      var foundSub = false;

      function list (data) {
        if (dirName && dirName === data.dir) {
          foundSub = true;
        }

        for (var i = 0; i < data.files.length; i++) {
          if (data.files[i].dir) {
            list(data.files[i]);
          } else if (foundSub || !dirName) {
            result.push(data.files[i]);
          }
        }

        foundSub = false;
      }

      list(data, result);
      
      return result;
    },

    permute: function(arr) {
      var result = [];
      var temp = [];

      function p (arr) {
        for (var i = 0; i < arr.length; i++) {
          var element = arr.splice(i, 1)[0];

          temp.push(element);
          if (arr.length === 0) {
            result.push(temp.slice());
          }

          p(arr);
          arr.splice(i, 0, element);
          temp.pop();
        }

        return result;
      }

      return p(arr);
    }
  };
});
