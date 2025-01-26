import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: "Generación de Perfiles",
      description: "Crea perfiles detallados de clientes ideales basados en datos reales y análisis de mercado",
      link: "/perfiles",
      linkText: "Explorar Perfiles",
      icon: "👥"
    },
    {
      title: "Análisis de Mercado",
      description: "Visualiza tendencias, estadísticas y métricas clave para entender mejor tu mercado objetivo",
      link: "/estadisticas",
      linkText: "Ver Estadísticas",
      icon: "📊"
    },
    {
      title: "Gestión de Clientes",
      description: "Administra, actualiza y organiza la información de tus clientes potenciales de manera eficiente",
      link: "/crear-cliente",
      linkText: "Gestionar Clientes",
      icon: "💼"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <div className={`home-container ${isVisible ? 'visible' : ''}`}>
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="gradient-text">Generador</span> de Perfiles
            <br />de Clientes Ideales
          </h1>
          <p className="hero-description">
            Optimiza tu estrategia de negocio identificando y creando
            perfiles precisos de clientes potenciales
          </p>
        </div>
        <div className="hero-animation"></div>
      </section>

      <section className="features-section">
        <h2 className="section-title">Características Principales</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`feature-card ${index === activeFeature ? 'active' : ''}`}
              onMouseEnter={() => setActiveFeature(index)}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <Link to={feature.link} className="feature-link">
                {feature.linkText}
                <span className="arrow">→</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="stats-section">
        <div className="stat-card">
          <h4>Perfiles Generados</h4>
          <span className="stat-number">10k+</span>
        </div>
        <div className="stat-card">
          <h4>Empresas Activas</h4>
          <span className="stat-number">500+</span>
        </div>
        <div className="stat-card">
          <h4>Tasa de Éxito</h4>
          <span className="stat-number">95%</span>
        </div>
      </section>
    </div>
  );
}

export default Home;