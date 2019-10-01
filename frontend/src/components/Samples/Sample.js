import React from 'react'

export default function Sample() {
	return (
		<div className='sample'>
			<h3>By:Kattenelvis</h3>
			<h2>Cool Bass</h2>
			<h3>Downloads:4615</h3>
			<h2>
				<a className='btn btn-info' href={require('../../audio/Bass.mp3')} download>
					DOWNLOAD
				</a>
			</h2>
			<audio controls>
				<source src={require('../../audio/Bass.mp3')} type='audio/mp3' />
			</audio>
		</div>
	)
}
