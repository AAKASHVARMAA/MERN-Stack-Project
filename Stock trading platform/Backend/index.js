require("dotenv").config()

const express= require("express")
const mongoose=require("mongoose")

const {HoldingModel}= require("./Models/HoldingModel")
const {PositionsModel}=require("./Models/PositionsModel")
const {OrdersModel}=require("./Models/OrdersModel")

const cors=require("cors")
const bodyParser=require("body-parser")

const url=process.env.MONGO_URL

app=express()
mongoose.connect(url)
console.log("Database connected")

app.use(cors())
app.use(bodyParser.json())

let port=3000
app.listen(port,()=>
{
    console.log("App started")
   
})

app.get("/allholdings", async (req, res) => {
  
      let allholdings = await HoldingModel.find({});
      res.json(allholdings);
  
});

app.get("/allpositions", async (req, res) => {
  
  let allpositions = await PositionsModel.find({});
  res.json(allpositions);
});


app.post("/newOrder", async(req,res)=>
{
  let newOrder= new  OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  })

  newOrder.save()
})










