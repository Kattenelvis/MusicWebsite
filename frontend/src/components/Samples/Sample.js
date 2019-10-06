import React from 'react'

export default function Sample({name, title, audio}) {
	
	return (
		<div className='sample'>
			<h3>By:{name}</h3>
			<h2>{title}</h2>
			<h3>Downloads:4615</h3>
			<h2>
				<a className='btn btn-info' href={audio} download>
					DOWNLOAD
				</a>
			</h2>
			<audio controls preload="metadata">
				<source src={audio} type='audio/wav' />
			</audio>
		</div>
	)
}
