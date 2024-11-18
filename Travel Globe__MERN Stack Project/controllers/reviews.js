const review=require("../models/review.js")
const list=require("../models/listing.js")
module.exports.createReview=async (req,res)=>
    {
        let listing=await list.findById(req.params.id)
        let newReview= new review(req.body.review)
        newReview.author=req.user._id
         listing.review.push(newReview)
        await newReview.save()
        await listing.save()
        req.flash("success" ,"Review Added")
    
        console.log("Review saved")
        res.redirect(`/listings/${listing._id}`)
    }

 module.exports.destroyReview  = async(req,res)=>
        {
            let{id,reviewId}=req.params
            await list.findByIdAndUpdate(id,{$pull:{review:reviewId}})
            await review.findByIdAndDelete(reviewId)
            req.flash("success" ,"Review Deleted")
            res.redirect(`/listings/${id}`)
        }