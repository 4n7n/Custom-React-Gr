import { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
import './Statistics.css';

function Statistics() {
  const [employmentData, setEmploymentData] = useState([
    { month: 'Ene', technology: 85, healthcare: 65, education: 45, finance: 75, marketing: 60, sales: 70 },
    { month: 'Feb', technology: 88, healthcare: 68, education: 48, finance: 78, marketing: 65, sales: 73 },
    { month: 'Mar', technology: 92, healthcare: 72, education: 52, finance: 82, marketing: 70, sales: 78 },
    { month: 'Abr', technology: 90, healthcare: 75, education: 55, finance: 85, marketing: 72, sales: 80 },
    { month: 'May', technology: 95, healthcare: 78, education: 58, finance: 88, marketing: 75, sales: 82 },
    { month: 'Jun', technology: 98, healthcare: 80, education: 60, finance: 90, marketing: 78, sales: 85 }
  ]);

  const [selectedView, setSelectedView] = useState('line');
  const [activeIndustry, setActiveIndustry] = useState(null);
  const [customMetric, setCustomMetric] = useState({
    industry: '',
    month: '',
    value: ''
  });

  const chartColors = {
    technology: '#8884d8',
    healthcare: '#82ca9d',
    education: '#ffc658',
    finance: '#ff7300',
    marketing: '#0088fe',
    sales: '#00C49F'
  };

  const addCustomMetric = () => {
    if (customMetric.industry && customMetric.month && customMetric.value) {
      setEmploymentData(data => data.map(item => {
        if (item.month === customMetric.month) {
          return { ...item, [customMetric.industry.toLowerCase()]: parseInt(customMetric.value) };
        }
        return item;
      }));
      setCustomMetric({ industry: '', month: '', value: '' });
    }
  };

  const calculateGrowth = (industry) => {
    const firstValue = employmentData[0][industry];
    const lastValue = employmentData[employmentData.length - 1][industry];
    return ((lastValue - firstValue) / firstValue * 100).toFixed(1);
  };

  const renderChart = () => {
    const ChartComponent = {
      line: LineChart,
      bar: BarChart,
      area: AreaChart
    }[selectedView];

    const DataComponent = {
      line: Line,
      bar: Bar,
      area: Area
    }[selectedView];

    return (
      <ResponsiveContainer width="100%" height={400}>
        <ChartComponent data={employmentData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend onMouseEnter={({dataKey}) => setActiveIndustry(dataKey)}
                 onMouseLeave={() => setActiveIndustry(null)}/>
          {Object.keys(chartColors).map(industry => (
            <DataComponent
              key={industry}
              type="monotone"
              dataKey={industry}
              stroke={chartColors[industry]}
              fill={chartColors[industry]}
              opacity={activeIndustry && activeIndustry !== industry ? 0.3 : 1}
            />
          ))}
        </ChartComponent>
      </ResponsiveContainer>
    );
  };

  return (
    <div className="statistics-container">
      <header className="stats-header">
        <h2>Estadísticas de Empleabilidad</h2>
        <div className="view-controls">
          <button 
            className={`view-btn ${selectedView === 'line' ? 'active' : ''}`}
            onClick={() => setSelectedView('line')}
          >
            Líneas
          </button>
          <button 
            className={`view-btn ${selectedView === 'bar' ? 'active' : ''}`}
            onClick={() => setSelectedView('bar')}
          >
            Barras
          </button>
          <button 
            className={`view-btn ${selectedView === 'area' ? 'active' : ''}`}
            onClick={() => setSelectedView('area')}
          >
            Área
          </button>
        </div>
      </header>

      <div className="growth-indicators">
        {Object.keys(chartColors).map(industry => (
          <div key={industry} className="growth-card" style={{borderColor: chartColors[industry]}}>
            <h4>{industry.charAt(0).toUpperCase() + industry.slice(1)}</h4>
            <p className="growth-value">{calculateGrowth(industry)}%</p>
            <span>Crecimiento</span>
          </div>
        ))}
      </div>

      <div className="chart-section">
        <h3>Tendencias por Industria</h3>
        {renderChart()}
      </div>

      <div className="custom-metrics">
        <h3>Añadir Métrica Personalizada</h3>
        <div className="input-group">
          <select
            value={customMetric.industry}
            onChange={(e) => setCustomMetric({...customMetric, industry: e.target.value})}
          >
            <option value="">Seleccionar Industria</option>
            {Object.keys(chartColors).map(industry => (
              <option key={industry} value={industry}>
                {industry.charAt(0).toUpperCase() + industry.slice(1)}
              </option>
            ))}
          </select>

          <select
            value={customMetric.month}
            onChange={(e) => setCustomMetric({...customMetric, month: e.target.value})}
          >
            <option value="">Seleccionar Mes</option>
            {employmentData.map(item => (
              <option key={item.month} value={item.month}>{item.month}</option>
            ))}
          </select>

          <input
            type="number"
            placeholder="Valor (%)"
            value={customMetric.value}
            onChange={(e) => setCustomMetric({...customMetric, value: e.target.value})}
            min="0"
            max="100"
          />

          <button onClick={addCustomMetric} className="add-metric-btn">
            Añadir Métrica
          </button>
        </div>
      </div>
    </div>
  );
}

export default Statistics;