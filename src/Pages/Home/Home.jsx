import "./Home.scss";

function Home() {
	return (
		<div id="Home">
			<nav>
				<div className="nav-logo">
					<img src="navbar-logo.png" alt="navbar logo" />
					<div className="nav-text">
						<h1>
							Chirag <span>.</span>
						</h1>
						<h1>Jain</h1>
					</div>
				</div>
				<div className="nav-links">
					<ul>
						<li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#" className="contact-link">Contact</a></li>
					</ul>
				</div>
			</nav>
            <main>
                <div className="left">
                    <h1>Your Friendly <br /> Neighbourhood <br />Software <br />Engineer</h1>
                    <h3>Welcome to the digital playground of Chirag Jain, where innovation meets code. Explore my creations as a full stack developer. 🚀</h3>
                    <button className="resume">Resume</button>
                </div>
                <div className="right">
                    <img src="hero-image.png" alt="Hero-image" />
                </div>
            </main>
		</div>
	);
}

export default Home;
