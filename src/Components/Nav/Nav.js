import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';

class Nav extends Component {

  constructor(props){
    super(props);
    this.state={
    }
  }

  toggleNavView=()=>{
	    document.getElementById('menu').classList.toggle('shownav');
		document.getElementsByClassName('burgers')[0].classList.toggle('open');
  }

  clickOnSign=()=>{
  	this.toggleNavView();
  	this.props.logOut();
  }

  render() {
    return (
	   	<div className='main-nav-div'>
			<button className="burgers" onClick={this.toggleNavView} />
			<label aria-hidden="true" onClick={this.toggleNavView} id="labeel" />

			<nav id="menu" className='main-nav-nav'>
				<div className='white b f5 ma3 idonnav'>{this.props.userData.id}</div>
				<Link to="/" onClick={this.toggleNavView}>HOME</Link>
				<Link onClick={this.toggleNavView} to="/about">ABOUT</Link>
				<Link onClick={this.toggleNavView} to="/events">EVENTS</Link>
				{(!this.props.isLoggedIn)?
					<Link onClick={this.toggleNavView} to="/register">REGISTER</Link>
				:
					<Link onClick={this.toggleNavView} to="/profile">PROFILE</Link>
				}
				{(!this.props.isLoggedIn)?
					<Link onClick={this.toggleNavView} to="/login">LOGIN</Link>
				:
					<Link onClick={this.clickOnSign} to='/login'>LOGOUT</Link>
				}
				<Link onClick={this.toggleNavView} to="/team">OUR TEAM</Link>

			</nav>
		</div>
    );
  }
}

export default Nav;
