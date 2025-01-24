import React, { useState, useEffect } from 'react';

const RandomUser = () => {
  const [user, setUser] = useState(null); // Estado para almacenar los datos del usuario
  const [loading, setLoading] = useState(true); // Estado para manejar la carga
  const [error, setError] = useState(null); // Estado para manejar errores

  useEffect(() => {
    // Función para obtener datos del usuario
    const fetchUser = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/');
        if (!response.ok) {
          throw new Error('Error al obtener los datos del usuario');
        }
        const data = await response.json();
        setUser(data.results[0]); // Guardar el primer usuario en el estado
        setLoading(false); // Marcar como cargado
      } catch (err) {
        setError(err.message); // Guardar el mensaje de error
        setLoading(false); // Marcar como cargado aunque haya error
      }
    };

    fetchUser();
  }, []); // El array vacío asegura que esto solo se ejecute una vez al montar el componente

  if (loading) return <p>Cargando...</p>; // Mensaje mientras carga
  if (error) return <p>Error: {error}</p>; // Mostrar error si ocurre

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Usuario Generado Aleatoriamente</h1>
      {user && (
        <div>
          <img
            src={user.picture.large}
            alt={`${user.name.first} ${user.name.last}`}
            style={{ borderRadius: '50%', width: '150px', height: '150px' }}
          />
          <h2>{`${user.name.first} ${user.name.last}`}</h2>
          <p>Email: {user.email}</p>
          <p>País: {user.location.country}</p>
        </div>
      )}
    </div>
  );
};

export default RandomUser;
