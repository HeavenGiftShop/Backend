import  express  from "express";
import asyncHandler from "express-async-handler";
import protect from "../MiddleWar/Auth.js";
import User from "../Models/user.model.js";
import TokenOrNot from "../Token/TokenOrNot.js";
const users = express.Router();


//login API
users.post(
"/SignIn",
asyncHandler(async (req , res)  => {

   const {email , password } = req.body;
   const user = await User.findOne({ email });

   if(user && (await user.matchPassword(password))){
      res.json({
        id:    user.id,
        name:  user.name,
        email: user.isadmain,
        token: TokenOrNot(user.id),
        createdAt : user.createdAt,

      });
   }else{
          res.status(401);
          throw new Error("Invalid Email or Passwored");
        }

})

);

//Profile API
users.get(
    "/profile",
    protect,
    asyncHandler(async (req , res)  => {
 const user = await User.findById(req.user.id)
    if(user){
     res.json({
        id:    user.id,
        name:  user.name,
        email: user.isadmain,
        createdAt : user.createdAt,
     })
    }else {
           res.status(404);
           throw new Error ("User not found ");

    }
        })
);

// REGISTER API
users.post(
    "/SignUp",
    protect,
    asyncHandler(async (req , res)  => {
        const {name ,email , password } = req.body;
        const userExist = await User.findOne({ email });
        
        if(userExist){
            res.status(402)
            throw new Error ("User already exist");
        }
        const user = await User.create({
            name, email, password, });
            if (user) {
            res.status (201).json({
                id: user.id,
                name: user. name, 
                email: user.email, 
                isadmin: user.isadmin,
                token: TokenOrNot(user.id),
            });
        }else{
            res.status (400)
            throw new Error ("Invalid")


        }})
);






export default UsersRoute;