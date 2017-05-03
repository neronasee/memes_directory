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
		/*console.log(this.props)
		return this.props.memes.map(mem => {
			console.log(mem)
			return mem;
		})*/
		const mems = this.props.memes;
		
		if(Object.keys(mems).length !== 0) {
			return Object.keys(mems).map((memIndex, i) => {
				const mem = mems[memIndex]
				// console.log(mem)
				return (
					<div className="memes-item" key={i}>
						<div>
							<img src={mem.img} alt={mem.title}/>
						</div>
						<h3>{mem.title}</h3>
						<p>{mem.description}</p>
					</div>
				)
			})
		}
	}

	render(){
		return(
			<div>
				<Link to="/add-new-mem" className="btn btn-success">
					Add new
				</Link>
				<div className="memes-grid">
					{this.renderMemes()}
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		memes: state.memes
	}
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({getMemes}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
