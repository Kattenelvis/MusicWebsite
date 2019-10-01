import React, { useEffect } from 'react'

export default function Aside({ list }) {
	const mapList = list.map(item => <li key={item}>{item}</li>)

	const hamburger = () => {
		const ham = document.querySelector('.hamburger')
		ham.addEventListener('click', () => {
			document.querySelector('.sidebar').classList.toggle('hidden')
		})
	}

	useEffect(() => {
		hamburger()
	}, [])

	return (
		<div className='aside'>
			<img className='hamburger' src={require('../img/Hamburger.svg')} />
			<aside className='sidebar'>
				<div className='categories'>
					<h2>Categories</h2>
					<ul>{mapList}</ul>
				</div>
			</aside>
		</div>
	)
}
