const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");
const listingController = require("../controllers/listings.js")
const multer = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({storage});

//Index Route - app.get -> router.get
// app.get("/listings", wrapAsync(async (req, res) => {
//     const allListings = await Listing.find({});
//     res.render("listings/index.ejs", { allListings });
// }));
router
    .route("/")
    .get(wrapAsync(listingController.index)) //Index Route
    .post(isLoggedIn, upload.single("listing[image]"), validateListing, wrapAsync(listingController.createListing)); //Create Route

//New Route
router.get("/new", isLoggedIn, listingController.renderNewForms);

router
    .route("/:id")
    .get(wrapAsync(listingController.showListings)) //Show Route
    .put(isLoggedIn, isOwner, validateListing, wrapAsync(listingController.updateListing)) //Update Route
    .delete(isLoggedIn, wrapAsync(listingController.destroyListing)); //Delete Route

//Edit Route
router.get("/:id/edit", isLoggedIn, wrapAsync(listingController.renderEditForm));  

module.exports = router;