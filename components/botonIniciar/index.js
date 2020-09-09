import React from 'react';
import Link from 'next/link'

class Buttons extends React.PureComponent {


  render() {
    return <div className="perro">
      <button type="submit" className=" btn generalButton">INICIAR SESION</button>
      <p className="small text-white">Aún no tienes cuenta ? <button className="registro"><Link href="/vendedor">Registrate</Link></button></p>
    </div>;
  }
}



export default Buttons;