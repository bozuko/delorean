var express = require('express');

// app is global so it can be used by routes
app = express.createServer();

app.configure(function() {
  app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
  app.use(express.bodyParser());
  app.use(express.cookieParser());
  var RedisStore = require('connect-redis')(express);
  app.use(express.session({ secret: 'holymacronaxla;222cvda}acdx2234;', store: new RedisStore }));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
  app.set('view engine', 'jade');
  app.set('view options', {layout: false});
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

var routes = require('./lib/routes');

app.listen(2100);
console.log('Delorean listening on port 2100');
