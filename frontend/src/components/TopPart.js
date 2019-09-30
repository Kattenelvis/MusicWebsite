import React from 'react'

export default function TopPart() {
	return (
		<div className='topPart'>
			<img id='image' src={require('../img/EDMScene.jpg')} width='100%' alt={''}></img>
			<h1 className='mainText'>Music for the enthusiast</h1>
			<h2 className='secondaryText'>Share samples, look for plugins or read our blog!</h2>
		</div>
	)
}
