import React from 'react';
import Buttons from '../botonIniciar';

class FormSesion extends React.PureComponent {
  render() {
    return <div>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1" className="adress text-white">CORREO ELECTRONICO</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

        </div>
        <div class="form-group">
          <label for="exampleInputPassword1" className="password text-white">CONTRASEÑA</label>
          <input type="password" class="form-control" id="exampleInputPassword1" />
        </div>
        <Buttons />
      </form>
    </div>;
  }
}



export default FormSesion;