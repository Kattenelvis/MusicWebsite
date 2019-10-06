import React from 'react'

export default function Plugin({ title, price, link, img }) {

	let linkText = price <= 0 || !price ? 'GET FREE' : 'BUY NOW'

	return (
		<div className='plugin'>
			<img alt="" src={img || require('../../img/EDMScene.jpg')} width='1px' height='130px' />
			<div className='pluginBottom'>
				<h2>{title || "unamed"}</h2>
				<h3>
					0 reviews <span role='img' aria-label="Close">⭐⭐⭐⭐⭐</span>
				</h3>
				<h3 className='pluginPrice'>${price || 0}</h3>
				<a rel="noopener noreferrer" className="btn btn-primary" href={link || "#"} target="_blank">{linkText}</a>
			</div>
		</div>
	)
}
