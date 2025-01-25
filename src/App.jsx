// App.jsx
import { useState } from 'react';
import './App.css';
import Header from './components/header/header';
import RandomUser from './components/randomUser'; 
import Footer from './components/footer/Footer';
import { Menu } from 'lucide-react';

function App() {
 const [view, setView] = useState('grid');
 const [filters, setFilters] = useState({
   search: '',
   sortBy: 'name',
   itemsPerPage: 6
 });

 return (
   <div className="app-wrapper">
     <Header />
     <main className="main-content">
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
     </main>
     <Footer />
   </div>
 );
}

export default App;