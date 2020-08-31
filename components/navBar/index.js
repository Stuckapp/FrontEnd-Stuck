import React from 'react';
import Link from 'next/link'






class navBar extends React.PureComponent {


  render() {
    const LogoRed = 'images/LogoRed.png'
    return <div>
      <nav class="navbar">
        <a class="navbar-brand"><img src={LogoRed} alt="logo" id="LogoRed" /></a>
        <form class="form-inline">
          <button class="btn btnSign my-2 my-sm-0 d-none d-md-inline" type="submit"><Link href="./sesion/usuarios">Sign In</Link></button>
          <button className="login d-none d-md-inline">Log In</button>
        </form>
      </nav>
    </div>
  }
}


export default navBar;