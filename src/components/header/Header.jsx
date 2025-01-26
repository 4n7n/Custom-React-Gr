// components/Header/Header.jsx
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <span className="logo-text">GC</span>
          <h1>Generador Clientes</h1>
        </Link>
        
        <nav className="nav-menu">
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/perfiles">Perfiles</Link></li>
            <li><Link to="/crear-cliente">Crear Cliente</Link></li>
            <li><Link to="/estadisticas">Estadísticas</Link></li>
          </ul>
        </nav>

        <div className="header-actions">
          <button className="btn-secondary">Iniciar Sesión</button>
          <button className="btn-primary">Registrarse</button>
        </div>
      </div>
    </header>
  );
}

export default Header;