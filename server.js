var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var request = require('request');
/*var Customer = require('./Customer/Customer.controller');*/
app.use(bodyParser.json());
app.set('port', (process.env.PORT || 3000));
app.use('/', express.static(__dirname + '/build'));
/*app.use('/api/customer', Customer);*/
app.get('/werewolfMovie', function (req, res) {
  request('https://api.themoviedb.org/3/search/movie?api_key=2c8889cb44ec3da352062419180957cf&language=en-US&query=werewolf&page=1&certification_country=US&certification.lte=PG13&include_adult=false&region=werewolf&year=>1960',
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body); 
        console.log('The werewolf movie array');
        res.send({ success: true, content: body})
      } else {
        res.send({ success: false, message: "Unable to get request - received status code: " + response.statusCode})
      }
    })
});
app.listen(app.get('port'), function () {
  console.log('Example app listening on port ' + app.get('port') + '!');
});


