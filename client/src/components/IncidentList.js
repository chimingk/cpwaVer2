import React, { Component } from 'react';
import { Container , ListGroup, ListGroupItem, ListGroupItemHeading, Button, Row, Col } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';



class IncidentList extends Component {

	state = {
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
	}


	render() {
		const { items } = this.state;

		return(
			<Container>
			
				<Button
					color="dark"
					style={{marginBottom: '2rem'}}
					onClick = { () => {

							const incidentType = prompt('Enter type of incident');
							const incidentDate = prompt('Date in YYYYMMDD');
							const incidentAddress = prompt('Address of incident');
							// If the incidentType is not empty, then there is a
							//  a public works issue to report

							if(incidentType) {
								
								this.setState(state => ({
										items:	[	{
										        		incidentID: uuid(),
														incidentDate: incidentDate,
										        		incidentStatus: 'Reported',
													    incidentType,
										        		incidentAddress: incidentAddress,
										        		incidentCoords: '29.648463, -82.340583',
										        		incidentDescription: 'There is a pothole',
										        		incidentPictureURL: 'https://raw.githubusercontent.com/chimingk/cpwaVer2/master/client/public/pothole.png',
										        		managerNotes: '',
										        		statusNotes: '' }, ...state.items
										]
									}
								));
							}
						}

					}
				>Add Incident
				</Button>
			

				<h3 align = "center"> Current Public Work Cases </h3>


				<ListGroup>

					<TransitionGroup className="incident-list">

						{ items.map( ({ incidentID, incidentDate, incidentStatus,
						               incidentType, incidentAddress, incidentCoords,
						               incidentDescription, incidentPictureURL, managerNotes,
						               statusNotes }) => (
						               
						               <CSSTransition key={incidentID} timeout={1000} classNames="fade">

						               	<ListGroupItem>

						               		<Row>
						               			<Col><ListGroupItemHeading>Issue Type: {incidentType}</ListGroupItemHeading></Col>
						               			
						               			<Col align="right">
												<Button
													className = "remove-btn"
						               				outline color = "danger"
						               				size = "xs"

						               				onClick={ () => {
						               					this.setState(state => ({
						               						items: state.items.filter(item => item.incidentID !== incidentID)
						               					}));
						               				}}
						               			> Delete
												</Button>
												</Col>
											</Row>
						               			
					               			
						               			<a href={incidentPictureURL} target="_new">Picture</a> <br/>
						               			Status: {incidentStatus} <br/>
						               			Location: {incidentAddress} <br/>
						               			Description: {incidentDescription} <br/>
						               			Latest update: {statusNotes} <br/>
						                   		
						               	</ListGroupItem>

						               </CSSTransition>
						)) }

					</TransitionGroup>

				</ListGroup>


			</Container>
		);
	}
}

export default IncidentList;