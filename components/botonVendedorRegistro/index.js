import React from 'react';
import Link from 'next/link'

class ButtonSellerR extends React.PureComponent {
  render() {
    return <div>
      <button type="submit" className=" btn UserResgisBtn"><Link href="/vendedor">VENDEDOR</Link> </button>

    </div>

  }
}



export default ButtonSellerR