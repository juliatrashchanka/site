import './App.css';
import Footer from './compon/footer/Footer';
import Header from './compon/header/Header';
import Company from './compon/company/Company';
import Contacts from './compon/contacts/Contacts';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='Box'>
        <Header /> 
        <div className="App">
        
       

        <Routes>
          <Route path="/company" element={ <Company /> }/>
          <Route path="/contacts" element={<Contacts />}/>
        </Routes>
          
        </div>

        {/* <div className='fouter'><Footer  /> </div> */}
     
      <Footer  />
      </div>
    </BrowserRouter>
)}

export default App;
