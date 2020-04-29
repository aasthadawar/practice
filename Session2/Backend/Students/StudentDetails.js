const http = require('http');
const url = require('url');

// function to handle request response operations
const handleRequestResponse = (request, response) => {
  let route = url.parse(request.url).pathname;
  let method = request.method;
  let queryString = url.parse(request.url, true).query.branch;

  // for the students route
  if (route === '/students') {
    if (method === 'GET') {
      const studentsArray = require('./StudentsObject');
      response.setHeader('Access-Control-Allow-Origin', '*');
      if (queryString === undefined) {
        var arr = studentsArray;
      } else {
        var arr = studentsArray.filter((items) =>
          items.branch.toLowerCase().includes(queryString),
        );
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

server.listen(process.env.PORT || 7890, () => {
  console.log('server start');
});
