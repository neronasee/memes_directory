import React, { PureComponent } from 'react';
import { Link } from 'react-router';

import logo from '../../assets/img/frog.png';

class Logo extends PureComponent {
	render(){
		return(
				<Link to="/" className="header-logo">
					<img className="header-logo__img" src={logo}/>
					<h2 className="header-logo__text">
						MEMES
						<br />
						STORAGE
					</h2>
				</Link>
		)
	}
}

export default Logo;
