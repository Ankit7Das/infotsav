import React, { Component } from 'react';
import './NoPayment.css';

class NoPayment extends Component {
	closeListen = () =>{
		var payAnn = document.getElementsByClassName('announcement')[0];
		var closeAnn = document.getElementsByClassName('close-ann')[0];

		closeAnn.addEventListener("click", function(){
		    payAnn.classList.remove('show-notif');
		});
	}
	componentDidMount(){
		this.closeListen();
	}
	render() {
				// <span>&nbsp; Announcement: Considering the requests from participants and campus ambassadors, the deadline for registrations has been extended to 01-Feb-19.</span>

		return(
		  	<div className="announcement show-notif">
		  		<span className="fas fa-exclamation-circle"></span>
						<span>&nbsp;Online Registrations has been closed !</span>
				<span className="close-ann fas fa-times"></span>
			</div>
		);
	}
}
export default NoPayment;