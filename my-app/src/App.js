
import './App.css';
import Footer from './compon/footer/Footer';
import Header from './compon/header/Header';
import Company from './compon/company/company';
import { BrowserRouter, Route, Routes } from 'react-browser-router';

function App() {
  return (
    <BrowserRouter>
      <div className='Box'>
            <Header /> 
        <div className="App">
        
        
          
        <div className='main_box'>
          <div className='main_text'>Строим и улучшаем!</div>
        </div>
        
        <Company /> 
        <Routes>
          <Route path="/contact" element={<Footer />}/>
        </Routes>
          
        </div>

        <div className='fouter'><Footer  /> </div>
      </div>
      <Footer  />
    </BrowserRouter>
)}

export default App;
