import React, { PureComponent } from 'react';
import { Link } from 'react-router';

import noImg from './../../assets/img/no-img.png';

class Mem extends PureComponent {
  render() {
    const mem = this.props.mem;
    
    const descr = mem.description
      ? `${mem.description.substr(0, 10)}...`
      : "";
    

    return(
      <Link to={`/browse/${mem._id}`} className="memes-item">
				<div>
          {mem.img 
            ? <img src={mem.img} alt={mem.title}/>
            : <img src={noImg} alt={mem.title}/>}
					
				</div>
				<h2>{mem.title}</h2>
				<p>{descr}</p>
			</Link>
    )
  }
}

export default Mem;