const mongoose = require('mongoose');
const { arrayBuffer } = require('stream/consumers');
const Schema = mongoose.Schema;

const reviewSchema = Schema({
    name:{
        type: String ,
        require: true,
    },
    rating: {
        type: Number,
        require:true,
    },
    comment: {
        type:String,
        require:true,
    },
    user : {
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:"User",
    }
});
const productSchema = new Schema(
    {
        name: {type: String, 
            required: true 
        },
        price:{
            type:number, 
            required:true
        },
        image:{ 
            type: Array, 
            required: true 
        },
        description: { 
            type: String, 
            required: false 
        },
        InStock:{ 
            type: Number, 
            required: true 
        },
        reviews:[reviewSchema],

    },
    {
        timestamps: true
    }

);
module.exports = mongoose.model("Product", productSchema);