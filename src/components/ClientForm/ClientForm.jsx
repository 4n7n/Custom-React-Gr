import React, { useState } from 'react';
import './ClientForm.css';

function ClientForm() {
 const [formData, setFormData] = useState({
   name: '',
   company: '',
   industry: '',
   budget: '',
   email: '',
   phone: '',
   location: '',
   needs: '',
   status: 'active'
 });

 const handleSubmit = (e) => {
   e.preventDefault();
   // Handle form submission
   console.log(formData);
 };

 return (
   <div className="form-container">
     <h2>Crear/Editar Cliente Ideal</h2>
     <form onSubmit={handleSubmit}>
       <div className="form-grid">
         <div className="form-group">
           <label>Nombre Completo *</label>
           <input
             type="text"
             value={formData.name}
             onChange={(e) => setFormData({...formData, name: e.target.value})}
             required
           />
         </div>

         <div className="form-group">
           <label>Empresa</label>
           <input
             type="text"
             value={formData.company}
             onChange={(e) => setFormData({...formData, company: e.target.value})}
           />
         </div>

         <div className="form-group">
           <label>Industria *</label>
           <select
             value={formData.industry}
             onChange={(e) => setFormData({...formData, industry: e.target.value})}
             required
           >
             <option value="">Seleccionar Industria</option>
             <option value="tecnologia">Tecnología</option>
             <option value="salud">Salud</option>
             <option value="educacion">Educación</option>
             <option value="finanzas">Finanzas</option>
           </select>
         </div>

         <div className="form-group">
           <label>Presupuesto Estimado</label>
           <input
             type="number"
             value={formData.budget}
             onChange={(e) => setFormData({...formData, budget: e.target.value})}
           />
         </div>

         <div className="form-group">
           <label>Email *</label>
           <input
             type="email"
             value={formData.email}
             onChange={(e) => setFormData({...formData, email: e.target.value})}
             required
           />
         </div>

         <div className="form-group">
           <label>Teléfono</label>
           <input
             type="tel"
             value={formData.phone}
             onChange={(e) => setFormData({...formData, phone: e.target.value})}
           />
         </div>

         <div className="form-group">
           <label>Ubicación</label>
           <input
             type="text"
             value={formData.location}
             onChange={(e) => setFormData({...formData, location: e.target.value})}
           />
         </div>

         <div className="form-group full-width">
           <label>Necesidades/Notas</label>
           <textarea
             value={formData.needs}
             onChange={(e) => setFormData({...formData, needs: e.target.value})}
             rows="4"
           ></textarea>
         </div>
       </div>

       <div className="form-actions">
         <button type="button" className="btn-secondary">Cancelar</button>
         <button type="submit" className="btn-primary">Guardar Cliente</button>
       </div>
     </form>
   </div>
 );
}

export default ClientForm;