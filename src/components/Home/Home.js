import React from 'react'
import FrontPageDiv from './FrontPageDiv'

export default function Home() {
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
				title='BUY OR GET PLUGINS'
				text='Lorem ipsum Lorem ipsum Lorem ipsum Lor em ipsum Lorem ipsum Lorem ipsum Lorem
					ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu m Lorem ipsum
					Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lore m
					ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
					Lorem ipsum Lorem ipsum'
				opacity={0}
			/>
			<FrontPageDiv
				img='../../img/EDMScene.jpg'
				title='CHECK OUT OUR BLOG'
				text='Lorem ipsum Lorem ipsum Lorem ipsum Lor em ipsum Lorem ipsum Lorem ipsum Lorem
					ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu m Lorem ipsum
					Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lore m
					ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
					Lorem ipsum Lorem ipsum'
				float='right'
				opacity={0}
			/>
			<FrontPageDiv
				img='../../img/EDMScene.jpg'
				title='I NEED TO GET BETTER AT COPYWRITING'
				text='Lorem ipsum Lorem ipsum Lorem ipsum Lor em ipsum Lorem ipsum Lorem ipsum Lorem
					ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu m Lorem ipsum
					Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lore m
					ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
					Lorem ipsum Lorem ipsum'
				opacity={0}
			/>
		</section>
	)
}
