// Require mongoose
const mongoose = require('mongoose');

// Template schema
const Schema = mongoose.Schema;


// Just getting the date without time
var dateEntered = new Date(Date.now());
var yyyy = dateEntered.getFullYear().toString();
var mm = ( dateEntered.getMonth() + 1 ) .toString();
var dd = dateEntered.getDate().toString();
var yyyymmdd = (yyyy.concat(mm).concat(dd));



// Create the Schema
const ItemSchema = new Schema( {

	incidentID:            { type: String, required: false },
	incidentType:          { type: String, required: true   },
	incidentAddress:       { type: String, required: false  },
	incidentCoords:        { type: String, required: true   },
	incidentDate:          { type: String, required: true,  default: yyyymmdd },
	incidentDescription:   { type: String, required: false	},
	incidentPictureURL:    { type: String, required: false 	},
	incidentStatus:        { type: String, required: true,  default: 'Reported'},
	managerNotes:          { type: String, required: false, },
	statusNotes:           { type: String, required: false  }

});


// Export this model so that we can bring it into other files
module.exports = Item = mongoose.model('item', ItemSchema);
