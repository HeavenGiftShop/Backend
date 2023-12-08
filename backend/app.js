// const bcrypt = require("bcrypt")
const express = require("express")
const mongoose = require('mongoose')
const User = require('./models/user.model')
const dotenv =require('dotenv');
const importData = require("./ImportData");

const mongouri = "mongodb://localhost:27017/FinalProject";

// app service 
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))


// app.get ("/Gifts",(req,res)=>{
//     res.json(Gifts);
// });

// app.get("/Gifts?:id",(req,res)=>{
//     const Gift =Gifts.find((g)=>g.id == req.params.id);
//     res.json(products);
// });

app.get("/",(req,res)=>{
    res.send("api is empty");
});

// app.post('/login',(req,res)=>{

//     const{email,password} = req.body;
//     userSchema.findone({email:email})
//     .then(user=>{
//         if(user){
//             if(user.password === password){
//                 res.json("success");
//             }else {
//                 res.json("incorrect password or email")
//             }

//         }else {
//             res.json("incorrect password or email")
//         }
//     })

// })

app.use("/api/import", importData);

// app.post('/signup',(req,res)=>{
        
//     User.create(req.body)
//     .then(Users=>res.json(Users))
//     .catch(err=>res.json(err))
// });

const PORT = process.env.PORT || 1000
// app.listen(PORT,()=>{
//     console.log("in server");
// })


mongoose.set("strictQuery", false)
mongoose
.connect('mongodb://127.0.0.1:27017/FinalProject')
.then(() => {
    console.log('connected to MongoDB')
    //listen on specific port 
    app.listen(PORT, () => console.log(`app started on port ${PORT}`))
}).catch((error) => {
    console.log('cant connect to mongodb'+error)
})