const express = require("express");
const User =require("./models/user.model")
const product =require("./models/gift.model")
const users = require ("./models/data/users.js");
const products = require("./models/data/products");
const asyncHandler = require("express-async-handler")
const importData = express.Router()

// console.log(users)
importData.post("/user",async(req,res)=>{
    // await User.remove({}) 
    // console.log(users)
    const importUser = await User.insertMany(users)
    // console.log("xxxxx")
    res.send({importUser});
});



importData.post("/products",asyncHandler(async(req,res)=>{
    await product.remove({})
    const importProduct = await product.insertMany(products)
    res.send({importProduct});
}));

module.exports = importData; 