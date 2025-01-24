import { useState, useEffect } from 'react';

const useRandomUser = (initialGender = '', initialUserCount = 1) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [gender, setGender] = useState(initialGender);
  const [userCount, setUserCount] = useState(initialUserCount);

  // Función para obtener usuarios
  const fetchUsers = async () => {
    setLoading(true);
    setError(null);

    let url = `https://randomuser.me/api/?results=${userCount}`;
    if (gender) url += `&gender=${gender}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Error al obtener los datos de los usuarios');
      }
      const data = await response.json();
      setUsers(data.results);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Llamar a la API cuando el hook se inicializa
  useEffect(() => {
    fetchUsers();
  }, [gender, userCount]); // Se ejecuta cuando cambian `gender` o `userCount`

  return {
    users,
    loading,
    error,
    gender,
    setGender,
    userCount,
    setUserCount,
    fetchUsers,
  };
};

export default useRandomUser;
