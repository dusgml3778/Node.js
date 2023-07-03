//const http = require("http");
//const routes = require("./routes.js")

// express를부름
const express = require("express");

const bodyParser = require("body-parser")

const app = express();

const adminRoutes = require("./routes/admin")

const shopRoutes = require("./routes/shop")


app.use(bodyParser.urlencoded({extended:false}));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

// Error 
app.use("/",(req,res,next) => {

  res.status(404).send("<h1>Page Not Found</h1>")
})

// ①서버를 만들고
//const server = http.createServer(app);
// ②실행하는 메소드 port번호 적음
//server.listen(3000);
// ①，②전부 해결가능
app.listen(3003);

