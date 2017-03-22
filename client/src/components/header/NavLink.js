import React, { PureComponent } from 'react'
import { Link } from 'react-router'

class NavLink extends PureComponent {
  render() {
    return <Link {...this.props} className="navbar-brand" activeClassName="header-active-link"/>
  }
}

export default NavLink;
