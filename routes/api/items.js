
// This is where the get, post, and delete api routes will be
//  however, inorder for server.js to know where this is
//  need to create
//			const items = require ('./routes/api/items')
//  		app.use('/api/items', items)
// then comeback here to create the middleware


//Middleware function
const express = require('express');


// Router is part of the express object here
const router = express.Router();


// Bring in the Item Model so that we can do stuff like item.find or item.save
const Item = require('../../models/Item');


// @		GET api/items
// @desc	Get All Items
// @access	Public
// '/' parameter represents the api/items endpoint
router.get('/', (req, res) => {

	Item.find()
	 .sort({ date: -1} )
	 .then(items => res.json(items))

});


// @		POST api/items
// @desc	Create a Post
// @access	Public
// '/' parameter represents the api/items endpoint
router.post('/', (req, res) => {

	const newItem = new Item( {

		incidentID: 		 req.body.incidentID,
		incidentType:        req.body.incidentType,
		incidentAddress:     req.body.incidentAddress,
		incidentCoords:      req.body.incidentCoords,
		incidentDate:        req.body.incidentDate,
		incidentDescription: req.body.incidentDescription,
		incidentPictureURL:  req.body.incidentPictureURL,
		incidentStatus:      req.body.incidentStatus,
		managerNotes:        req.body.managerNotes,
		statusNotes:         req.body.statusNotes

	});

	newItem.save().then(item => res.json(item));


});




// Important - Export this so that other files can read what in here
module.exports = router;


