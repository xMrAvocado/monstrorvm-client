import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div id="aboutDivCSS">
      <p className="descripcionProyecto">
            Página web creada con React, la cual provee un listado de los monstruos del juego Hunt:Showdown según su categoría y páginas con los detalles de cada uno de ellos.<br/> <br/> Además de ver el listado, el usuario tienen la capacidad de añadir, eliminar o editar elementos.<br/> <br/>

            <span style={{textDecoration:"underline"}}>Posibles funcionalidades</span>: Que el usuario pueda seleccionar las fotos sin tener que usar un enlace.
      </p>
      <div className="datosEstudiante">
        <img src="https://res.cloudinary.com/dh8naz2ht/image/upload/v1741774814/imagen_samuel_zeoqlg.jpg" alt="samuel" width="200px" />
        <h3>Samuel Pérez Besada</h3>
        <div className="enlacesEstudiante">
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/samuel-p%C3%A9rez-besada-136373231/"
          >
            LinkedIn
          </a>
          <a className="github" href="https://github.com/xMrAvocado">
            GitHub
          </a>
        </div>
        <p className="descripcionEstudiante">
          Proactivo, asertivo, con capacidades sociales y me gusta trabajar en
          equipo. <br />
          Constante y con ganas de aprender.
        </p>
      </div>
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
}

export default About;
