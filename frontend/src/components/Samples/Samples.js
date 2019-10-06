import React from 'react'
import Aside from '../Aside'
import { Link } from 'react-router-dom'
import Sample from './Sample'

export default function Samples() {
	return (
		<div className='mainItemDisplay'>
			<Aside list={['Synth', 'Instruments', 'Vocal', 'Effect', 'Other']} />
			<div className='Samples'>
				<Sample />
				<Sample />
				<Sample />
				<Sample />
				<Sample />
			</div>
			<Link to={"/samples/upload"}>Upload your own samples</Link>
		</div>
	)
}
