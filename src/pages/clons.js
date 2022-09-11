import * as React from "react"
import P1 from "../assets/img/portfolio/1.jpg"
import P2 from "../assets/img/portfolio/2.jpg"
import P3 from "../assets/img/portfolio/3.jpg"
import P4 from "../assets/img/portfolio/4.jpg"
import P5 from "../assets/img/portfolio/5.jpg"
import P6 from "../assets/img/portfolio/6.jpg"
import Seo from "../components/seo"
import Layout from "../components/projectLayout"
import Pagination from '@mui/material/Pagination';
const Clons = () => (
  <>
  <Layout>
  <section className="portfolio-section sec-padding active">
    <div className="container">
      <div className="row">
        <div className="section-title">
          <h2>Clones de paginas web</h2>
        </div>
      </div>
      <div className="row">
        <div className="portfolio-item">
          <div className="portfolio-item-thumbnail">
            <img src={P1} alt="Miniatura de imagen de proyecto" />
          </div>
          <h3 className="portfolio-item-title">Proyecto 1</h3>

          <div className="portfolio-item-details">
            <div className="description">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sint commodi saepe pariatur consequatur magni laudantium quaerat, voluptate consectetur ipsam sapiente deserunt facilis adipisci. Maxime sapiente fugiat veniam. Ipsam, excepturi!</p>
            </div>
            <div className="general-info">
              <ul>
                <li>Año de creación - <span>1990</span></li>
                <li>Tecnologías usadas - <span>Html - css</span></li>
                <li>Rol: <span>FullStack</span></li>
                <a href="www.dominio.com" className="btn-blog" target="_blank">Ver proyecto</a>
              </ul>
            </div>
          </div>
        </div>

        <div className="portfolio-item">
          <div className="portfolio-item-thumbnail">
            <img src={P2} alt="Miniatura de imagen de proyecto" />
          </div>
          <h3 className="portfolio-item-title">Proyecto 2</h3>

          <div className="portfolio-item-details">
            <div className="description">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sint commodi saepe pariatur consequatur magni laudantium quaerat, voluptate consectetur ipsam sapiente deserunt facilis adipisci. Maxime sapiente fugiat veniam. Ipsam, excepturi!</p>
            </div>
            <div className="general-info">
              <ul>
                <li>Año de creación - <span>1990</span></li>
                <li>Tecnologías usadas - <span>Html - css</span></li>
                <li>Rol: <span>FullStack</span></li>
                <a href="www.dominio.com" className="btn-blog" target="_blank">Ver proyecto</a>
              </ul>
            </div>
          </div>
        </div>

        <div className="portfolio-item">
          <div className="portfolio-item-thumbnail">
            <img src={P3} alt="Miniatura de imagen de proyecto" />
          </div>
          <h3 className="portfolio-item-title">Proyecto 3</h3>

          <div className="portfolio-item-details">
            <div className="description">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sint commodi saepe pariatur consequatur magni laudantium quaerat, voluptate consectetur ipsam sapiente deserunt facilis adipisci. Maxime sapiente fugiat veniam. Ipsam, excepturi!</p>
            </div>
            <div className="general-info">
              <ul>
                <li>Año de creación - <span>1990</span></li>
                <li>Tecnologías usadas - <span>Html - css</span></li>
                <li>Rol: <span>FullStack</span></li>
                <a href="www.dominio.com" className="btn-blog" target="_blank">Ver proyecto</a>
              </ul>
            </div>
          </div>
        </div>

        <div className="portfolio-item">
          <div className="portfolio-item-thumbnail">
            <img src={P4} alt="Miniatura de imagen de proyecto" />
          </div>
          <h3 className="portfolio-item-title">Proyecto 4</h3>

          <div className="portfolio-item-details">
            <div className="description">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sint commodi saepe pariatur consequatur magni laudantium quaerat, voluptate consectetur ipsam sapiente deserunt facilis adipisci. Maxime sapiente fugiat veniam. Ipsam, excepturi!</p>
            </div>
            <div className="general-info">
              <ul>
                <li>Año de creación - <span>1990</span></li>
                <li>Tecnologías usadas - <span>Html - css</span></li>
                <li>Rol: <span>FullStack</span></li>
                <a href="www.dominio.com" className="btn-blog" target="_blank">Ver proyecto</a>
              </ul>
            </div>
          </div>
        </div>

        <div className="portfolio-item">
          <div className="portfolio-item-thumbnail">
            <img src={P5} alt="Miniatura de imagen de proyecto" />
          </div>
          <h3 className="portfolio-item-title">Proyecto 5</h3>

          <div className="portfolio-item-details">
            <div className="description">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sint commodi saepe pariatur consequatur magni laudantium quaerat, voluptate consectetur ipsam sapiente deserunt facilis adipisci. Maxime sapiente fugiat veniam. Ipsam, excepturi!</p>
            </div>
            <div className="general-info">
              <ul>
                <li>Año de creación - <span>1990</span></li>
                <li>Tecnologías usadas - <span>Html - css</span></li>
                <li>Rol: <span>FullStack</span></li>
                <a href="www.dominio.com" className="btn-blog" target="_blank">Ver proyecto</a>
              </ul>
            </div>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="portfolio-item-thumbnail">
            <img src={P6} alt="Miniatura de imagen de proyecto" />
          </div>
          <h3 className="portfolio-item-title">Proyecto 6</h3>

          <div className="portfolio-item-details">
            <div className="description">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sint commodi saepe pariatur consequatur magni laudantium quaerat, voluptate consectetur ipsam sapiente deserunt facilis adipisci. Maxime sapiente fugiat veniam. Ipsam, excepturi!</p>
            </div>
            <div className="general-info">
              <ul>
                <li>Año de creación - <span>1990</span></li>
                <li>Tecnologías usadas - <span>Html - css</span></li>
                <li>Rol: <span>FullStack</span></li>
                <a href="www.dominio.com" className="btn-blog" target="_blank">Ver proyecto</a>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="pagination">
      <Pagination count={5} shape="rounded" variant="outlined"/>
    </div>
    </div>
    
  </section>
  
  </Layout>
  </>
)

export const Head = () => <Seo title="Clon de paginas web" />

export default Clons
