const mongoose = require("mongoose");
const Schema =mongoose.Schema;

const ListingSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    description:String,
    image:{
        type:String,
        default:"https://unsplash.com/photos/a-lighthouse-on-top-of-a-rocky-hill-PhLFO0QRJRg",
        set:(v)=>v===""?"https://unsplash.com/photos/a-lighthouse-on-top-of-a-rocky-hill-PhLFO0QRJRg":v,
    },
    price:Number,
    location:String,
    country:String,

});

const Listing = mongoose.model("Listing",ListingSchema);
module.exports=Listing;