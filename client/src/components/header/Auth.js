import React, { Component, PureComponent } from 'react';
import { Link } from 'react-router';

class Auth extends Component {
	renderItems() {
		if(!this.props.authenticated){
			return [
				<li>
					<Link to="/signin">Login</Link>
				</li>,
				<li >
					<Link to="/signup">SignUp</Link>
				</li>
			]
		} else {
			return[
				<li>
					<div>Hello, %USER%</div>
				</li>,
				<li>
					<button>Log Out</button>
				</li>
			]
		}
	}
	render() {
		return(
			<ul className="nav navbar-nav">
				{this.renderItems()}
			</ul>
		)
	}
}



export default Auth;
