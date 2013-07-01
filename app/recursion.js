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

    }
  };
});
