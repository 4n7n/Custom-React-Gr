// components/Home/Home.jsx
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
 return (
   <div className="home-container">
     <section className="hero-section">
       <h1>Generador de Perfiles de Clientes Ideales</h1>
       <p>Optimiza tu estrategia de negocio identificando y creando perfiles de clientes potenciales</p>
       <Link to="/crear-cliente" className="cta-button">Comenzar Ahora</Link>
     </section>

     <section className="features-grid">
       <div className="feature-card">
         <h3>Generación de Perfiles</h3>
         <p>Crea perfiles detallados de clientes ideales basados en datos reales</p>
         <Link to="/perfiles">Explorar Perfiles</Link>
       </div>

       <div className="feature-card">
         <h3>Análisis de Mercado</h3>
         <p>Visualiza tendencias y estadísticas de empleabilidad por industria</p>
         <Link to="/estadisticas">Ver Estadísticas</Link>
       </div>

       <div className="feature-card">
         <h3>Gestión de Clientes</h3>
         <p>Administra y actualiza información de tus clientes potenciales</p>
         <Link to="/crear-cliente">Gestionar Clientes</Link>
       </div>
     </section>
   </div>
 );
}

export default Home;