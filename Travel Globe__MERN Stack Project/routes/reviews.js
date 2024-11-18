const express=require("express")
const router=express.Router({mergeParams:true})
const wrapAsync=require("../utils/wrapAsync.js")
const reviewController=require("../controllers/reviews.js")
const {validateReview,isLoggedIn,isAuthor}=require("../middleware.js")


//post-review's route
router.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.createReview))
    
//delete Review
 router.delete("/:reviewId",isLoggedIn,isAuthor,reviewController.destroyReview)

    module.exports= router