
import Head from 'next/head'
import NavBar from '../components/navBar'
import CardsLanding from '../components/cardsLanding'
import CardsCenter from '../components/cardsCenter'
import Footer from '../components/footer'
import CardsFinal from '../components/cardsFinal'

export default function Home() {
  return <>
    <Head>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <title>stück</title>

      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
        crossorigin="anonymous">

      </link>

    </Head>
    <body className="body1">

      <NavBar />
      <CardsLanding />
      <CardsCenter />
      <CardsFinal />
      <Footer />
    </body>
  </>






}
