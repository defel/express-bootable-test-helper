var app = new Object();

app.routes = {
  'get': {},
  'post': {},
  'put': {},
  'delete': {}
}

app.get = function(path, handler) {
  app.routes['get'][path] = handler;
}

app.post = function(path, handler) {
  app.routes['post'][path] = handler;
}

app.put = function(path, handler) {
  app.routes['put'][path] = handler;
}

app['delete'] = function(path, handler) {
  app.routes['delete'][path] = handler;
}

module.exports = app;
