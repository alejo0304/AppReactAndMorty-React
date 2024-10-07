
import React, { useState } from 'react';
import API from '../API';
import { Link } from 'react-router-dom';
import  '../Estilos/App.css'

function Main(){

    const [personaje, setPersonaje] = useState([]);

    const handleDataFetched = (data) => {
      setPersonaje(data); 
    };
    return(
      <>
        <API ondata={handleDataFetched} />
        <div className="background-container">
          <h1 style={{color: 'white'}}>Personajes </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {personaje.map((personaje) => (
              <div key={personaje.id} className="character-card">
                <img 
                  src={personaje.image} 
                  alt={personaje.name} 
                  style={{ borderRadius: '10px', width: '100%' }} 
                />
                <h2>{personaje.name}</h2>
                <p>Estado: {personaje.status}</p>
                <p>Especie: {personaje.species}</p>
                <div className="additional-column" style={{ marginTop: '10px' }}>
                  <Link to={`/episodios/${personaje.id}`} state={{personaje}}>Episodios</Link>
                  <br/>
                  <br/>
                  <Link to={`/informacion/${personaje.id}`} state={{personaje}}>Informacion adicional</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    )

};


export default Main;