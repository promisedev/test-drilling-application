import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './views/home'

function App() {
  return( 
   <Router> 
     <Nav/>
   <Routes>
     <Route  path="/" element={<Home/>}/> 
      
    </Routes>
    <Foot/>
    </Router>
  )  
  ;
}

export default App;
