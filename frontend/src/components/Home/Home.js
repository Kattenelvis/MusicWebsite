import React from 'react'
import FrontPageDiv from './FrontPageDiv'

export default function Home() {
	//If user has scrolled X amount, add the class with scroll animation
	//Formula is: 430X + 300 pixels
	var frontPageDivs = document.getElementsByClassName('frontPageDiv')
	document.addEventListener('scroll', function() {
		if (this.location.pathname === '/') {
			for (var i = 0; i < frontPageDivs.length; i++) {
				if (i === 0) frontPageDivs[0].classList.add('comingInFromTheLeft')
				else if (window.pageYOffset > i * 430 + 300) {
					if (i % 2 === 0) frontPageDivs[i].classList.add('comingInFromTheRight')
					else frontPageDivs[i].classList.add('comingInFromTheLeft')
				}
			}
		}
	})
	return (
		<section id='mainSection'>
			<FrontPageDiv
				img='../../img/EDMScene.jpg'
				title='Check out our blog!'
				text='We hope that you will find something interesting!'
				opacity={0}
				btnText='GO TO BLOG'
			/>
			<FrontPageDiv
				img='../../img/EDMScene.jpg'
				title='VST Plugins'
				text='Check out our large store of various VST plugins for you to choose from, rate and buy'
				float='right'
				opacity={0}
			/>
			<FrontPageDiv
				img='../../img/EDMScene.jpg'
				title='Hi, I am EmilEsse,'
				text="and I hope you'll find this website good"
				opacity={0}
			/>
		</section>
	)
}
