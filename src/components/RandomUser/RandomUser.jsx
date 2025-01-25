import useRandomUser from '../../utils/useRandomUser';

const RandomUser = () => {
  const {
    users,
    loading,
    error,
    gender,
    setGender,
    userCount,
    setUserCount,
    fetchUsers,
  } = useRandomUser(); // Usar el hook personalizado

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Generador de Usuarios Aleatorios</h1>

      {/* Filtros */}
      <div style={{ marginBottom: '20px' }}>
        <label>
          Género:
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            style={{ marginLeft: '10px', padding: '5px' }}
          >
            <option value="">Cualquiera</option>
            <option value="male">Masculino</option>
            <option value="female">Femenino</option>
          </select>
        </label>
        <label style={{ marginLeft: '20px' }}>
          Cantidad de Usuarios:
          <input
            type="number"
            value={userCount}
            onChange={(e) => setUserCount(e.target.value)}
            min="1"
            max="10"
            style={{ marginLeft: '10px', width: '50px', textAlign: 'center' }}
          />
        </label>
        <button
          onClick={fetchUsers}
          style={{
            marginLeft: '20px',
            padding: '5px 10px',
            fontSize: '14px',
            cursor: 'pointer',
          }}
        >
          Generar
        </button>
      </div>

      {/* Estado de carga */}
      {loading && <p>Cargando...</p>}

      {/* Error */}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {/* Usuarios */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        {users.map((user, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #ccc',
              borderRadius: '10px',
              padding: '15px',
              width: '200px',
              textAlign: 'center',
            }}
          >
            <img
              src={user.picture.large}
              alt={`${user.name.first} ${user.name.last}`}
              style={{ borderRadius: '50%', width: '100px', height: '100px' }}
            />
            <h3>{`${user.name.first} ${user.name.last}`}</h3>
            <p>Edad: {user.dob.age}</p>
            <p>Teléfono: {user.phone}</p>
            <p>Dirección: {user.location.city}, {user.location.country}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RandomUser;
