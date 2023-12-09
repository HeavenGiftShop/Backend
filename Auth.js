import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../Models/users.js";


const protect = asyncHandler(async (req, res, next) => {
let token;
if(
req.headers.authorization &&
req.headers.authorization.startswith("Bearer")
){
// console.log("token Found");
try {
     token= reg.headers.authorization.split(" ")[1];
     const decoded = jwt.verify(token, process.env.JwT_SECRET);
     reg.user = await User.findById(decoded.id).select ("-password");
     next ();

}catch(error){
    console.error(error);
    res.status(401)
    throw new Error("Not authorized, token failed");

}

} 
if (!token) {
res.status (401);
throw new Error("Not authorized, no token");
}
});

export default protect;