import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    stock:{
        type:Number,
        required:true,
    },
    status:{
        type:Boolean,
        required:true,
    },
})

export default mongoose.model("Product", ProductSchema);