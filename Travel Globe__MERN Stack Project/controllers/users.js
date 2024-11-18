const User=require("../models/user.js")
module.exports.renderSignupform=(req,res)=>
    {
        res.render("users/signup.ejs")
    }
module.exports.Signup=async(req,res)=>{
    try{
        let{username,email,password}=req.body
    let newUser=User({username,email})
    const registereduser= await User.register(newUser,password)
    req.login(registereduser,(err)=>
    {
        if(err)
        {
            return  next(err)
        }
        req.flash("success", "Welcome to Travel GLobe!!")
        res.redirect("/listings")
    }) 
    }
    catch(err)
    {
        req.flash("error",err.message)
        res.redirect("/signup")
    }
    
}

module.exports.renderLoginform=(req,res)=>
    {
        res.render("users/login.ejs")
    }

    module.exports.login=   async (req, res) => {  
        req.flash("success","Welcome back to Travel Globe!!")
        let redirecturl =res.locals.redirectUrl||"/listings"
        res.redirect(redirecturl)
    }

    module.exports.logout=  (req,res,next)=>
        {
            req.logout((err)=>
            {
                if(err)
                req.flash("success","logged you out")
                res.redirect("/listings")
            })
        
        }