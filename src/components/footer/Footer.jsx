// components/Footer/Footer.jsx
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Navegación</h3>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/perfiles">Perfiles</Link></li>
            <li><Link to="/crear-cliente">Crear Cliente</Link></li>
            <li><Link to="/estadisticas">Estadísticas</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contacto</h3>
          <p>Email: info@generadorclientes.com</p>
          <p>Tel: (123) 456-7890</p>
        </div>

        <div className="footer-section">
          <h3>Redes Sociales</h3>
          <div className="social-links">
            <a href="#facebook">Facebook</a>
            <a href="#twitter">Twitter</a>
            <a href="#linkedin">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Generador de Clientes. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;