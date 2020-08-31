import React from 'react';



class cardsLanding extends React.PureComponent {

  render() {
    const cellPhone = "images/phone1.svg"
    const mapas = "images/mapa .png"
    return <div>
      <div className="container d-flex">
        <div className="row">
          <div className="card mt-5">
            <div className="row no-gutters cardPhone">
              <div className="col-md-4">
                <img src={cellPhone} className="card-img" alt="..." height="500px" />
              </div>
              <div className="col-md-8">
                <div className="card-body mr-4">
                  <h5 className="card-title">¿Qué es <span className="stuck">Stück</span> ?</h5>
                  <div className="text-art">
                    <p className="card-text"><span className="stuckP">Stück</span> es una plataforma que optimiza el tiempo de
                  busqueda de refacciones de motocicletas.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container d-flex">
        <div className="row">
          <div className="card mt-5">
            <div className="row no-gutters cardPhone2">
              <div className="col-md-4">
                <img src={mapas} className="card-img2" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body ml-5">
                  <h5 className="card-title">¿Qué hace <span className="stuck">Stück</span> ?</h5>
                  <div className="text-art">
                    <p className="card-text"><span className="stuckP">Stück</span> te permite encontrar tus refacciones en los lugares
                   más cercanos a tu ubicación.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  }
}


export default cardsLanding;