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
					<img src="../web/home.png" />
					<span>Home</span>
				</Link>
				<Link to="/village">
					<img src="../web/village.png" />
					<span>Village</span>
				</Link>
				<Link to="/rules">
					<img src="../web/rules.png" />
					<span>Rules</span>
				</Link>
				<Link to="/creation">
					<img src="../web/creation.png" />
					<span>Creation</span>
				</Link>
				<Link to="/events">
					<img src="../web/events.png" />
					<span>Events</span>
				</Link>
				<Link to="/residents">
					<img src="../web/residents.png" />
					<span>Residents</span>
				</Link>
			</div>
		</nav>
	);
}

export default Nav;
