import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import EmtList from './EmtList';
import CoordList from './CoordList';
import TMList from './TMList';
import Mob_WebList from './Mob_WebList';
import PC_WebList from './PC_WebList';
import {emts,coord,TMheads, Mob_WebTeam, PC_WebTeam} from './Data';
// import {parallax} from './Contact_parallax.js';
import './team.css'

class Team extends Component {

	componentDidMount() {
		// parallax();
		    // ------------- VARIABLES ------------- //
	    let ticking = false;
	    let isFirefox = (/Firefox/i.test(navigator.userAgent));
	    let isIe = (/MSIE/i.test(navigator.userAgent)) || (/Trident.*rv\:11\./i.test(navigator.userAgent));
	    let scrollSensitivitySetting = 30; //Increase/decrease this number to change sensitivity to trackpad gestures (up = less sensitive; down = more sensitive) 
	    let slideDurationSetting = 600; //Amount of time for which slide is "locked"
	    let currentSlideNumber = 0;
	    let totalSlideNumber = document.getElementsByClassName("background").length;

	  // ------------- DETERMINE DELTA/SCROLL DIRECTION ------------- //
	  this.parallaxScroll= (evt) => {
	    var delta;
	    if (isFirefox) {
	      //Set delta for Firefox
	      delta = evt.detail * (-120);
	    } else if (isIe) {
	      //Set delta for IE
	      delta = -evt.deltaY;
	    } else {
	      //Set delta for all other browsers
	      delta = evt.wheelDelta;
	    }

	    if (ticking != true) {
	      if (delta <= -scrollSensitivitySetting) {
	        //Down scroll
	        ticking = true;
	        if (currentSlideNumber !== totalSlideNumber - 1) {
	          currentSlideNumber++;
	          nextItem();
	        }
	        slideDurationTimeout(slideDurationSetting);
	      }
	      if (delta >= scrollSensitivitySetting) {
	        //Up scroll
	        ticking = true;
	        if (currentSlideNumber !== 0) {
	          currentSlideNumber--;
	        }
	        previousItem();
	        slideDurationTimeout(slideDurationSetting);
	      }
	    }
	  }

	  // ------------- SET TIMEOUT TO TEMPORARILY "LOCK" SLIDES ------------- //
	  function slideDurationTimeout(slideDuration) {
	    setTimeout(function() {
	      ticking = false;
	    }, slideDuration);
	  }

	  // ------------- ADD EVENT LISTENER ------------- //
	  this.mousewheelEvent = isFirefox ? "DOMMouseScroll" : "wheel";
	  window.addEventListener(this.mousewheelEvent, this.parallaxScroll, false);

	  // ------------- SLIDE MOTION ------------- //
	  function nextItem() {
	    var $previousSlide = document.getElementsByClassName("background")[currentSlideNumber-1];
	    $previousSlide.classList.remove("up-scroll");
	    $previousSlide.classList.add("down-scroll");
	  }

	  function previousItem() {
	    var $currentSlide = document.getElementsByClassName("background")[currentSlideNumber];
	    $currentSlide.classList.add("up-scroll");
	    $currentSlide.classList.remove("down-scroll");
	  }
	}
	componentWillUnmount(){
	  window.removeEventListener(this.mousewheelEvent, this.parallaxScroll, false);
	}

	render () {
	return (
		<div>
			 <div className="container">
				 <section className="background">
				   <div className="content-wrapper">
				   		<div className='tc'>
				   			<h1>Meet Our Coordinators</h1>
							<CoordList coord={coord} />
						</div>
				   </div>
				   <div class="scroll-down"></div>
				 </section>
				 <section className="background">
				   <div className="content-wrapper">
				   		<div className='tc'>
				   			<h1>A lot Of emts</h1>
							<EmtList emts={emts} />
						</div>
				   </div>
				   <div class="scroll-down"></div>
				 </section>
			  	 <section className="background">
			       <div className="content-wrapper">
			       		<div className='tc'>
				   			<h1>Technical & Managerial Heads</h1>
							<TMList TMheads={TMheads} />
						</div>
			       </div>
			       <div class="scroll-down"></div>
			     </section>
			     <section className="background">
			       <div className="content-wrapper">
			       		<div className='tc'>
				   			<h1>Our Awesome Web Developers</h1>
							<PC_WebList PC_WebTeam={PC_WebTeam} />
						</div>
			       </div>
			     </section>
			</div>
			<div className="mob_container">
				<div className="mob_content-wrapper">
		   			<h1>Meet Our Coordinators</h1>
					<CoordList coord={coord} />

		   			<h1>A lot Of EMTs</h1>
					<EmtList emts={emts} />

		   			<h1>Technical & Managerial Heads</h1>
					<TMList TMheads={TMheads} />

					<h1>Our Awesome Web Developers</h1>
					<Mob_WebList Mob_WebTeam={Mob_WebTeam} />
				</div>
			</div>
		</div>
		);
	}
}

export default Team;