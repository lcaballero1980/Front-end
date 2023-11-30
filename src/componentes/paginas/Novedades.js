import { useState, useEffect } from "react";
import axios from "axios";
import NovedadItem from '../novedades/NovedadItem';

const Novedades = (props) => {
    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/tareas');
            setNovedades(response.data);
            setLoading(false);
        };
        cargarNovedades();
    }, []);

    return (
        <section className="holder">
            {/* <h2>Novedades</h2> */}
            {
                loading ? (
                    <p>cargando...</p>
                ) : (
                    novedades.map(item => <NovedadItem key={item.id}
                        title={item.titulo} subtitle={item.subtitulo} 
                        imagen={item.imagen} body={item.cuerpo} />)
                )
            }
        </section>
    )
};

export default Novedades;