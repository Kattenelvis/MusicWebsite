import React from 'react'
import Aside from '../Aside'
import Sample from './Sample'

export default function Samples() {
	return (
		<div className='mainItemDisplay'>
			<Aside list={['Synth', 'Instruments', 'Vocal', 'Effect', 'Other']} />
			<Sample />
		</div>
	)
}
