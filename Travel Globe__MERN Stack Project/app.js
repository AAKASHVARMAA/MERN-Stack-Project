

const express=require("express")
const app=express()
const mongoose = require('mongoose');

const list=require("./models/listing.js")
const methodOverride=require("method-override")
const ejsMate=require("ejs-mate")
const wrapAsync=require("./utils/wrapAsync.js")
const ExpressError=require("./utils/ExpressError.js")
const {listingSchema,reviewSchema}=require("./schema.js")
const review=require("./models/review.js")
const listingsRouter=require("./routes/listings.js")
const userRouter=require("./routes/user.js")
const reviewsRouter=require("./routes/reviews.js")
const session=require("express-session")
const flash=require("connect-flash");
const passport = require("passport");
const LocalStrategy=require("passport-local")
const User=require("./models/user.js")
                                                     
app.set("view engine","ejs")
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"))
app.engine('ejs', ejsMate);
app.use(express.static("public"))
const sessionOptions = {
   
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true
    }    
};
app.use(session(sessionOptions))
app.use(flash())
//passport
app.use(passport.initialize()) 
app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())





//db connection
main().then(()=>{
    console.log("connected!")
})
.catch((err)=>{
    console.log(err)
})
async function main() {
    await mongoose.connect(url);
  }
const port=3000
//flash middleware
app.use((req,res,next)=>
{
    res.locals.success=req.flash("success")
    res.locals.error=req.flash("error")
    res.locals.currUser=req.user
    next()
})

//listing Router
app.use("/listings",listingsRouter)
app.use("/listings/:id/review",reviewsRouter)
app.use("/",userRouter)





app.all("*",(req,res,next)=>
{
    next(new  ExpressError(404,"page not found"))
})

app.use((err,req,res,next)=>{
    let{statusCode=500,message="something went wrong"}=err
    res.status(statusCode).render("./listings/error.ejs",{message})
    //res.status(statusCode).send(message)
})
app.listen(port,()=>{
    console.log(`server started on port ${port}`)
})
app.get("/",(req,res)=>{
    res.send("route working")
}
)