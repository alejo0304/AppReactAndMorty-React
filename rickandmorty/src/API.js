import React, { useEffect, useState } from 'react';

function API({ondata}) {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
  
    const url = "https://rickandmortyapi.com/api/character";
  
    useEffect(() => {
      const fetchData = async () => {
        let allPosts = [];
        let nextUrl = url; 
  
        try {
          do {
            const response = await fetch(nextUrl);
            if (!response.ok) {
              throw new Error('Error en la solicitud');
            }
  
            const data = await response.json();
            allPosts = [...allPosts, ...data.results];
            nextUrl = data.info.next; 
  
          } while (nextUrl); 
  
          ondata(allPosts); 
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
      
      fetchData();
    }, []); 
    if (loading) return <div>Cargando...</div>;
    if (error) return <div>Error: {error}</div>;
  
    return null; 
  }

export default API;
