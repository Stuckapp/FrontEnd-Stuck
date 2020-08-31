import React from 'react';

class LogoForm extends React.PureComponent {



  render() {
    const logoRed = "../images/LogoRed.png"
    return <div>
      <div className="container">
        <div className="row d-flex">
          <div className="col-4 justify-content-center">
            <img src={logoRed} className="ml-4"></img>
          </div>
        </div>
      </div>
    </div>


  }
}

export default LogoForm