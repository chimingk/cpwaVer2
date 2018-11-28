import uuid from 'uuid';
import {GET_ITEMS, ADD_ITEM, DELETE_ITEM} from '../actions/types';

const initialState = {
	items: [

			{
        			incidentID: uuid(),
        			incidentDate: '20181121',
        			incidentStatus: 'Reported',
			        incidentType: 'R',
        			incidentAddress: 'Agricultural Building 1',
        			incidentCoords: '29.648463, -82.340583',
        			incidentDescription: 'There is a pothole',
        			incidentPictureURL: 'https://raw.githubusercontent.com/chimingk/cpwaVer2/master/client/public/pothole.png',
        			managerNotes: '',
        			statusNotes: 'Will be fixed by Tuesday' } ,
			{
        			incidentID: uuid(),
				    incidentDate: '20181123',
        			incidentStatus: 'Reported',
			        incidentType: 'R',
        			incidentAddress: 'Engineering Building 2',
        			incidentCoords: '29.648463, -82.340583',
        			incidentDescription: 'There is a pothole',
        			incidentPictureURL: 'https://raw.githubusercontent.com/chimingk/cpwaVer2/master/client/public/pothole.png',
        			managerNotes: '',
        			statusNotes: 'Crew is on site fixing issue' } ,
			{
        			incidentID: uuid(),
				    incidentDate: '20181125',
        			incidentStatus: 'Reported',
			        incidentType: 'R',
        			incidentAddress: 'Liberal Arts Building 3',
        			incidentCoords: '29.648463, -82.340583',
        			incidentDescription: 'There is a pothole',
        			incidentPictureURL: 'https://raw.githubusercontent.com/chimingk/cpwaVer2/master/client/public/pothole.png',
        			managerNotes: '',
        			statusNotes: 'Assigned to manager' } ,
			{
        			incidentID: uuid(),
				    incidentDate: '20181127',
        			incidentStatus: 'Reported',
			        incidentType: 'R',
        			incidentAddress: 'Medical Center 4',
        			incidentCoords: '29.648463, -82.340583',
        			incidentDescription: 'There is a pothole',
        			incidentPictureURL: 'https://raw.githubusercontent.com/chimingk/cpwaVer2/master/client/public/pothole.png',
        			managerNotes: '',
        			statusNotes: 'Under review' }
	]
};


export default function(state = initialState, action){
	switch(action.type) {
		case GET_ITEMS:
			return {...state};
		default:
			return state;
	}
}