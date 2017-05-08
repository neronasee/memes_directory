import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getMemes } from './../actions/memes';

import Mem from './../components/memes/Mem';

import './../assets/css/memes.css';

class Browse extends Component {
	componentWillMount() {
		this.props.getMemes();
	}

	renderMemes() {
		const mems = this.props.memes;
		
		if(Object.keys(mems).length !== 0) {
			return Object.keys(mems).map((memIndex, i) => {
				const mem = mems[memIndex];

				return (
					<Mem mem={mem} key={i}/>
				)
			})
		}
	}

	renderAddButton() {
		if(this.props.authenticated) {
			return (
				<Link to="/add-new-mem" className="btn btn-success">
					Add new
				</Link>
			)
		} 

		return <h3>Please, login to able to add MEMES</h3>
	}

	render(){
		return(
			<div>
				{this.renderAddButton()}
				<div className="memes-grid">
					{this.renderMemes()}
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		memes: state.memes,
		authenticated: state.auth.authenticated,
	}
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({getMemes}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
