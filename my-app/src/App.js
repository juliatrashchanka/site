import './App.css';
import Footer from './compon/footer/Footer';
import Header from './compon/header/Header';
import Company from './compon/company/Company';
import Contacts from './compon/contacts/Contacts';
import Feedback from './compon/feedback/Feedback';
import Projects from './compon/projects/Projects';
import Documentation from './compon/documentation/Documentation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='Box'>
        <Header /> 
        <div className="App">
        
     

        <Routes>
          <Route path="/company" element={ <Company /> }/>
          <Route path="/feedback" element={ <Feedback /> }/>
          <Route path="/projects" element={ <Projects /> }/>
          <Route path="/documetation" element={ <Documentation /> }/>
          <Route path="/contacts" element={<Contacts />}/>
        </Routes>
          
        </div>

      
     
      <Footer  />
      </div>
    </BrowserRouter>
)}

export default App;
