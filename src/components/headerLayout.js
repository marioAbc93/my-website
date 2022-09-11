import * as React from "react"
import { Link } from "gatsby"
const Header = () => (

  <>
  <header className="header">
    <div className="container">
      <div className="row flex-end">
      <Link to="/" className="back">Volver al inicio</Link>
        {/*<button type="button" className="nav-toggler">
          <span></span>
          <div>
          </div>
        </button>
        <nav className="nav">
          <div className="nav-inner">
            <ul>
              <li><a href="#inicio" className="nav-item link-item">Inicio</a></li>
              <li><a href="#sobre-mi" className="nav-item link-item">Sobre mí</a></li>
              <li><a href="#proyectos" className="nav-item link-item">Proyectos</a></li>
              <li><a href="#contactame" className="nav-item link-item">Contactame</a></li>
              <li><a href="#tutoriales" className="nav-item link-item">Tutoriales</a></li>
            </ul>
          </div>
          </nav>*/}
        <div>
        </div>
      </div>
    </div>
  </header>
  </>
)


export default Header
