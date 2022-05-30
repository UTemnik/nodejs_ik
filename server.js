const http = require('http');

const server = http.createServer((request, response) => {

  switch (request.url) {
    case '/students':
      response.write('students');
      break;
    case '/teachers':
      response.write('teachers');
      break;
    default:
      response.write('404 NOT FOUND');
      break;
  }

  response.end();
});

server.listen(3003);
