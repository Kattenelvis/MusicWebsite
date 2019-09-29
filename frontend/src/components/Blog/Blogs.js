import React, { useState, useEffect } from 'react'
import BlogLink from './BlogLink'
import Axios from 'axios'

export default function Blogs() {
	const [blogList, setBlogList] = useState([])
	const getBlogs = async () => {
		const data = await Axios.get('/api/blogs').catch(e => console.error(e))
		setBlogList(
			data.data.map(blog => <BlogLink key={blog.url} blog={blog} classes='blogLink' />)
		)
		document.querySelector('.loading').setAttribute('style', 'display:none;')
	}
	useEffect(() => {
		getBlogs()
	}, [])
	return (
		<div>
			{blogList}
			<div className='loading'></div>
		</div>
	)
}
