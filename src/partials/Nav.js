import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

function Nav() {
	return (
		<nav>
			<div className="title">
				<Link to="/">Wistea Village</Link>
			</div>
			<div className="box links">
				<Link to="/home">
					<img src="../home.png" />
					<span>Home</span>
				</Link>
				<Link to="/village">
					<img src="../village.png" />
					<span>Village</span>
				</Link>
				<Link to="/rules">
					<img src="../rules.png" />
					<span>Rules</span>
				</Link>
				<Link to="/creation">
					<img src="../creation.png" />
					<span>Creation</span>
				</Link>
				<Link to="/events">
					<img src="../events.png" />
					<span>Events</span>
				</Link>
				<Link to="/residents">
					<img src="../residents.png" />
					<span>Residents</span>
				</Link>
			</div>
		</nav>
	);
}

export default Nav;
