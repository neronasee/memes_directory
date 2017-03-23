import React, { PureComponent } from 'react';

import NavLink from './NavLink.js';

class Auth extends PureComponent {
	renderItems() {
		if(!this.props.authenticated){
			return [
				<li className="nav-item" key={1}>
					<NavLink to="/signin">Login</NavLink>
				</li>,
				<li className="nav-item" key={2}>
					<NavLink to="/signup">SignUp</NavLink>
				</li>
			]
		} else {
			return[
				<li className="nav-item" key={1}>
					<div className="navbar-brand">Hello, {this.props.username}</div>
				</li>,
				<li className="header-auth__logout nav-item" key={2}>
					<button onClick={this.props.signoutUser} className="btn btn-danger">Log Out</button>
				</li>
			]
		}
	}
	render() {
		return(
			<ul className="nav navbar-nav header-auth">
				{this.renderItems()}
			</ul>
		)
	}
}

export default Auth;
