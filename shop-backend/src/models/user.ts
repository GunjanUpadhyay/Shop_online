import mongoose from "mongoose";

const schema= new mongoose.Schema(
    {
        _id: {
            type:String,
            requried:[true ,"Pl"]
        }
    },
    {
        timestamps:true,
    }
);

export const User= mongoose.model("User",schema);