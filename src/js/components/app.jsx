// en src/js/components/app.jsx
import React from 'react';
import Navbar from './Navbar'; // <- Corregido
import Card from './Card';     // <- Probablemente también necesite esta corrección
import Hero from './Hero';     // <- Y este también
import Footer from './Footer';



function App() {
  return (
    <div className="body">
      <Navbar />
      <Hero />
      <div className="container mt-5">
        <div className="row justify-content-center">
          {/* Aquí usas tus componentes Card */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center">
            <Card
              imageUrl="https://picsum.photos/id/237/500/325"
              title="Tarjeta Uno"
              text="Este es el contenido de la tarjeta uno."
              buttonText="Find Out More!"
              buttonLink="#"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center">
            <Card
              imageUrl="https://picsum.photos/id/238/500/325"
              title="Tarjeta Dos"
              text="Contenido diferente para la tarjeta dos."
              buttonText="Find Out More!"
              buttonLink="#"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center">
            <Card
              imageUrl="https://picsum.photos/id/239/500/325"
              title="Tarjeta tres"
              text="Contenido diferente para la tarjeta tres."
              buttonText="Find Out More!"
              buttonLink="#"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center">
            <Card
              imageUrl="https://picsum.photos/id/240/500/325"
              title="Tarjeta cuatro"
              text="Contenido diferente para la tarjeta cuatro."
              buttonText="Find Out More!"
              buttonLink="#"
            />
          </div>
        </div>
      </div>
      {/* El Footer va aquí, fuera del contenedor de las tarjetas */}
      <Footer />
    </div>
  );
}

export default App;