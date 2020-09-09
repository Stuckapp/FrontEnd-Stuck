import React from 'react';
import Link from 'next/link'






class navBar extends React.PureComponent {


  render() {
    const LogoRed = 'images/LogoRed.png'
    return <nav className="navbar">
      <a className="navbar-brand"><img src={LogoRed} alt="logo" id="LogoRed" /></a>
      <form className="form-inline">
        <button className="btn btnSign my-2 my-sm-0 d-none d-md-inline" type="submit"><Link href="./sesion/usuarios">Sign In</Link></button>
        <button className="login d-none d-md-inline">Log In</button>
      </form>
    </nav>

  }
}


export default navBar;