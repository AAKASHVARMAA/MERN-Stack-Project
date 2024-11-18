const express=require("express")
const router=express.Router()
const wrapAsync=require("../utils/wrapAsync.js")
const list=require("../models/listing.js")
const {isLoggedIn,isOwner,validateListing}=require("../middleware.js")
const listingController=require("../controllers/listings.js")
const multer  = require('multer')
const {storage}=require("../cloudconfig.js")
const upload = multer({ storage })

router
.route("/")
.get(wrapAsync(listingController.index))//index Route
.post(
    isLoggedIn,
    upload.single('listing[image]'),
    validateListing,
    wrapAsync(listingController.createListing)
    )//create route(post) 


router.get("/new",isLoggedIn,listingController.renderNewform)//new route

router.route("/:id")
.get(wrapAsync(listingController.showListing))//show route
.put(
    isLoggedIn,
    isOwner,
    upload.single('listing[image]'),
    validateListing, 
    wrapAsync(listingController.updateListing)
)//update.route
.delete(isLoggedIn,isOwner,wrapAsync(listingController.deleteListing))//delete Route
   

router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingController.renderEditform))//edit route

module.exports= router