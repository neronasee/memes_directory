import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AuthFormField from '../components/auth/AuthFormField.js';
import { signinUser, clearError } from '../actions/auth.js';

class Signin extends Component {
	componentWillMount() {
		this.props.clearError();
	}
	handleFormSubmit(formValues) {
		this.props.signinUser(formValues);
	}

	renderAlert() {
		if (this.props.errorMessage) {
			return (
				<div className="alert alert-danger">
					<strong>Oops!</strong> {this.props.errorMessage}
				</div>
			);
		}
	}

	render(){
		const { handleSubmit } = this.props;
		return(
			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
				<AuthFormField
					type="text"
					name="name"
					label="Name"
				/>
				<AuthFormField
					type="password"
					name="password"
					label="Password"
				/>
			{this.renderAlert()}
			<button action="submit" className="btn btn-primary">Login!</button>
			</form>
		)
	}
}

const mapStateToProps = state => {
	return { errorMessage: state.auth.error }
}

const mapDispatchToProps = dispatch =>{
	return(
		bindActionCreators({signinUser, clearError}, dispatch)
	)
}

Signin = reduxForm({
	form: 'signin'
})(Signin);

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
