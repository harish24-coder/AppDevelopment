import{BrowserRouter,Routes,Route} from 'react-router-dom';
import React from 'react';
import Login from './Login';
import Register from './Register';
import NavBar from './Components/NavBar';
import Sidebar from './Components/Dashboard';
import Service from './Components/Service';
import Contact from './Components/Contact';
import Faq from './Components/Faq';
import SearchFlights from './Components/SearchFlights';
import Dashboard from './Components/Dashboard';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/loginbtn" element={<NavBar/>}/>
        <Route path="/que" element={<Sidebar/>}/>
       <Route path="/product" element={<Service/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/service' element={<Faq/>}/>
       <Route path='/search-flights' element={<SearchFlights/>}/>
       <Route path='/dashboard' element={<Dashboard/>}/>


      </Routes>
     
    
    </BrowserRouter>
  </div>
  );
}

export default App;