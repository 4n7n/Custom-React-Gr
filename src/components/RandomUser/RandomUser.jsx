// components/Api/RandomUserApi.jsx
import { useState, useEffect } from 'react';
import './RandomUser.css';

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

 const fetchUsers = async () => {
   setLoading(true);
   try {
     const params = new URLSearchParams({
       ...filters,
       inc: 'name,location,email,dob,phone,picture'
     });
     const response = await fetch(`https://randomuser.me/api/?${params}`);
     if (!response.ok) throw new Error('Error al cargar usuarios');
     const data = await response.json();
     setUsers(data.results);
   } catch (err) {
     setError(err.message);
   } finally {
     setLoading(false);
   }
 };

 useEffect(() => {
   fetchUsers();
 }, []);

 const handleFilterChange = (field, value) => {
   setFilters(prev => ({...prev, [field]: value}));
 };

 return (
   <div className="api-container">
     <header className="api-header">
       <h1>Generador de Perfiles de Usuario</h1>
       <p>Crea perfiles de usuario aleatorios para tu proyecto</p>
     </header>

     <section className="filter-section">
       <div className="filter-controls">
         <div className="filter-group">
           <label>Género</label>
           <select 
             value={filters.gender}
             onChange={(e) => handleFilterChange('gender', e.target.value)}
           >
             <option value="">Todos</option>
             <option value="male">Masculino</option>
             <option value="female">Femenino</option>
           </select>
         </div>

         <div className="filter-group">
           <label>País</label>
           <select
             value={filters.nationality}
             onChange={(e) => handleFilterChange('nationality', e.target.value)}
           >
             <option value="">Todos</option>
             <option value="US">Estados Unidos</option>
             <option value="ES">España</option>
             <option value="BR">Brasil</option>
             <option value="FR">Francia</option>
           </select>
         </div>

         <div className="filter-group">
           <label>Cantidad</label>
           <input
             type="number"
             value={filters.results}
             onChange={(e) => handleFilterChange('results', e.target.value)}
             min="1"
             max="50"
           />
         </div>
       </div>

       <button className="generate-button" onClick={fetchUsers}>
         Generar Perfiles
       </button>
     </section>

     {loading && <div className="loading-overlay">Cargando perfiles...</div>}
     {error && <div className="error-message">{error}</div>}

     <section className="users-section">
       {users.map((user, idx) => (
         <article key={idx} className="user-profile">
           <div className="profile-header">
             <img src={user.picture.large} alt="Profile" />
             <h2>{`${user.name.first} ${user.name.last}`}</h2>
           </div>
           <div className="profile-details">
             <div className="detail-item">
               <span className="label">Email:</span>
               <span>{user.email}</span>
             </div>
             <div className="detail-item">
               <span className="label">Edad:</span>
               <span>{user.dob.age} años</span>
             </div>
             <div className="detail-item">
               <span className="label">Teléfono:</span>
               <span>{user.phone}</span>
             </div>
             <div className="detail-item">
               <span className="label">Ubicación:</span>
               <span>{`${user.location.city}, ${user.location.country}`}</span>
             </div>
           </div>
         </article>
       ))}
     </section>
   </div>
 );
}

export default RandomUserApi;