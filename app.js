const http = require("http");
const routes = require("./routes.js")

// 서버를 만들고
const server = http.createServer(routes);

// 실행하는 메소드 port번호 적음
server.listen(3000);
