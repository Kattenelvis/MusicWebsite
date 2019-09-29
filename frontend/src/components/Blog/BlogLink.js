import React from 'react'
import { Link } from 'react-router-dom'
//import jsonBlogs from './Blogs.json'

export default function Blogs({ blog, classes }) {
	//const blog = jsonBlogs.blogs.filter(blog => blog.url === id)[0]

	return (
		<Link to={`blog/${blog.url}`}>
			<div className={classes}>
				<img src={require('../../img/EDMScene.jpg')} alt='' style={{ float: 'left' }} />
				<div className='mainContent'>
					<h3>{blog.title}</h3>
					<h4>
						<i>{blog.tags}</i>
					</h4>
					<p>{blog.description}</p>
				</div>
			</div>
		</Link>
	)
}
