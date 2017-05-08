import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

import {getSingleMem} from './../actions/memes';

import './../assets/css/singleMem.css';

class SingleMem extends PureComponent {
  componentWillMount() {
    this.props.getSingleMem(this.props.params.id);
  }

  renderMem() {
    const mem = this.props.mem;
    
    if(mem) {
      return (
        <div className="single-mem text-center">
          <h1>{mem.title}</h1>
          <div className="single-mem__descr">
            {mem.description}
          </div>
          <div className="single-mem__img">
            {mem.img && <img src={mem.img} alt="mem" />}
          </div>
        </div>
      )
    }
  }

  render() {
    return(
      <div>
        <Link to="/browse" className="btn btn-danger">
					Back
				</Link>
        {this.renderMem()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    mem: state.singleMem.mem
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({getSingleMem}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleMem);