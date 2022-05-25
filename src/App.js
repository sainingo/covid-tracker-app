import './App.css';
import { Routes, Route } from 'react-router-dom';
import Details from './components/Details/Details';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Search from './components/Search/Search';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
