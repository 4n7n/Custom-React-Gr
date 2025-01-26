import { useState, useEffect } from 'react';
import './ClientForm.css';

function ClientForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    industry: '',
    needs: ''
  });

  const [clients, setClients] = useState([]);
  const [showClients, setShowClients] = useState(false);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('clients');
    if (saved) setClients(JSON.parse(saved));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    let updatedClients;
    if (editingId) {
      updatedClients = clients.map(client => 
        client.id === editingId ? {...formData, id: editingId} : client
      );
    } else {
      updatedClients = [...clients, {...formData, id: Date.now()}];
    }

    localStorage.setItem('clients', JSON.stringify(updatedClients));
    setClients(updatedClients);
    resetForm();
  };

  const handleEdit = (client) => {
    setFormData(client);
    setEditingId(client.id);
  };

  const handleDelete = (id) => {
    if (window.confirm('¿Desea eliminar este cliente?')) {
      const updatedClients = clients.filter(client => client.id !== id);
      localStorage.setItem('clients', JSON.stringify(updatedClients));
      setClients(updatedClients);
      if (editingId === id) resetForm();
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      industry: '',
      needs: ''
    });
    setEditingId(null);
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h2>{editingId ? 'Editar Cliente' : 'Nuevo Cliente'}</h2>
        <button onClick={() => setShowClients(!showClients)} className="toggle-btn">
          {showClients ? 'Ocultar Clientes' : 'Ver Clientes'}
        </button>
      </div>

      <form onSubmit={handleSubmit} className="client-form">
        <div className="input-group">
          <div className="form-group">
            <label>Nombre</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
              placeholder="Nombre completo"
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
              placeholder="email@ejemplo.com"
            />
          </div>
        </div>

        <div className="input-group">
          <div className="form-group">
            <label>Empresa</label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
              placeholder="Nombre de la empresa"
            />
          </div>

          <div className="form-group">
            <label>Teléfono</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              placeholder="+XX XXX XXX XXX"
            />
          </div>
        </div>

        <div className="form-group">
          <label>Industria</label>
          <select
            value={formData.industry}
            onChange={(e) => setFormData({...formData, industry: e.target.value})}
          >
            <option value="">Seleccionar industria...</option>
            <option value="tecnologia">Tecnología</option>
            <option value="salud">Salud</option>
            <option value="educacion">Educación</option>
            <option value="finanzas">Finanzas</option>
          </select>
        </div>

        <div className="form-group">
          <label>Notas</label>
          <textarea
            value={formData.needs}
            onChange={(e) => setFormData({...formData, needs: e.target.value})}
            placeholder="Información adicional..."
            rows="4"
          />
        </div>

        <div className="form-actions">
          {editingId && (
            <button type="button" onClick={resetForm} className="cancel-btn">
              Cancelar
            </button>
          )}
          <button type="submit" className="submit-btn">
            {editingId ? 'Actualizar' : 'Guardar'}
          </button>
        </div>
      </form>

      {showClients && clients.length > 0 && (
        <div className="clients-list">
          <h3>Clientes Registrados ({clients.length})</h3>
          {clients.map(client => (
            <div key={client.id} className="client-card">
              <div className="client-info">
                <h4>{client.name}</h4>
                <p>{client.company}</p>
                <p>{client.email}</p>
                <p>{client.phone}</p>
              </div>
              <div className="client-actions">
                <button onClick={() => handleEdit(client)} className="edit-btn">
                  Editar
                </button>
                <button onClick={() => handleDelete(client.id)} className="delete-btn">
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ClientForm;