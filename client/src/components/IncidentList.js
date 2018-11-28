import React, { Component } from 'react';
import { Container , ListGroup, ListGroupItem, ListGroupItemHeading, Button, Row, Col } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions';
import PropTypes from 'prop-types';



class IncidentList extends Component {


  componentDidMount() {
    this.props.getItems();
  }




	render() {
		
		const { items } = this.props.item;


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


IncidentList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { getItems }
)(IncidentList);