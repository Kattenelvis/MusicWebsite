import React from 'react'
import Aside from '../Aside'
import Plugin from './Plugin'

export default function Plugins() {
	return (
		<div className='mainItemDisplay'>
			<Aside list={['Synth', 'Instruments', 'Vocal', 'Effect', 'Other']} />
			<div className='PluginDisplay'>
				
				<Plugin title={'Serum'} 
				price={"189"} 
				link={"https://xferrecords.com/products/serum"} 
				img={require('../../img/serum.jpg')} />
				
				<Plugin title={'Massive'} 
				link={"https://www.native-instruments.com/en/products/komplete/synths/massive/"}
				price={"149"}
				img={require('../../img/massive.jpg')} />
			</div>
			{/* <div className='loading'></div> */}
		</div>
	)
}
