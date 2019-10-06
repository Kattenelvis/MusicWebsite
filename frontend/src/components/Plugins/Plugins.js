import React from 'react'
import Aside from '../Aside'
import Plugin from './Plugin'

export default function Plugins() {
	return (
		<div className='mainItemDisplay'>
			<Aside list={['Synth', 'Instruments', 'Vocal', 'Effect', 'Other']} />
			<div className='PluginDisplay'>
				<Plugin title={'Serum'} price={"189"} link={"https://xferrecords.com/products/serum"} img={require('../../img/serum.jpg')} />
				<Plugin title={'X200'} />
				<Plugin title={'Short Name'} />
				<Plugin title={'Serum'} />
				<Plugin title={'Massive'} />
			</div>
			{/* <div className='loading'></div> */}
		</div>
	)
}
