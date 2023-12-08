const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema(
    {
        name: { 
            type: String, 
            required: true 
        },
        email: { 
            type: String, 
            unique: true, 
            required: true
         },
        password: { 
            type: String, 
            required: true 
        },
        isadmin:{
            type: Boolean, 
            require:true, 
            default:false
        }
        // phoneNumber: { type: String, required: false },
        // address:{type:String, required: true}
    },
    {
        timestamps: true
    }

);
module.exports = mongoose.model('User', userSchema);

