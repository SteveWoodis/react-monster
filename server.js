/* global process */
var express = require('express');
var bodyParser = require('body-parser');
/*var Customer = './Customer/Customer.controller';*/
var app = express();
app.use(bodyParser.json());
app.set('port', (process.env.PORT || 3000));
app.use('/',express.static(__dirname + '/src'));
/*app.use('/api/customer', Customer);*/

new 
app.listen(app.get('port'), () => {
  console.log('Example app listening on port ' + app.get('port') + '!');
});
