import './Menu.css';

function Menu() {
 return (
   <div className="menu-container">
     <div className="menu-filters">
       <h2>Filtros</h2>
       <div className="filter-group">
         <label>Buscar por nombre</label>
         <input type="search" placeholder="Nombre del cliente..." />
       </div>
       
       <div className="filter-group">
         <label>Ordenar por</label>
         <select>
           <option value="nombre">Nombre</option>
           <option value="presupuesto">Presupuesto</option>
           <option value="industria">Industria</option>
         </select>
       </div>

       <div className="filter-group">
         <label>Vista</label>
         <div className="view-options">
           <button className="view-btn active">
             <span className="grid-icon">□□</span>
           </button>
           <button className="view-btn">
             <span className="list-icon">☰</span>
           </button>
         </div>
       </div>
     </div>
   </div>
 );
}

export default Menu;