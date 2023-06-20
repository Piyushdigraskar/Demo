const http = require('http')

const { buffer } = require('stream/consumers');

const route = require('./route')

const server = http.createServer(route);
//  for second cases in module.exports we have to give:
//  const server = http.createServer(route.handler);


server.listen(3000)