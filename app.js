//const http = require("http");
//const routes = require("./routes.js")

// express를부름
const path  = require("path")

const express = require("express");

const bodyParser = require("body-parser")

const app = express();

app.set("view engine","pug");
app.set("views","views")

const adminData = require("./routes/admin")

const shopRoutes = require("./routes/shop")


app.use(bodyParser.urlencoded({extended:false}));
// public 경로에 있는 css파일에 접근하기 위함
app.use(express.static(path.join(__dirname,"public")));

// 첫번째 인자 admin은 공통 루트라서 붙여줌
app.use("/admin", adminData.routes);
app.use(shopRoutes);

// Error 
app.use((req, res, next) => {

  res.status(404).render("404", {pageTitle: 'Page Not Found'})
})



// ①서버를 만들고
//const server = http.createServer(app);
// ②실행하는 메소드 port번호 적음
//server.listen(3000);
// ①，②전부 해결가능
app.listen(3003);

