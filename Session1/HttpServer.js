const http = require('http');

const handleRequestResponse = (request, response) => {
  console.log('request accepted',request.url);
  response.write('hello');
  response.end();
};

const server = http.createServer(handleRequestResponse);

server.listen(process.env.PORT || 1234, () => {
  console.log('server started');
});
