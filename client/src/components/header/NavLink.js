import React, { PureComponent } from 'react'
import { Link } from 'react-router'

class NavLink extends PureComponent {
  render() {
    return <Link {...this.props} activeClassName="header-active-link" className="navbar-brand"/>
  }
}

export default NavLink;
