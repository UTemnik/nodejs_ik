const http = require('http');
const fs = require('fs');

const delayFunc = ms => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), ms);
  })
}

const readFile = path => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data)
      }
    });
  })
}

const server = http.createServer(async (request, response) => {

  switch (request.url) {
    case '/about': {
      try {
        const data = await readFile('pages/about.html');
        response.write(data);
        response.end();
      } catch (e) {
        response.write('error');
        response.end();
      }
      break;
    }
    case '/home': {
      await delayFunc(3000);
      response.write('HOME');
      response.end();
      break;
    }
    default: {
      response.write('404 NOT FOUND');
      response.end();
      break;
    }
  }
});

server.listen(3003);
