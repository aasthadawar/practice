const http = require('http');
const url = require('url');

// function to handle request response operations
const handleRequestResponse = (request, response) => {
  let route = url.parse(request.url).pathname;
  let method = request.method;
  let queryString = url.parse(request.url, true).query.userid;

  // for users route
  if (route === '/users') {
    if (method === 'GET') {
      const usersObject = require('./UserObject');
      response.setHeader('Access-Control-Allow-Origin', '*');
      if (queryString != undefined) {
        var arr = usersObject.users.filter((items) =>
          items.username.toLowerCase().includes(queryString),
        );
      } else {
        var arr = usersObject.users;
      }
      response.end(JSON.stringify(arr));
    } else {
      response.end('wrong method');
    }
  } else {
    response.end('wrong url');
  }
};

const server = http.createServer(handleRequestResponse);

server.listen(process.env.PORT || 4567, () => {
  console.log('server start');
});
