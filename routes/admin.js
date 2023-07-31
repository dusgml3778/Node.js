// use함수를 통해 새로운 미들웨어 추가 가능
// app.use((req,res,next) => {

//     console.log("In the middleware");
//     // 다음 미들웨어를 동작시키려면 next를 써줘야한다
//     next();
// });

const path = require("path");

const express = require("express")

const router = express.Router();

const products = [];

// Get
router.get('/add-product', (req, res, nex) => {
  // 응답을 보내기도 함 
  res.render("add-product", {pageTitle : "Add Product", path:"/admin/add-product"})
});

// post를 써줌으로써 post요청에만 반응하도록 할 수 있다 반대로 get도 가능
router.post('/add-product', (req, res, next) => {

  products.push({title:req.body.title})
  res.redirect('/')

})

exports.routes = router;
exports.products = products

