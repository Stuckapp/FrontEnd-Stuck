import React from 'react';

class Footer extends React.PureComponent {


  render() {
    const LogoWhite = "images/LogoWhite.png"
    const Face = "images/facebookw.png"
    const twitt = "images/twitter.png"
    return <footer>
      <div className="bgblack">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav class="navbar">
                <a class="navbar-brand"><img src={LogoWhite} alt="logo" id="LogoRed" /></a>
                <form class="form-inline">
                  <img className="facebook mr-4" src={Face} alt="logoFace" id="logoWhite" width="40px" />
                  <img className="twitter" src={twitt} alt="logoTwitter" id="logoWhite" width="47px" />
                </form>
              </nav>
            </div>
          </div>
        </div>
      </div>;
    </footer>
  }
}



export default Footer;