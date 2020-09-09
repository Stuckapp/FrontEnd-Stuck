import LogoForm from '../../components/LogoForm'
import ButtonUserR from '../../components/botonuserResgistro'
import Head from 'next/head'
import ButtonSellerR from '../../components/botonVendedorRegistro'




export default function sesion1() {

  return (
    <div>
      <Head>
        <title>Stück</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
          crossorigin="anonymous" />
      </Head>
      <body className="body2">
        <LogoForm />
        <ButtonUserR />
        <ButtonSellerR />

      </body>

    </div>

  )
}