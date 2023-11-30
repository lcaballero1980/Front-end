import React from 'react';
import '../estilos/home.css';
import baile from '../../imagen/img-home/baile.jpg';
import casamiento from '../../imagen/img-home/casamiento.jpg';
import musica from '../../imagen/img-home/musica.jpg';
import Frente from './Frente';

const Home = () => {
  return (
    <div><Frente />
      <div className='holder'>
        <div className="clearfix image-container">
          <h3>Viví una experiencia inolvidable</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
            voluptate soluta enim molestias explicabo, maxime perspiciatis nihil
            beatae at, alias doloribus expedita fugit sequi labore aliquid ab!
            Aspernatur, dolor ducimus. Accusamus earum aperiam adipisci distinctio
            cum nostrum quae fugiat sed tempore fuga amet, numquam sunt eaque eos
            ipsa impedit.</p>
          <img className="img1" src={baile} alt="baile" />
        </div>
        <div className="clearfix image-container">
          <img className="img2" src={casamiento} alt="Casamiento" />
          <h3>No hay límites para soñar</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
            excepturi totam temporibus porro impedit dicta. Distinctio cum
            obcaecati aliquam harum aperiam assumenda nesciunt, voluptates velit
            voluptatem! Velit voluptate commodi deserunt. Laborum sequi, id ipsa,
            inventore dolorum laudantium cum in recusandae nihil ducimus
            praesentium sunt ex ipsum iure! Facere nihil necessitatibus voluptas,
            non ipsum quae voluptates soluta! Quibusdam earum aliquam nisi.
            Distinctio repellendus consequatur soluta beatae temporibus tenetur ad
            quia eaque exercitationem repellat iusto cupiditate atque facilis a
            culpa, dolore rerum quo commodi magnam, ipsa maxime ut veniam!
            Inventore, officia deserunt. Dolorem saepe accusantium dolore nisi
            nostrum nam neque minima, eum libero.</p>
        </div>
        <div className="clearfix image-container">

          <h3>El Catering</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
            excepturi totam temporibus porro impedit dicta. Distinctio cum
            obcaecati aliquam harum aperiam assumenda nesciunt, voluptates velit
            voluptatem! Velit voluptate commodi deserunt. Laborum sequi, id ipsa,
            inventore dolorum laudantium cum in recusandae nihil ducimus
            praesentium sunt ex ipsum iure! Facere nihil necessitatibus voluptas,
            non ipsum quae voluptates soluta! Quibusdam earum aliquam nisi.
            Distinctio repellendus consequatur soluta beatae temporibus tenetur ad
            quia eaque exercitationem repellat iusto cupiditate atque facilis a
            culpa, dolore rerum quo commodi magnam, ipsa maxime ut veniam!
            Inventore, officia deserunt. Dolorem saepe accusantium dolore nisi
            nostrum nam neque minima, eum libero.</p>
          <img className="img2" src={musica} alt="Evento" />
        </div>
        <div>
          <h3>Quienes somos</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
            porro animi nam explicabo numquam hic ratione quam saepe est. Ex
            sequi quidem libero modi fugiat est sint laudantium incidunt
            suscipit. Laboriosam in mollitia sunt amet, voluptate, ducimus ut
            dolorum ratione error velit necessitatibus non quas quisquam
            minima consequuntur totam. Quia perferendis assumenda accusantium
            quis voluptate consequatur cumque beatae, maxime cum. Ipsa maxime
            reprehenderit placeat omnis dolorem fugiat accusantium, molestias,
            repellat quo, officiis nulla animi impedit itaque praesentium illo
            voluptatem repellendus. Recusandae quasi error ad similique
            nesciunt a cupiditate perspiciatis voluptates? Cum veniam beatae
            eligendi pariatur excepturi voluptatibus aliquam facilis facere.
            Ducimus dolorum similique ullam quod reiciendis numquam fugiat
            nemo beatae, non expedita earum quisquam ad omnis temporibus,
            pariatur dolore maiores!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
