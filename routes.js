  const fs = require("fs");


  const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;

    if (url === "/") {

      res.write("<html>");
      res.write("<head><title>Enter Message</title></head>");
      res.write("<body><form action='/message' method='POST'><input type = 'text' name='message'><button type ='submit'>Send</button></form></body>")
      res.write("</html>");
      // 리턴 안적어주면 밑에 코드가 실행되서 오류가 남 
      return res.end();

    }

    if (url === "/message" && method === 'POST') {

      const body = [];
      req.on("data", (chunck) => {

        console.log(chunck)
        body.push(chunck);

      });

      return req.on("end", () => {
        const parsebody = Buffer.concat(body).toString();
        const message = parsebody.split("=")[1];
        fs.writeFile("message.txt", message, err => {

          res.statusCode = 302;
          res.setHeader("Location", "/");
          return res.end();

        });

      })


    }

    //브라우저에게 html코드라는것을 알려주지 않으면 모른다
    res.setHeader("Context-Type", "text/html")
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write("<body><h1>Test</h1></body>")
    res.write("</html>");
    res.end();

  };

  // 위에서 선언한 함수를 모듈로 내보낸다
  module.exports = requestHandler;