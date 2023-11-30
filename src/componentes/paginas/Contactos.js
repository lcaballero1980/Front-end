import '../estilos/contacto.css';
import { useState } from 'react';
import axios from 'axios';

const Contactos = () => {

  const initialform = {
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  }

  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState('');
  const [formData, setFormData] = useState(initialform);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(oldData => ({
      ...oldData,
      [name]: value
    }));
  }

  const handleSubmit = async e => {
    e.preventDefault();
    setMsg('');
    setSending(true)
    const response = await axios.post('http://localhost:3000/api/contacto', formData);
    setSending(false);
    setMsg(response.data.message);
    if (response.data.error === false) {
      setFormData(initialform)
    }
  }

  return (
    <div className="holder">
      <h3>ENVIANOS TU CONSULTA O SOLICITÁ TU PRESUPUESTO</h3>
      <p>Consultá las condiciones y los servicios incluidos para cada tipo de evento y Solicitanos un presupuesto o vení a visitarnos y Reservá tu fecha!!!</p>
      <div className='fomulario-masinfo'>
        <div className="formulario">
          <form action="/contacto" method="post" onSubmit={handleSubmit}>
            <div className="form-group">
              <label for="nombre">Nombre:</label>
              <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
            </div>
           
            <div className="form-group">
              <label for="correo">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label for="telefono">Telefono:</label>
              <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label for="mensaje">Mensaje:</label>
              <textarea name="mensaje" rows="4" value={formData.mensaje} onChange={handleChange} ></textarea>
            </div>
            <input type='submit' value="Enviar" />
          </form>
          {sending ? <p>Enviendo...</p> : null}
          {msg ? <p>{msg}</p> : null}
        </div>


        <div className="contacto">
          <p><b>Podés contactarnos por estas vías, o bien completar el formulario que se encuentra a continuación</b></p>
          <p><b>(*todos los campos son obligatorios):</b></p>
          <ul className='contacto-info'>
            <li><span>🗺️ Direccion: Av. Estoyalhorno Nª 555</span></li>
            <li><span>📞Telefono: 11111111111</span></li>
            <li><span>📱Celular:1111111111</span></li>
            <li><span>📧Email: contactosalon@gmail.com</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Contactos;