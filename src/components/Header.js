import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
	return (
		<header>
			<a className='logo resetLink' href='/'>
				LOGO
			</a>
			<nav>
				<ul>
					<li>
						<Link to='/' className='navLink'>
							Home
						</Link>
					</li>
					<li>
						<Link to='/blog' className='navLink'>
							Blog
						</Link>
					</li>
					<li>
						<Link to='/plugins' className='navLink'>
							Plugins
						</Link>
					</li>
					<li>
						<Link to='/samples' className='navLink'>
							Samples
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}
