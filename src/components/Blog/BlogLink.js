import React from 'react'
import { Link } from 'react-router-dom'

export default function Blogs({ id, classes }) {
	return (
		<Link to={`blog/${id}`}>
			<div className={classes}>
				<img src={require('../../img/EDMScene.jpg')} alt='' style={{ float: 'left' }} />
				<h3>Test</h3>
				<p>
					Hello Lorem Ipsum Hello Lorem Ipsum Hello Lorem Ipsum Hello Lorem Ipsum Hello
					Lorem Ipsum Hello Lorem Ipsum Hello Lorem Ipsum Hello Lorem Ipsum Hello Lorem
					Ipsum Hello Lorem Ipsum Hello Lorem Ipsum Hello Lorem Ipsum Hello Lorem Ipsum
					Hello Lorem Ipsum Hello Lorem Ipsum Hello Lorem Ipsum Hello Lorem Ipsum
				</p>
			</div>
		</Link>
	)
}