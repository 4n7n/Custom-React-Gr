// components/Footer/Footer.jsx
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import './Footer.css';

function Footer() {
 return (
   <footer className="footer">
     <div className="footer-gradient"></div>
     
     <div className="footer-content">
       <div className="footer-section">
         <h3>Explorar</h3>
         <ul>
           <li><Link to="/" className="footer-link">Inicio</Link></li>
           <li><Link to="/perfiles" className="footer-link">Perfiles</Link></li>
           <li><Link to="/crear-cliente" className="footer-link">Crear Cliente</Link></li>
           <li><Link to="/estadisticas" className="footer-link">Estadísticas</Link></li>
         </ul>
       </div>

       <div className="footer-section">
         <h3>Contacto</h3>
         <div className="contact-info">
           <div className="contact-item">
             <MdEmail className="contact-icon" />
             <a href="mailto:info@generadorclientes.com">info@generadorclientes.com</a>
           </div>
           <div className="contact-item">
             <MdPhone className="contact-icon" />
             <a href="tel:+123456789">(123) 456-7890</a>
           </div>
           <div className="contact-item">
             <MdLocationOn className="contact-icon" />
             <p>Ciudad, País</p>
           </div>
         </div>
       </div>

       <div className="footer-section">
         <h3>Redes Sociales</h3>
         <div className="social-links">
           <a href="#facebook" className="social-icon" aria-label="Facebook">
             <FaFacebookF />
           </a>
           <a href="#twitter" className="social-icon" aria-label="Twitter">
             <FaTwitter />
           </a>
           <a href="#linkedin" className="social-icon" aria-label="LinkedIn">
             <FaLinkedinIn />
           </a>
           <a href="#github" className="social-icon" aria-label="GitHub">
             <FaGithub />
           </a>
         </div>
         <div className="newsletter">
           <h4>Newsletter</h4>
           <div className="newsletter-form">
             <input type="email" placeholder="Tu email" />
             <button type="submit">Suscribir</button>
           </div>
         </div>
       </div>
     </div>

     <div className="footer-bottom">
       <div className="footer-bottom-content">
         <p>&copy; 2024 Generador de Clientes</p>
         <div className="footer-links">
           <a href="/privacidad">Privacidad</a>
           <a href="/terminos">Términos</a>
           <a href="/cookies">Cookies</a>
         </div>
       </div>
     </div>
   </footer>
 );
}

export default Footer;