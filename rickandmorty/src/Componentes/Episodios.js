import { useLocation } from "react-router-dom";
import  '../Estilos/App.css'
function Episodios() {
  const location = useLocation();
  const { personaje } = location.state || {}; // Verifica si existe state
  const episodios = personaje.episode || [];
 

    return (
        < >
        <div className="background-container" > 
        <h1 style={{color:'white'}}>Episodios del Personaje</h1>
        <div className="episodes-card "  > 
        {episodios.length > 0 ? (
          <ul >
            {episodios.map((episodio,index) => (
              <li key={index}>{episodio}</li>
            ))}
          </ul>
        ) : (
          <p>No hay episodios disponibles para este personaje.</p>
        )}
        </div>
        </div>
      </>
    )


}

export default Episodios;