import React from 'react'
import Aside from '../Aside'
import { Link } from 'react-router-dom'
import Sample from './Sample'

export default function Samples() {
	console.log(require('../../audio/Bass.mp3'))
	return (
		<div className='mainItemDisplay'>
			<Aside list={['Synth', 'Instruments', 'Vocal', 'Effect', 'Other']} />
			<div className='Samples'>
				<Sample name={"kattenelvis"} title={"Cool Bass"} file={require('../../audio/Bass.mp3')}/>
			</div>
			<Link to={"/samples/upload"}>Upload your own samples</Link>
		</div>
	)
}
