import { useState, useEffect, useCallback } from 'react';
import './RandomUser.css';

const NATIONALITIES = [
  { code: '', label: 'Todos' },
  { code: 'US', label: 'Estados Unidos' },
  { code: 'ES', label: 'España' },
  { code: 'BR', label: 'Brasil' },
  { code: 'FR', label: 'Francia' }
];

function RandomUserApi() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    gender: '',
    results: 6,
    nationality: '',
    seed: 'abc'
  });

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams({
        ...filters,
        inc: 'name,location,email,dob,phone,picture,login'
      });
      const response = await fetch(`https://randomuser.me/api/?${params}`);
      
      if (!response.ok) throw new Error('Error al cargar usuarios');
      
      const data = await response.json();
      setUsers(data.results);
    } catch (err) {
      setError(err.message);
      setUsers([]);
    } finally {
      setLoading(false);
    }
  }, [filters]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleFilterChange = (field, value) => {
    setFilters(prev => ({...prev, [field]: value}));
  };

  const renderUserProfile = (user) => (
    <article key={user.login.uuid} className="user-profile">
      <div className="profile-header">
        <img src={user.picture.large} alt={`Perfil de ${user.name.first} ${user.name.last}`} />
        <h2>{`${user.name.first} ${user.name.last}`}</h2>
      </div>
      <div className="profile-details">
        {[
          { label: 'Email', value: user.email },
          { label: 'Edad', value: `${user.dob.age} años` },
          { label: 'Teléfono', value: user.phone },
          { label: 'Ubicación', value: `${user.location.city}, ${user.location.country}` }
        ].map(({ label, value }) => (
          <div key={label} className="detail-item">
            <span className="label">{label}:</span>
            <span>{value}</span>
          </div>
        ))}
      </div>
    </article>
  );

  return (
    <div className="api-container">
      <header className="api-header">
        <h1>Generador de Perfiles de Usuario</h1>
        <p>Crea perfiles de usuario aleatorios para tu proyecto</p>
      </header>
      
      <section className="filter-section">
        <div className="filter-controls">
          <div className="filter-group">
            <label htmlFor="gender-select">Género</label>
            <select
              id="gender-select"
              value={filters.gender}
              onChange={(e) => handleFilterChange('gender', e.target.value)}
            >
              <option value="">Todos</option>
              <option value="male">Masculino</option>
              <option value="female">Femenino</option>
            </select>
          </div>
          
          <div className="filter-group">
            <label htmlFor="nationality-select">País</label>
            <select
              id="nationality-select"
              value={filters.nationality}
              onChange={(e) => handleFilterChange('nationality', e.target.value)}
            >
              {NATIONALITIES.map(nat => (
                <option key={nat.code} value={nat.code}>
                  {nat.label}
                </option>
              ))}
            </select>
          </div>
          
          <div className="filter-group">
            <label htmlFor="results-input">Cantidad</label>
            <input
              id="results-input"
              type="number"
              value={filters.results}
              onChange={(e) => handleFilterChange('results', e.target.value)}
              min="1"
              max="50"
            />
          </div>
        </div>
        
        <button 
          className="generate-button" 
          onClick={fetchUsers}
          disabled={loading}
        >
          {loading ? 'Generando...' : 'Generar Perfiles'}
        </button>
      </section>

      {error && <div className="error-message">{error}</div>}
      
      <section className="users-section">
        {!loading && users.length === 0 && (
          <div className="no-users-message">No se encontraron perfiles</div>
        )}
        {users.map(renderUserProfile)}
      </section>
    </div>
  );
}

export default RandomUserApi;