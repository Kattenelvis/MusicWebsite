import React from 'react'
import Aside from '../Aside'
import Plugin from './Plugin'

export default function Plugins() {
	return (
		<div className='mainItemDisplay'>
			<Aside list={['Synth', 'Instruments', 'Vocal', 'Effect', 'Other']} />
			<Plugin />
			{/* <div className='loading'></div> */}
		</div>
	)
}
