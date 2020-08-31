import React from 'react';
import ButtonR from '../botonRegistro';

class buyerForm extends React.PureComponent {


  render() {
    return <div>
      <form>
        <div class="form-group1">
          <label for="completeName" className="sellerForm text-white">NOMBRE COMPLETO</label>
          <input type="name" class="form-control" id="exampleInputEmail2" aria-describedby="namHelp" />

        </div>
        <div class="form-group1">
          <label for="emailAdress" className="sellerForm text-white">CORREO ELECTRONICO</label>
          <input type="emailAdress" class="form-control" id="exampleInputEmail2" />
        </div>
        <div class="form-group1">
          <label for="emailAdress" className="sellerForm text-white">CONTRASEÑA</label>
          <input type="emailAdress" class="form-control" id="exampleInputEmail2" />
        </div>
        <div class="form-group1">
          <label for="emailAdress" className="sellerForm text-white">CONFIRMACION DE CONTRASEÑA</label>
          <input type="emailAdress" class="form-control" id="exampleInputEmail2" />
        </div>
      </form>
      <ButtonR />
    </div>
  }
}



export default buyerForm;