import * as React from "react"
import PropTypes from "prop-types"
// import { Link } from "gatsby"
import Moon       from "../assets/img/icon/moon.png"
import Sun       from "../assets/img/icon/sunn.png"
import plane        from "../assets/img/plane.png"
const Header = ({ siteTitle }) => (

  <><div className="sun">
    </div><div className="moon">
    </div><div className="bg">
    </div><img className="plane" src={plane} alt="" />
    <header className="header">
    <div className="container">
      <div className="row flex-end">
        <button className="switch" id="switch">
          <span><img className="switch-icon" src={Moon}/></span>
          <span><img className="switch-icon" src={Sun}/></span>
        </button>
        <button type="button" className="nav-toggler">
          <span></span>
          <div>
          </div>
        </button>
        <nav className="nav">
          <div className="nav-inner">
            <ul>
              <li><a href="#inicio" className="nav-item link-item">Inicio</a></li>
              <li><a href="#sobre-mi" className="nav-item link-item">Sobre mí</a></li>
              {/* <li><a href="#proyectos" className="nav-item link-item">Proyectos</a></li> */}
              <li><a href="#contactame" className="nav-item link-item">Contactame</a></li>
              {/*<li><a href="#tutoriales" className="nav-item link-item">Tutoriales</a></li>*/}
            </ul>
          </div>
        </nav>
        <div>
        </div>
      </div>
    </div>
  </header></>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
