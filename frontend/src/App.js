import React from 'react'
import './css/main.min.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home/Home'
import TopPart from './components/TopPart'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Blogs from './components/Blog/Blogs'
import Samples from './components/Samples/Samples'
import Plugins from './components/Plugins/Plugins'

function App() {
	return (
		<Router>
			<div className='App'>
				<div className='mainWrap'>
					<Header />
					<main>
						<Switch>
							<Route exact path='/'>
								<TopPart />
								<Home />
							</Route>
							<Route exact path='/blog'>
								<Blogs />
							</Route>
							<Route exact path='/plugins'>
								<Plugins />
							</Route>
							<Route exact path='/samples'>
								<Samples />
							</Route>
						</Switch>
					</main>
				</div>
				<Footer />
			</div>
		</Router>
	)
}

export default App
