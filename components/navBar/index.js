import React from 'react';




class navBar extends React.PureComponent {

  render() {
    const LogoRed = 'images/LogoRed.png'
    return <div>
      <nav class="navbar">
        <a class="navbar-brand"><img src={LogoRed} alt="logo" id="LogoRed" /></a>
        <form class="form-inline">
          <button class="btn btnSign my-2 my-sm-0" type="submit">Sign In</button>
          <a className="login">Log In</a>
        </form>
      </nav>
    </div>
  }
}


export default navBar;