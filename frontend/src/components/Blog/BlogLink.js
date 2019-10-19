import React from 'react'
import { Link } from 'react-router-dom'

export default function Blogs({ blog }) {
	return (
		
			<div className='media blogLink'>
				<Link to={`blog/${blog.url}`}>
				<img
					src={require('../../img/EDMScene.jpg')}
					width='140px'
					className='mr-3'
					alt='...'
				/>
				<div className='media-body'>
					<h5 className='mt-0'>{blog.title}</h5>
					{blog.description}
				</div>
				</Link>
			</div>

	)
}
