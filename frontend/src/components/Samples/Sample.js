import React from 'react'

export default function Sample() {
	return (
		<div className='sample'>
			<h3>By:Kattenelvis</h3>
			<h2>Cool Bass</h2>
			<h3>Downloads:4615</h3>
			<audio controls>
				<source src={require('../../audio/Bass.mp3')} type='audio/mp3' />
			</audio>
			<h2>
				<a href={require('../../audio/Bass.mp3')} download>
					DOWNLOAD
				</a>
			</h2>
		</div>
	)
}
