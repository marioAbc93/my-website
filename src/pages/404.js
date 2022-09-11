import * as React from "react"
import Crying         from "../assets/img/crying.gif"
import Layout from "../components/projectLayout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <section className="home-section align-items-center  active" id="inicio">
      <div className="container">
        <div className="row align-items-center">
          <div className="home-text">
            <h1>Ups</h1>
            <p><strong>La pagina que buscas no existe.. 😐😶😥</strong></p>
          </div>
          <div className="home-img">
            <div className="img-box">
              <img className="hello" src={Crying} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export const Head = () => <Seo title="Página no encontrada" />

export default NotFoundPage
