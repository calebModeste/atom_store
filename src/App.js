import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Acceuil from './pages/Acceuil';
import Header from './components/layout/Header';

function App() {
  
  return (
   <BrowserRouter>
        <Header/>
         <Routes>
          <Route path='/' element={<Acceuil/>}/>
          {/* <Route path='/connexion' element={}/> */}

         </Routes>
   </BrowserRouter>

  );
}

export default App;
