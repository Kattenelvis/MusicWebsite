import React from 'react'

export default function Plugin() {
	return (
		<div className='plugin'>
			<img src={require('../../img/EDMScene.jpg')} width='1px' height='130px' />
			<div className='pluginBottom'>
				<h2>Super Cool Synth With Long Name</h2>
				<h3>
					51 reviews <span role='img'>⭐⭐⭐⭐⭐</span>
				</h3>
				<h3 className='pluginPrice'>$20</h3>
				<button className='btn btn-primary'>BUY NOW</button>
			</div>
		</div>
	)
}
