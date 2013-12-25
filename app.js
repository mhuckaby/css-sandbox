var connect = require('connect')
    , http = require('http');

var app = connect()
    .use(connect.logger('dev'))
    .use(connect.static('public'));

http.createServer(app).listen(54321);