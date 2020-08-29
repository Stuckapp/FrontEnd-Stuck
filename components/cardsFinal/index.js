import React from 'react';

class cardsCenter extends React.PureComponent {

  render() {
    const seller = "images/seller.svg"
    const buyer = "images/buyer.svg"
    const paypal = "images/paypal.svg"
    return <div className="row">
      <div class="col-12 mt-5 ml-3">
        <h5 className="card-title">¿Cómo funciona <span className="stuck">Stück</span> ?</h5>
      </div>
      <div class="col-12 mt-2 ml-5">
        <p className="card-text"><span className="stuckP">Stück</span> es una plataforma en donde
        existen dos tipos de usarios:
</p>
      </div>
      <div className="col-12 col-md-6 mt-5">
        <div class="cardFinal col-12">
          <img src={seller} class="card-img-top" alt="..." />
          <div class="card-body ">
            <p class="card-text">
              <span className="stuckP">Vendedor:</span><br></br>
El vendedor puede subir su inventario de refacciones que tiene a la venta,proporciona
la ubicación de su taller o refaccionaria.</p>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 mt-5">
        <div class="cardFinal col-12">
          <img src={buyer} class="card-img-top" alt="..." />
          <div class="card-body ">
            <p class="card-text"><span className="stuckP">Comprador:</span><br></br>
             El comprador ingresa a la plataforma para buscar las
            piezas que necesita, la plataforma arroja las piezas en existencia de los talleres más
             cercanos a su ubicación.</p>
          </div>
        </div>
      </div>
      <div className="col-12 d-flex justify-content-center mt-5">
        <p className="card-text">¿Cuales son los metodos de pago en <span className="stuckP">Stück
        </span>
        ?</p>
      </div>
      <div className="col-12 d-flex justify-content-center mt-5">
        <img className="paypal" src={paypal} alt="paypal" />
      </div>
    </div>

  }
}



export default cardsCenter;