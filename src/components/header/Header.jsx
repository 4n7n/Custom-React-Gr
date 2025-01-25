import './Header.css';

function HeaderComponent() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <span className="logo-text">GC</span>
          <h1>Generador Clientes</h1>
        </div>
        
        <nav className="nav-menu">
          <ul>
            <li><a href="/" className="active">Inicio</a></li>
            <li><a href="/perfiles">Perfiles</a></li>
            <li><a href="/estadisticas">Estadísticas</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </nav>

      </div>
    </header>
  );
}

export default HeaderComponent;