import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Logo from '../components/header/Logo.js';
import Navigation from '../components/header/Navigation.js';
import Auth from '../components/header/Auth.js';
import { signinUser, signoutUser } from '../actions/auth.js';
import '../assets/css/header.css';

class Header extends Component {
	render(){
		return(
			<header>
				<div className="row">
					<div className="col-md-4 col-xs-12 text-xs-center">
						<Logo />
					</div>
					<div className="col-md-8 col-xs-12">
						<div className="row header-menu">
							<div className="col-xs-6">
								<Navigation />
							</div>
							<div className="col-xs-6">
								<Auth authenticated={this.props.authenticated}/>
							</div>
						</div>
					</div>
				</div>
				<button onClick={this.props.signinUser}>True</button>
				<button onClick={this.props.signoutUser}>False</button>
			</header>
		)
	}
}

const mapStateToProps = state => {
	return {
		authenticated: state.auth.authenticated
	}
}

const mapDispatchToProps = (dispatch) => {
	return(
		bindActionCreators({signinUser, signoutUser}, dispatch)
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
