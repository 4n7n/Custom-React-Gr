// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import RandomUser from './components/RandomUser/RandomUser';
import ClientForm from './components/ClientForm/ClientForm';
import Statistics from './components/Statistics/Statistics';
import Footer from './components/Footer/Footer';

function App() {
 return (
   <BrowserRouter>
     <div className="app-wrapper">
       <Header />
       <main className="main-content">
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/perfiles" element={<RandomUser />} />
           <Route path="/crear-cliente" element={<ClientForm />} />
           <Route path="/editar-cliente/:id" element={<ClientForm />} />
           <Route path="/estadisticas" element={<Statistics />} />
         </Routes>
       </main>
       <Footer />
     </div>
   </BrowserRouter>
 );
}

export default App;