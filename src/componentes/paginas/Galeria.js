import React, { useState } from 'react';
import '../estilos/eventos.css';
import aniversario from '../../imagen/img-evento/Aniversario-1.jpg';
import mesainvitados from '../../imagen/img-evento/mesainvitados.jpeg';
import Bat from '../../imagen/img-evento/Bat.jpg';
import Deck from '../../imagen/img-evento/Deck.jpg';
import Eventosmin from '../../imagen/img-evento/Eventos-min.jpg';
import salon from '../../imagen/img-evento/Salon.jpg';
import recepcion from '../../imagen/img-evento/Recepcion.jpg';
import fiesta from '../../imagen/img-evento/Fiestafinano.jpg';

const Imagen = ({ ruta, abrirImagen }) => {
  return (
    <img
      src={ruta}
      alt={`Imagen ${ruta}`}
      onClick={() => abrirImagen(ruta)}
    />
  );
};

const Eventos = () => {
  const [mostrarImagen, setMostrarImagen] = useState(null);
  const imagenes = [
    `${aniversario}`,
    `${mesainvitados}`,
    `${Bat}`,
    `${Deck}`,
    `${salon}`,
    `${recepcion}`,
    `${fiesta}`,
    `${Eventosmin}`,
  ];

  const abrirImagen = (ruta) => {
    setMostrarImagen(ruta);
  };

  const cerrarImagen = () => {
    setMostrarImagen(null);
  };

  return (
    <div className="galeria-container">
      <div className="galeria">
        <h3>Galeria de Fotos</h3>
        {imagenes.map((imagen, index) => (
          <Imagen key={index} ruta={imagen} abrirImagen={abrirImagen} />
        ))}
      </div>
      {mostrarImagen && (
        <div className="imagen-popup" onClick={cerrarImagen}>
          <img src={mostrarImagen} alt="Im Imagen en Popup" />
        </div>
      )}
    </div>
  );
};

export default Eventos;


