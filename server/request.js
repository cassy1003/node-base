
var request = require('request');

exports.get = function(req, res) {
  params = req.query;
  url = '';
  request(
    url,
    function(error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
        return body
      }
    }
  );
}
