import React from 'react'

export default function Sample({name, title, file}) {
	console.log(file)
	return (
		<div className='sample'>
			<h3>By:{name}</h3>
			<h2>{title}</h2>
			<h2>
				<a className='btn btn-info' href={file} download>
					DOWNLOAD
				</a>
			</h2>
			<audio controls preload="metadata">
				<source src={file} type='audio/wav' />
				<source src={file} type='audio/mp3' />
				<source src={file} type='audio/ogg' />
			</audio>
		</div>
	)
}
