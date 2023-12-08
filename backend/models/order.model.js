const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = Schema(
    {
        user : {
            type:mongoose.Schema.Types.ObjectId,
            require:true,
            ref:"User",
        },
        orderItems:[{
            name:{type:String,required:true},
            quantity:{type:Number, require:true},
            image: {type :String, required: true},
            price: {type:umber , required :true},
            product:{
                type: mongoose.Schema.Types.ObjectId,
                required:true,
                ref:"Product",
                },
            },
        ],
        shippingAddress:{
            address:{type : String,required:true},
        },
        paymentMethod:{
            type:String,
            required:true,
            default:"Paypal",

        },
        paymentResault:{
            id:{type:Sting},
            status:{type:String},
            email_address:{type:String},
        },
        shippingPrice:{
            type: Number,
            required:true,
            default:0.0, 
        },
        totalPrice:{
            type:Number,
            required:true,
            default:0.0,
        },
        isPaid:{
            type : boolean,
            required:true,
            default:false,
        },
        isDelivered:{
            type:Boolean,
            required:true,
            default:false,
        },
        deleveredAt:{type:Date},
    },
        // phoneNumber: { type: String, required: false },
        // address:{type:String, required: true}
    
    {
        timestamps: true
    }

);
module.exports = mongoose.model('Order', orderSchema);

