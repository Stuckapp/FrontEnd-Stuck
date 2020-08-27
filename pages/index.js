import styles from '../styles/Home.module.css'
import Head from 'next/head'
import NavBar from '../components/navBar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>stück</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"></link>

      </Head>
      <body>
        <NavBar></NavBar>

      </body>



    </div>




  )
}
