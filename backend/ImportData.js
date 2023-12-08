const express = require("express");
const User =require("./models/user.model")
const users = require ("./models/data/users")

const importData = express.Router()

importData.post("/user",async(req,res)=>{
    // await User.remove({})
    const importUser = await User.insertMany(users)
    res.send({importUser});
});

module.exports = importData; 