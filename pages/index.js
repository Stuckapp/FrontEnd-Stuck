import styles from '../styles/Home.module.css'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>stück</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"></link>

      </Head>
      <body>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <button className="btn btn-success">probando bootstrap</button>
            </div>
          </div>
        </div>
      </body>



    </div>




  )
}
