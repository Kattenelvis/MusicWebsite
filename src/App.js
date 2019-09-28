import React from 'react'
import './css/main.css'

function App() {
	var frontPageDivs = document.getElementsByClassName('frontPageDiv')
	document.addEventListener('scroll', function() {
		for (var i = 0; i < frontPageDivs.length; i++) {
			if (i === 0) frontPageDivs[0].classList.add('comingInFromTheLeft')
			else if (window.pageYOffset > i * 430 + 300) {
				if (i % 2 === 0) frontPageDivs[i].classList.add('comingInFromTheRight')
				else frontPageDivs[i].classList.add('comingInFromTheLeft')
			}
		}
	})
	return (
		<div className='App'>
			<div class='mainWrap'>
				<header>
					<a class='logo resetLink' href='/'>
						LOGO
					</a>
					<nav>
						<ul>
							<li>
								<a href='/' class='navLink'>
									Home
								</a>
							</li>
							<li>
								<a href='/blog' class='navLink'>
									Blog
								</a>
							</li>
							<li>
								<a href='/plugins' class='navLink'>
									Plugins
								</a>
							</li>
							<li>
								<a href='/samples' class='navLink'>
									Samples
								</a>
							</li>
						</ul>
					</nav>
				</header>
				<main>
					<div class='topPart'>
						<div id='image'></div>
						<h1 class='mainText'>Music for the enthusiast</h1>
						<h2 class='secondaryText'>
							Share samples, look for plugins or read our blog!
						</h2>
					</div>

					<div class='cta'></div>

					<section id='mainSection'>
						<div class='frontPageDiv'>
							<img src='/img/EDMScene.jpg'></img>
							<h3>BUY OR GET PLUGINS</h3>
							<p>
								Lorem ipsum Lorem ipsum Lorem ipsum Lor em ipsum Lorem ipsum Lorem ipsum
								Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu m
								Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
								Lorem ipsum Lore m ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
								Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
							</p>
						</div>
						<div class='frontPageDiv'>
							<img src='img/EDMScene.jpg' alt='' style={{ float: 'right' }} />
							<h3>HIGH QUALITY BLOG</h3>
							<p>
								Lorem ipsum Lorem ipsum Lorem ipsum Lor em ipsum Lorem ipsum Lorem ipsum
								Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu m
								Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
								Lorem ipsum Lore m ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
								Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
							</p>
						</div>
						<div class='frontPageDiv'>
							<img src='img/EDMScene.jpg' alt='' />
							<h3>I NEED TO GET BETTER AT COPYWRITING</h3>
							<p>
								Lorem ipsum Lorem ipsum Lorem ipsum Lor em ipsum Lorem ipsum Lorem ipsum
								Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu m
								Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
								Lorem ipsum Lore m ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
								Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
							</p>
						</div>
					</section>
				</main>
			</div>
			<footer>&copy; Emil 2019</footer>
		</div>
	)
}

export default App
