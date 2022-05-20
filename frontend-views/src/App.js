import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import './App.css'
import Home from './views/home'
import Login from './views/login'
import Signup from './views/signup'

function App() {
  return( 
   <Router> 
   <Routes>
     <Route  path="/" element={<Home/>}/>
     <Route  path="/login" element={<Login/>}/>
     <Route  path="/signup" element={<Signup/>}/> 
      
    </Routes>
    </Router>
  )  
  ;
}

export default App;
