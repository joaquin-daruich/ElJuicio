import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import { useEffect, useState, useParams } from "react";

function App() {

  const { segmento1, segmento2, segmento3 } = useParams();
  const slug = segmento3 || segmento2 || segmento1;


  if (slug) {



    return (
      <>
     
      </>
    );
  }



  else {
  return (
    <>

      <div className='banner'>
        <div className="wings left-wing"></div>
        <p>Bienvenido!! Empezá a explorar nuestras entradas más recientes.</p>
        <div className="wings right-wing"></div>
      </div>
      <div className="contenido">
        <div className="papiro">
          <h1>Noticias de Todo Tipo</h1>
          <p>
           Bienvenido a nuestra pagina donde estaremos subiendo todas las nuevas noticias de las redes sociales, del mundo , etc.
          </p>
          <p>
         Ojala te encante todo lo que tenemos por ofrecerte lector!
          </p>
          <img class='El-Juicio' src="/trrompet.jpg" alt="Noticias de todo tipo" />

        </div>


      </div>
    </>
  );
}
}
export default App
