import React from 'react'
import { Link } from 'react-router-dom'
//import jsonBlogs from './Blogs.json'

export default function Blogs({ blog, classes }) {
	//const blog = jsonBlogs.blogs.filter(blog => blog.url === id)[0]

	return (
		<Link to={`blog/${blog.url}`}>
			<div class='media blogLink'>
				<img
					src={require('../../img/EDMScene.jpg')}
					width='140px'
					class='mr-3'
					alt='...'
				/>
				<div class='media-body'>
					<h5 class='mt-0'>Media heading</h5>
					Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
					sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
					turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue
					felis in faucibus.
				</div>
			</div>
		</Link>
	)
}

/*>
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
		*/
