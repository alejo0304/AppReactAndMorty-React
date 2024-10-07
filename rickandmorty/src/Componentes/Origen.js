import { useLocation } from "react-router-dom";
import '../Estilos/App.css'
function Origen() {
  const location = useLocation();
  const { personaje } = location.state || {}; // Verifica si existe state
  const origin = personaje.origin || {}; // Objeto de origen
  const locationData = personaje.location || {}; // Objeto de ubicación


  return (
    <>
      <div className="background-container">
        <div className="container">
        <div className="character-origen">
        <h1 style={{ color: 'white' }}>Origen y Ubicacion</h1>
          <img
            src={personaje.image}
            alt={personaje.name}
          />
          <h3 style={{ color: 'white' }}>Origen:</h3>
          <p style={{ color: 'white' }}>{origin.name || 'No disponible'}</p>
          <h3 style={{ color: 'white' }}>Ubicación:</h3>
          <p style={{ color: 'white' }}> {locationData.name || 'No disponible'}</p>
        </div>
      </div>
      </div>
    </>
  )


}

export default Origen;