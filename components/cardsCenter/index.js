import React from 'react';

class cardsCenter extends React.PureComponent {

  render() {
    const graphic = "images/graphicBar.svg"
    const money = "images/alcancia.svg"
    return <div className="bgblack">
      <div className="container">
        <div className="row">
          <div className="card mt-5">
            <div className="row no-gutters cardCenter1">
              <div className="col-md-4">
                <img src={graphic} className="card-img" alt="..." height="500px" />
              </div>
              <div className="col-md-8">
                <div className="card-body mr-4">
                  <h5 className="card-title"> <span className="stuck">Crecimiento en México</span></h5>
                  <div className="text-art">
                    <p className="card-text text-white">En México se ha
                    incrementado más de 90% entre 2015 y 2019, pasando de casi <span className="stuckP">un millón 900 mil</span>  a poco
                      más  <span className="stuckP">cuatro millones</span> de unidades.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container d-flex">
        <div className="row">
          <div className="card mt-5 mb-5">
            <div className="row no-gutters cardCenter2">
              <div className="col-md-4">
                <img src={money} className="card-img2" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body ml-5">
                  <div className="text-art">
                    <p className="card-text text-white">Esto quiere decir que <span className="stuckP">Stück</span> ayudará a la
                    venta de piezas a pequeños y medianos talleres, apoyando la economía local.</p>
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


export default cardsCenter;