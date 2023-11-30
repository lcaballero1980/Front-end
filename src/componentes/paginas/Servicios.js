import '../estilos/servicios.css';
import servicio from '../../imagen/servicio/servicios.png';

const Servicios = () => {
  return (
    <div className='holder'>
      <div className="titulo-eventos">
        <h2 className='servicio'>Servicios</h2>
        <div className="servicio">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae esse nostrum nulla, consequatur atque dolorem. Soluta nobis quidem expedita odio corrupti doloremque, voluptatum sunt at. Quasi, harum. Eveniet, voluptates recusandae.
            Dolorem enim maiores ratione id quisquam sed tempore vero? Ipsam ipsa at ducimus nihil quaerat fuga, eligendi fugit nulla cupiditate culpa reiciendis placeat, adipisci omnis, ex obcaecati veniam sequi quia?
            Repudiandae, obcaecati rerum quo quidem libero deserunt similique doloribus qui odio nostrum illum sequi vitae assumenda nisi? Modi sunt esse perspiciatis fuga cum aliquid odio magni, ea quas, ducimus iusto.</p>
          <img src={servicio} width="1200" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Servicios