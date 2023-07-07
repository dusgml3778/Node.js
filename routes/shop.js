const path = require("path");

const express = require("express");

const adminData = require("./admin")

const router = express.Router();

router.get('/', (req, res, next) => {
  const products = adminData.products;
  // 렌더링 할 페이지랑 그 페이지에 뿌릴 데이터(키값 prods로 전달해서 shop.pug에서 prods로 접근 가능)를 같이 넣어준다 
  res.render("shop", {prods:products});

})

module.exports = router;