import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contacto</h3>
          <p>Email: info@generadorclientes.com</p>
          <p>Tel: (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/servicios">Servicios</a></li>
            <li><a href="/nosotros">Nosotros</a></li>
          </ul>
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