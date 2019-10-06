import React from 'react'
import './css/main.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home/Home'
import TopPart from './components/TopPart'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Blogs from './components/Blog/Blogs'
import Blog from './components/Blog/Blog'
import Samples from './components/Samples/Samples'
import Plugins from './components/Plugins/Plugins'
import Playground from './components/Playground/Playground'
import Upload from './components/Samples/Upload'

function App() {
	return (
		<Router>
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
						<Route path='/blog/'>
							<Blog />
						</Route>
						<Route exact path='/plugins'>
							<Plugins />
						</Route>
						<Route exact path='/samples'>
							<Samples />
						</Route>
						<Route exact path='/samples/upload'>
							<Upload />
						</Route>
						<Route exact path='/playground'>
							 <Playground/>
						</Route>
					</Switch>
				</main>
			</div>
			<Footer />
		</Router>
	)
}

export default App
