import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Header.css';

function Header() {
 const [isMenuOpen] = useState(false);

 return (
   <header className="header">
     <div className="header-content">
       <Link to="/" className="logo-container">
         <div className="logo">
           <span className="logo-symbol">GC</span>
           <h1 className="logo-text">Generador Clientes</h1>
         </div>
       </Link>
       
       <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
         <ul>
           <li><Link to="/" className="nav-link">Inicio</Link></li>
           <li><Link to="/perfiles" className="nav-link">Perfiles</Link></li>
           <li><Link to="/crear-cliente" className="nav-link">Crear Cliente</Link></li>
           <li><Link to="/estadisticas" className="nav-link">Estadísticas</Link></li>
         </ul>
       </nav>
     </div>
   </header>
 );
}

export default Header;