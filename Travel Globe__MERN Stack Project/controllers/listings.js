const list=require("../models/listing.js")
module.exports.index=async (req,res)=>
    {
      const allListings=await list.find({})
       res.render("./listings/index.ejs",{allListings})
    }

module.exports.renderNewform=  (req,res)=>
        {
           
            res.render("./listings/new.ejs")
        }
module.exports.showListing=(async (req,res)=>
    {
        let{id}=req.params
        const listing = await list.findById(id).populate({ path: 'review', populate: { path: 'author' } }).populate('owner');
        if(!listing){
            req.flash("error" ,"The listing  you searched for doesn't exist")
            return res.redirect("/listings")
        }
        res.render("./listings/show.ejs",{listing})
    })


 module.exports.createListing =  async(req,res,next)=>

        {     
                let url=req.file.path
                let filename=req.file.filename
                const newlisting= new list(req.body.listing)
                newlisting.owner=req.user._id
                newlisting.image={url,filename}
                await newlisting.save()
                req.flash("success" ,"New Listing Created")
                res.redirect("/listings")
            
        }

module.exports.renderEditform= async(req,res)=>
            {
                    let {id}=req.params
                    let listing =await list.findById(id)
                    if(!listing){
                        req.flash("error" ,"The listing  you tried to edit doesn't exist")
                      return res.redirect("/listings")
                    }
                    let originalimageURL=listing.image.url
                    originalimageURL= originalimageURL.replace("/upload","/upload/w_250")
                    res.render("./listings/edit.ejs",{listing,originalimageURL})
            }


module.exports.updateListing=async(req,res)=>
                {
                    
                    let {id}=req.params
                       let listing= await list.findByIdAndUpdate(id,{...req.body.listing})
                       if(typeof req.file!=="undefined")
                       {
                        let url=req.file.path
                        let filename=req.file.filename
                        listing.image={url,filename}
                        await listing.save()
                       }
                        req.flash("success" ,"Listing Updated")
                        res.redirect(`/listings/${id}`)
                }

 module.exports.deleteListing= async (req,res)=>
                    {
                        let{id}=req.params
                        let deleted=await list.findByIdAndDelete(id)
                        req.flash("success" ,"Listing Deleted")
                        res.redirect("/listings")
                    
                    }