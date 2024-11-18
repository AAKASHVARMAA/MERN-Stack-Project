const mongoose = require('mongoose');
const schema =  mongoose.Schema 
const review=require("./review.js");
const { string } = require('joi');

  const listingSchema = new schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    image: {
        url:String,
        filename:String
      },
    price:{
        type:Number
    },
   
    country:{
        type:String
    },
    location:{
      type:String
  },
  review:[
    {
      type:schema.Types.ObjectId,
      ref:"Review"
    }
  ],
  owner:{
    type:schema.Types.ObjectId,
    ref:"User"
  }
})
listingSchema.post("findOneAndDelete",async(listing)=>{

    if(listing){
        await review.deleteMany({_id:{$in:listing.review}})
    }
})
const list=mongoose.model("list",listingSchema)
module.exports=list