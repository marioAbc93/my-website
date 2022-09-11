import * as React    from "react"
import { Link }      from "gatsby"
import Hello         from "../assets/img/saludo-wbg.gif"
import Yes           from "../assets/img/yes.gif"
import Game          from "../assets/img/icon/game.png"
import Web           from "../assets/img/icon/web.png"
import Dev           from "../assets/img/icon/dev.png"
import Layout        from "../components/layout"
import Seo           from "../components/seo"
import FacebookIcon  from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import LinkedInIcon  from "@mui/icons-material/LinkedIn"
import YouTubeIcon   from "@mui/icons-material/YouTube"
const IndexPage = () => (
  <><Layout>
    <Seo title="Inicio" />
    <section className="home-section align-items-center  active" id="inicio">
      <div className="container">
        <div className="row align-items-center">
          <div className="home-text">
            <p>Hola, soy</p>
            <h1>Mario Barros</h1>
            <h2>Desarrollador web</h2>
            <a href="#sobre-mi" rel="noreferrer" className="btn link-item">
              Sobre mí
            </a>
            <Link to="/jobs" className="btn link-item">Proyectos</Link>
            <a href="#contactame" rel="noreferrer" className="btn link-item">
              Contactame
            </a>
            <a href="https://mbdevelopbucket.s3.us-east-2.amazonaws.com/portfolio/CV-MB-ES.pdf" target="_blank" rel="noreferrer" className="btn">
                Mi CV
              </a>
          </div>
          <div className="home-img">
            <div className="img-box">
              <img className="hello" src={Hello} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="about-section sec-padding " id="sobre-mi">
      <div className="container">
        <div className="row ">
          <div className="section-title">
            <h2>Sobre mí</h2>
          </div>
        </div>
        <div className="row">
          <div className="about-img">
            <div className="img-box">
              <img className="yes" src={Yes} alt="" />
            </div>
          </div>
          <div className="about-text">
            <p>
              Siempre he sido un entusiasta de la tecnología y los productos
              digitales. A lo largo de los años, he usado cientos de
              aplicaciones web y móviles en diferentes industrias. Un dia,
              decidí que sería un desafío divertido intentar diseñar y construir
              el mío propio.
            </p>
            <h3>Habilidades</h3>
            <div className="skills">
              <div className="skill-item">Html</div>
              <div className="skill-item">Css</div>
              <div className="skill-item">Javascript</div>
              <div className="skill-item">Git</div>
              <div className="skill-item">Gatsby</div>
              <div className="skill-item">Wordpress</div>
              <div className="skill-item">Laravel</div>
              <div className="skill-item">Nestjs</div>
              <div className="skill-item">Reactjs</div>
              <div className="skill-item">React Native</div>
              <div className="skill-item">SQL</div>
            </div>
            <div className="about-tabs">
              <button
                type="button"
                className="tab-item active"
                data-tab="#education"
              >
                Educación
              </button>
              <button type="button" className="tab-item" data-tab="#experience">
                Experiencia
              </button>
            </div>
            <div className="tab-content active" id="education">
              <div className="timeline">
                <div className="timeline-item">
                  <span className="course">Curso avanzado de laravel</span>
                  <h4>Platzi</h4>
                </div>
                <div className="timeline-item">
                  <span className="course">Curso de frontend developer</span>
                  <h4>Platzi</h4>
                </div>
                <div className="timeline-item">
                  <span className="course">Curso basico de python</span>
                  <h4>Platzi</h4>
                </div>
                <div className="timeline-item">
                  <span className="course">
                    Curso de algoritmos y pensamiento logico
                  </span>
                  <h4>Platzi</h4>
                </div>
                <div className="timeline-item">
                  <span className="course">Curso de API REST con laravel</span>
                  <h4>Platzi</h4>
                </div>
                <div className="timeline-item">
                  <span className="course">Curso de API REST con PHP</span>
                  <h4>Platzi</h4>
                </div>
                <div className="timeline-item">
                  <span className="course">
                    Curso de Patrones de diseño y buenas practicas con PHP
                  </span>
                  <h4>Platzi</h4>
                </div>
                <div className="timeline-item">
                  <span className="course">
                    Curso de manejo de datos con Eloquent ORM
                  </span>
                  <h4>Platzi</h4>
                </div>
                <div className="timeline-item">
                  <span className="course">
                    Curso de introducción a la terminal y linea de comandos
                  </span>
                  <h4>Platzi</h4>
                </div>
                <div className="timeline-item">
                  <span className="course">Curso practico de React js</span>
                  <h4>Platzi</h4>
                </div>
                <div className="timeline-item">
                  <span className="course">Curso profesional de laravel</span>
                  <h4>Código facilito</h4>
                </div>
                <div className="timeline-item">
                  <span className="course">
                    Curso de introducción a la programación
                  </span>
                  <h4>Código facilito</h4>
                </div>
              </div>
            </div>
            <div className="tab-content" id="experience">
              <div className="timeline">
                <div className="timeline-item">
                  <span className="course">
                    GPH Propiedad Horizontal - FullStack Developer
                  </span>
                  <h4>2018</h4>
                  <ul>
                    <li>
                      <p>PHP - Laravel</p>
                    </li>
                    <li>
                      <p>Bootstrap</p>
                    </li>
                    <li>
                      <p>Javacript - ReactJs</p>
                    </li>
                    <li>
                      <p>Gatsby</p>
                    </li>
                    <li>
                      <p>
                        <strong>Descripción:</strong> Pagina web y plataforma
                        para la gestión y administración de conjuntos
                        residenciales y edificios. Realiza reservas de zonas
                        comunes, Realiza un control de gastos comunes, genera y
                        descarga informes contables entre otras.
                      </p>
                    </li>
                    <li>
                      <p>Integración con Twilio</p>
                    </li>
                    <li>
                      <p>Integración con Google Calendar</p>
                    </li>
                    <li>
                      <p>Integración con Discord</p>
                    </li>
                    <li>
                      <p>Integración con mailchimp</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="timeline">
                <div className="timeline-item">
                  <span className="course">Colocato - FullStack Developer</span>
                  <h4>2019</h4>
                  <ul>
                    <li>
                      <p>PHP - Laravel</p>
                    </li>
                    <li>
                      <p>Javacript - ReactJs</p>
                    </li>
                    <li>
                      <p>Gatsby</p>
                    </li>
                    <li>
                      <p>
                        <strong>Descripción:</strong> Pagina web y plataforma de
                        empresa inmobiliaria que gestiona su operación 100%
                        online. Algunas de sus funciones mas destacadas son las
                        reservas de citas, reservas y solicitudes de
                        reparaciones, emisión de cuentas de cobro recurrentes,
                        entre otras.
                      </p>
                    </li>
                    <li>
                      <p>Integración con Twilio</p>
                    </li>
                    <li>
                      <p>Integración con Api de WhatsApp</p>
                    </li>
                    <li>
                      <p>Integración con Allegra - Software contable</p>
                    </li>
                    <li>
                      <p>Integración con mailchimp</p>
                    </li>
                    <li>
                      <p>Integración con PayU</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="timeline">
                <div className="timeline-item">
                  <span className="course">
                    GPH Propiedad Horizontal - Mobile Developer
                  </span>
                  <h4>2021 -2022</h4>
                  <ul>
                    <li>
                      <p>Javacript - React Native</p>
                    </li>
                    <li>
                      <p>
                        <strong>Descripción:</strong> Desarrollo de 2 Apps para
                        gestionar los modulos de residente y operadores de la
                        actividad comercial que desempeña la compañía.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="timeline">
                <div className="timeline-item">
                  <span className="course">
                    Atlantis Sports - Backend Developer
                  </span>
                  <h4>2022 - presente</h4>
                  <ul>
                    <li>
                      <p>PHP - Laravel</p>
                    </li>
                    <li>
                      <p>Javacript - NestJs</p>
                    </li>
                    <li>
                      <p>Javacript - ReactJs</p>
                    </li>
                    <li>
                      <p>
                        <strong>Descripción:</strong>Pagina de apuestas
                        deportivas: Desarrollo de API's REST para gestión y
                        control de eventos y logros deportivos. Apoyo en vistas
                        de usuario y otros componentes reutilizables en parte
                        visual del proyecto
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="about-section sec-padding " id="proyectos">
      <div className="container">
        <div className="row ">
          <div className="section-title">
            <h2>Mis proyectos</h2>
          </div>
        </div>
        <div className="row project">
          <div className="card">
          <Link to="/games" className="link-item">
            <img className="icon" src={Game} alt="" />
            <h4>Juegos</h4>
          </Link>
        </div>
        <div className="card">
          <Link to="/jobs" className="link-item">
            <img className="icon" src={Web} alt="" />
            <h4>Experiencia</h4>
          </Link>
        </div>
        <div className="card">
          <Link to="/clons" className="link-item">
            <img className="icon" src={Dev} alt="" />
            <h4>Clon de webs</h4>
          </Link>
        </div>
      </div>
    </div>
  </section><section className="about-section sec-padding " id="tutoriales">
      <div className="container">
        <div className="row ">
          <div className="section-title">
            <h2>Mis tutoriales</h2>
          </div>
        </div>
        <div className="row">
          <ul className="posts">
            <li className="post">
              <h4>Titulo</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempora, nemo adipisci! Numquam repellat ratione placeat velit
                accusamus? Totam quas facere ipsa harum corrupti veritatis
                labore voluptate quidem repellendus delectus. Sapiente.
              </p>
              <a href="https://www.google.com/" rel="noreferrer" className="btn-blog">
                Seguir leyendo
              </a>
            </li>
          </ul>
          <ul className="posts">
            <li className="post">
              <h4>Titulo</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempora, nemo adipisci! Numquam repellat ratione placeat velit
                accusamus? Totam quas facere ipsa harum corrupti veritatis
                labore voluptate quidem repellendus delectus. Sapiente.
              </p>
              <a href="https://www.google.com/" rel="noreferrer" className="btn-blog">
                Seguir leyendo
              </a>
            </li>
          </ul>
          <ul className="posts">
            <li className="post">
              <h4>Titulo</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempora, nemo adipisci! Numquam repellat ratione placeat velit
                accusamus? Totam quas facere ipsa harum corrupti veritatis
                labore voluptate quidem repellendus delectus. Sapiente.
              </p>
              <a href="https://www.google.com/" rel="noreferrer" className="btn-blog">
                Seguir leyendo
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section><section className="home-section align-items-center" id="contactame">
      <div className="container">
        <div className="section-title">
          <h3>Contactame 🙂</h3>
        </div>
        <div className="row align-items-center gap-icon">
          <a className="social" href="https://www.facebook.com/mario.b.carrillo">
            <FacebookIcon fontSize="large" />
          </a>
          <a className="social" href="https://www.instagram.com/mariobarrosc/">
            <InstagramIcon fontSize="large" />
          </a>
          <a className="social" href="https://www.linkedin.com/in/mario-barros-carrillo-5a5195130/">
            <LinkedInIcon fontSize="large" />
          </a>
          <a className="social" href="https://www.youtube.com/channel/UClXA1ZBCc2eJusWkx0xKihw">
            <YouTubeIcon fontSize="large" />
          </a>
        </div>
      </div>
    </section>
  </Layout></>
)

export const Head = () => <Seo title="Inicio" />

export default IndexPage
