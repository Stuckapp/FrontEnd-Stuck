import React from 'react';
import Link from 'next/link'

class ButtonUserR extends React.PureComponent {
  render() {
    return <div>
      <button type="submit" className=" btn generalButton"><Link href="./comprador">USUARIO</Link> </button>

    </div>

  }
}



export default ButtonUserR;