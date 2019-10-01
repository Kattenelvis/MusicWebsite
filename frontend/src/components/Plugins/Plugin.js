import React from 'react'

export default function Plugin() {
	return (
		<div className='plugin'>
			<img src={require('../../img/EDMScene.jpg')} width='250px' height='160px' />
			<h2>Super Cool Synth With Long Name</h2>
			<h3>51 reviews ⭐⭐⭐⭐⭐</h3>
			<h3>$20</h3>
			<button className='btn btn-primary'>BUY NOW</button>
		</div>
	)
}
