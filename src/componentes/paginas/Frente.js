import React from 'react';
import '../estilos/frente.css';
import FrenteImg from '../../imagen/img-home/frente.jpeg';

const Frente = () => {
    return (
        <div className='container-frente'>
            <img src={FrenteImg} alt='Frente de salón' />
            <p>CONCRETÁ UNA ENTREVISTA Y RESERVÁ TU FECHA AHORA NUESTRO HORARIO DE ATENCIÓN ES DE MARTES
                A VIERNES DE 18.00 A 20.00HS.
                CAPACIDAD 80 PERSONAS.</p>
            <button><a href="/Contacto">Solicitá tu presupuesto</a></button>
        </div>
    );
}

export default Frente;
