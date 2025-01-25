import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import RandomUser from './components/RandomUser/RandomUser';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';
import ClientForm from './components/ClientForm/ClientForm';

function App() {
  const [view, setView] = useState('grid');
  const [filters, setFilters] = useState({
    search: '',
    sortBy: 'name',
    itemsPerPage: 6
  });

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={
              <>
                <Menu 
                  view={view}
                  setView={setView}
                  filters={filters}
                  setFilters={setFilters}
                />
                <RandomUser 
                  view={view}
                  filters={filters}
                />
              </>
            } />
            <Route path="/crear-cliente" element={<ClientForm />} />
            <Route path="/editar-cliente/:id" element={<ClientForm />} />
            <Route path="/perfiles" element={<RandomUser view={view} filters={filters} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;