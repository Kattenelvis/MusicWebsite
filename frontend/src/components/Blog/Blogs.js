import React, { useState, useEffect } from 'react'
import BlogLink from './BlogLink'
import Aside from '../Aside'
import BlogJson from './Blogs.json'

export default function Blogs() {
	const [blogList, setBlogList] = useState([])
	let allBlogs = []

	const getBlogs = () => {
		allBlogs = BlogJson.blogs
		document.querySelector('.loading').setAttribute('style', 'display:none;')
		sortByTag('')
	}

	//Gives function to the list underneath "Categories" in the aside
	const SetLinksToTags = () => {
		const tags = document.querySelector('.sidebar ul')
		for (let i = 0; i < tags.children.length; i++) {
			const li = tags.children[i]

			li.addEventListener('click', () => {
				for (let i = 0; i < tags.children.length; i++) {
					tags.children[i].classList.remove('selectedTag')
				}

				li.classList.toggle('selectedTag')
				if (i === 0) sortByTag('')
				else sortByTag(li.innerText)
			})
		}
	}

	useEffect(() => {
		SetLinksToTags() 
		getBlogs()
	},[])

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

	const categories = ['All', 'Plugins', 'Industry', 'Money', 'Other']
	return (
		<div className='mainItemDisplay'>
			<Aside list={categories} />
			<div className='blogList'>{blogList}</div>
			<div className='loading'></div>
		</div>
	)
}
