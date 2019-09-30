import React, { useState, useEffect } from 'react'
import BlogLink from './BlogLink'
import Axios from 'axios'

export default function Blogs() {
	const [blogList, setBlogList] = useState([])
	let allBlogs = []

	const getBlogs = async () => {
		const { data } = await Axios.get('/api/blogs').catch(e => console.error(e))
		allBlogs = data
		document.querySelector('.loading').setAttribute('style', 'display:none;')
		sortByTag('')
	}

	useEffect(() => {
		getBlogs()
	}, [])

	const sortByTag = tag => {
		if (tag === '')
			setBlogList(
				allBlogs.map(blog => <BlogLink key={blog.url} blog={blog} classes='blogLink' />)
			)
		else {
			const a = allBlogs.filter(blog => blog.tags.includes(tag))
			setBlogList(
				a.map(blog => <BlogLink key={blog.url} blog={blog} classes='blogLink' />)
			)
		}
	}

	return (
		<div>
			{blogList}
			<div className='loading'></div>
		</div>
	)
}
