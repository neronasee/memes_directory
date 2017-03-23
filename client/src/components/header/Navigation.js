import React, { PureComponent } from 'react';
import { IndexLink } from 'react-router';

import NavLink from './NavLink.js';

class Navigation extends PureComponent {
	render() {
		return(
			<nav className="navbar navbar-light">
				<ul className="nav navbar-nav">
					<li className="nav-item">
						<IndexLink to="/" activeClassName="header-active-link" className="navbar-brand">Home</IndexLink>
					</li>
					<li className="nav-item">
						<NavLink to="/browse">Browse</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to="/about">About</NavLink>
					</li>
				</ul>
			</nav>
		)
	}
}

export default Navigation;
