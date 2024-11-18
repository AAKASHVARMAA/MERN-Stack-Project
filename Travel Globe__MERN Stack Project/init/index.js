const mongoose = require('mongoose');
const initdata=require("./data.js")
const list=require("../models/listing.js")
main().then(()=>{
    console.log("connected!")
})
.catch((err)=>{
    console.log(err)
})
async function main() {
    await mongoose.connect(url);
 }
 const intdb= async()=>
 {
    await list.deleteMany({}),
    await list.insertMany(initdata.data)
    console.log("data was intialised")
 }
 intdb()