// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import Header from './componentes/layout/Header';
// import Nav from './componentes/layout/Nav';
import Footer from './componentes/layout/Footer';

import Contactos from './componentes/paginas/Contactos';
import Home from './componentes/paginas/Home';
import Galeria from './componentes/paginas/Galeria';
import Servicios from './componentes/paginas/Servicios';
import Header from './componentes/layout/Header';
import Novedades from './componentes/paginas/Novedades';

function App() {
  return (
    <div>
      <BrowserRouter>
       <Header /> 
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Galeria" exact element={<Galeria />} />
          <Route path="/Servicios" exact element={<Servicios />} />
          <Route path="/Novedades" exact element={<Novedades />} />
          <Route path="/contacto" exact element={<Contactos />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
