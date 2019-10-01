import React from 'react'

export default function Aside({ list }) {
	const mapList = list.map(item => <li key={item}>{item}</li>)

	return (
		<aside className='sidebar'>
			<img className='hamburger' src={require('../img/Hamburger.svg')} />
			<div className='categories'>
				<h2>Categories</h2>
				<ul>{mapList}</ul>
			</div>
		</aside>
	)
}
