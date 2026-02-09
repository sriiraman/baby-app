const http = require('http');

const server = http.createServer((req, res) => {
  res.end("Hello from Azure DevOps + Minikube 👶");
});

server.listen(3000);