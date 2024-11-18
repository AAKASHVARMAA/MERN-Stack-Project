const express=require("express")
const router=express.Router()
const User=require("../models/user.js")
const wrapAsync=require("../utils/wrapAsync.js")
const passport = require("passport");
const {saveRedirectUrl}=require("../middleware.js")
const userController=require("../controllers/users.js")

router.route("/signup")
.get(userController.renderSignupform)//signup form
.post(wrapAsync(userController.Signup))//signup 



router.route("/login")
.get(userController.renderLoginform)//get loginform
.post( saveRedirectUrl,
    passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }), 
    userController.login
)

router.get("/logout",userController.logout)//logout route
module.exports= router