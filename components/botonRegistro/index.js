import React from 'react';
import Link from 'next/link'

class ButtonR extends React.PureComponent {


  render() {
    return <div className="perro">
      <button type="submit" className=" btn generalButton"><Link href="">REGISTRARSE</Link> </button>
      <p className="small text-white">Ya tienes cuenta ? <button className="registro"><Link href="../sesion/usuarios">inicia sesion</Link></button></p>
    </div>;
  }
}



export default ButtonR;