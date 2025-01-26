// components/Statistics/Statistics.jsx
import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './Statistics.css';

function Statistics() {
 const [employmentData, setEmploymentData] = useState([
   { month: 'Ene', technology: 85, healthcare: 65, education: 45, finance: 75 },
   { month: 'Feb', technology: 88, healthcare: 68, education: 48, finance: 78 },
   { month: 'Mar', technology: 92, healthcare: 72, education: 52, finance: 82 },
   // Más datos mensuales...
 ]);

 const [customMetric, setCustomMetric] = useState({
   industry: '',
   month: '',
   value: ''
 });

 const addCustomMetric = () => {
   if (customMetric.industry && customMetric.month && customMetric.value) {
     setEmploymentData(data => data.map(item => {
       if (item.month === customMetric.month) {
         return { ...item, [customMetric.industry.toLowerCase()]: parseInt(customMetric.value) };
       }
       return item;
     }));
   }
 };

 return (
   <div className="statistics-container">
     <h2>Estadísticas de Empleabilidad</h2>
     
     <div className="chart-section">
       <h3>Tendencias por Industria</h3>
       <LineChart width={800} height={400} data={employmentData}>
         <CartesianGrid strokeDasharray="3 3" />
         <XAxis dataKey="month" />
         <YAxis />
         <Tooltip />
         <Legend />
         <Line type="monotone" dataKey="technology" stroke="#8884d8" />
         <Line type="monotone" dataKey="healthcare" stroke="#82ca9d" />
         <Line type="monotone" dataKey="education" stroke="#ffc658" />
         <Line type="monotone" dataKey="finance" stroke="#ff7300" />
       </LineChart>
     </div>

     <div className="custom-metrics">
       <h3>Añadir Métrica Personalizada</h3>
       <div className="input-group">
         <select 
           value={customMetric.industry}
           onChange={(e) => setCustomMetric({...customMetric, industry: e.target.value})}
         >
           <option value="">Seleccionar Industria</option>
           <option value="Technology">Tecnología</option>
           <option value="Healthcare">Salud</option>
           <option value="Education">Educación</option>
           <option value="Finance">Finanzas</option>
         </select>

         <select 
           value={customMetric.month}
           onChange={(e) => setCustomMetric({...customMetric, month: e.target.value})}
         >
           <option value="">Seleccionar Mes</option>
           <option value="Ene">Enero</option>
           <option value="Feb">Febrero</option>
           <option value="Mar">Marzo</option>
           {/* Más meses... */}
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