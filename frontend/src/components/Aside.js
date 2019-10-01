import React from 'react'

export default function Aside({ list }) {
	const mapList = list.map(item => <li key={item}>{item}</li>)

	return (
		<aside className='sidebar'>
			<h2>Categories</h2>
			<ul>{mapList}</ul>
		</aside>
	)
}
