import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Header.css';

function Header() {
  // Estados para manejar el menú, scroll y visibilidad
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Efecto para manejar el scroll y el redimensionamiento de la ventana
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      
      // Determinar si el header debe cambiar de estilo
      setIsScrolled(currentScrollPos > 50);
      
      // Manejar la visibilidad del header
      if (isMobile) {
        const isScrollingUp = prevScrollPos > currentScrollPos;
        const isAtTop = currentScrollPos < 10;
        const shouldBeVisible = isScrollingUp || isAtTop;
        
        setVisible(shouldBeVisible);
      } else {
        setVisible(true);
      }
      
      setPrevScrollPos(currentScrollPos);
    };

    // Manejar el redimensionamiento de la ventana
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      // Si cambia a desktop, asegurar que el menú esté visible
      if (window.innerWidth > 768) {
        setVisible(true);
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Limpieza de eventos al desmontar
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [prevScrollPos, isMobile]);

  // Alternar el menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Cerrar menú al hacer clic en un enlace
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${!visible ? 'header-hidden' : ''} ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <Link to="/" className="logo-container" onClick={closeMenu}>
          <div className="logo">
            <span className="logo-symbol">GC</span>
          </div>
        </Link>

        {/* Indicador de menú móvil */}
        <div
          className={`menu-indicator ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <span className="indicator-dot"></span>
          <span className="indicator-line"></span>
        </div>
        
        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><Link to="/" className="nav-link" onClick={closeMenu}>Inicio</Link></li>
            <li><Link to="/perfiles" className="nav-link" onClick={closeMenu}>Perfiles</Link></li>
            <li><Link to="/crear-cliente" className="nav-link" onClick={closeMenu}>Crear Cliente</Link></li>
            <li><Link to="/estadisticas" className="nav-link" onClick={closeMenu}>Estadísticas</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;