// Write your JS code here
// Write your JS code here
import {Link} from 'react-router-dom'

import {Component} from 'react'

class Header extends Component {
  render() {
    return (
      <>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
      </>
    )
  }
}
export default Header
