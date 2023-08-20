
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Edit from './components/Edit';
import Detail from './components/Detail';
function App() {
  return (
   
<>
<BrowserRouter>
       <Navbar/>
  <Routes>
  <Route path='/' element={<Home/>} />
        
  <Route path='/Register' element={<Register/>}/>
 <Route path='/edit/:id' element={<Edit/>}/>
 <Route path='/view/:id' element={<Detail/>}/>
</Routes>
    </BrowserRouter>
   
    
  
   </>
  );
}

export default App;
