// Require mongoose
const mongoose = require('mongoose');

// Template schema
const Schema = mongoose.Schema;


// Create the Schema
const ItemSchema = new Schema( {

	incidentID:            { type: String, required: false  },
	incidentType:          { type: String, required: true   },
	incidentAddress:       { type: String, required: false  },
	incidentCoords:        { type: String, required: true   },
	incidentDate:          { type: Date,   required: true,  default: Date.now},
	incidentDescription:   { type: String, required: false	},
	incidentPictureURL:    { type: String, required: false 	},
	incidentStatus:        { type: String, required: true,  default: 'Reported'},
	managerNotes:          { type: String, required: false, },
	statusNotes:           { type: String, required: false  }

});


// Export this model so that we can bring it into other files
module.exports = Item = mongoose.model('item', ItemSchema);
