import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Timeline from './components/Timeline';
import Register from './components/Register';
import Login from './components/Login';
import NewsCreate from './components/NewsCreate';

import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Timeline />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/login' element={<Login />} />
        <Route path='*' element={<h1>404 Not Found</h1>} />
      </Routes>
      <Footer />
      {/* <NewsCreate /> */}
    </div>
  );
}

export default App;
