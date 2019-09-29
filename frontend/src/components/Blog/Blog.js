import React from 'react'
import blogs from './Blogs.json'

export default function Blogs() {
	//Looks in the JSON file for the blog based on current URL
	let path = window.location.pathname.split('/')[2]
	const { title, tags, description, text } = blogs.blogs.filter(
		blog => blog.url === path
	)[0]
	document.addEventListener('DOMContentLoaded', () => {
		document.querySelector('#text').innerHTML = text
	})

	return (
		<article className='BlogPost'>
			<h1>{title}</h1>
			<h2 className='tags'>{tags}</h2>
			<h2 className='description'>{description}</h2>
			<div id='text'></div>
		</article>
	)
}
