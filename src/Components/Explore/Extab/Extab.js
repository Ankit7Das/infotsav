import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Extab.css';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';

class Extab extends Component {

  constructor(props){
    super(props);
    this.state={
    }
  }

  componentDidMount(){
  }

  componentWillUnmount(){
  }

  render() {
  	const event=this.props.eventDetails;
  	if(!event.eventHead)
  		event.eventHead='To be announced'
    if(!event.organizers)
      event.organizers='To be announced'
  	if(!event.description)
  		event.description='To be announced'  	
  	if(!event.prizes)
  		event.prizes='To be announced'  	
  	if(!event.rules)
  		event.rules='To be announced'
    return (
    	<div className='white tl tabs'>
        <Tabs defaultTab="one" className='tab-content mv2'>
          <TabList className='mv2'>
            <Tab tabFor="one">About</Tab>
            <Tab tabFor="two">Rules</Tab>
            <Tab tabFor="three">Register</Tab>
          </TabList>
          <TabPanel tabId="one">
            <div className='f3 underline b'>Description</div>
            <p className='eventDescription' dangerouslySetInnerHTML={{__html: event.description}}>
            </p>
            <div className='f3 underline b'>Prizes</div>

            <p className='eventPrizes' dangerouslySetInnerHTML={{__html: event.prizes}}>
            </p>
            <div className='f3 underline b'>Event Heads</div>

            <p className='eventHead' dangerouslySetInnerHTML={{__html: event.eventHead}}>
            </p>
            <div className='f3 underline b'>Event Organizers</div>

            <p className='eventHead' dangerouslySetInnerHTML={{__html: event.organizers}}>
            </p>
          </TabPanel>
          <TabPanel tabId="two">                
            <div className='f3 b underline'>Rules</div>
          	<div className='eventRules' dangerouslySetInnerHTML={{__html: event.rules}}>
          	</div>
          </TabPanel>
          <TabPanel tabId="three">
            <div className='f3 b underline'>Register shit goes here</div>
            <div className='f3 b underline'>Ho Oh Ho</div>
          </TabPanel>
        </Tabs>
    	</div>
    );
  }
}

export default Extab;
