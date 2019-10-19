import React from 'react'

export default function FrontPageDiv({ title, text, float, opacity, btnText, btnLink }) {
	if (!float) float = 'left'
	return (
		<div className='frontPageDiv' style={{ opacity: opacity }}>
			<img src={require('../../img/EDMScene.jpg')} alt='' style={{ float: float }} />
			<h3>{title}</h3>
			<p>{text}</p>
			<a href={`/${btnLink}`}>
				<button className='btn btn-info'>{btnText}</button>
			</a>
		</div>
	)
}
