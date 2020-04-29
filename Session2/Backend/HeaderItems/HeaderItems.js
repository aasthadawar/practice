const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const handleRequestResponse = (request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
  let route = url.parse(request.url).pathname;
  let method = request.method;
  let fullPath;

  //route for home page
  if (route === '/home') {
    if (method === 'GET') {
      let relativePath = '/public/Home.html';
      fullPath = path.join(__dirname, relativePath);
    } else {
      response.end('wrong method');
    }
  }

  // route for about page
  else if (route === '/about') {
    if (method === 'GET') {
      let relativePath = '/public/About.html';
      fullPath = path.join(__dirname, relativePath);
    } else {
      response.end('wrong method');
    }
  }

  //route for contact page
  else if (route === '/contact') {
    if (method === 'GET') {
      let relativePath = '/public/Contact.html';
      fullPath = path.join(__dirname, relativePath);
    } else {
      response.end('wrong method');
    }
  } else {
    response.end('wrong url');
  }

  fs.readFile(fullPath, (err, content) => {
    if (err) {
      response.end(err);
    } else {
      response.write(content);
      response.end();
    }
  });
};

const server = http.createServer(handleRequestResponse);

server.listen(process.env.PORT || 2345, () => {
  console.log('server start');
});
