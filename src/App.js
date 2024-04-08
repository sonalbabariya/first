
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Crud from './components/Crud';
import Navbar from './components/Navbar';
import Table from './components/Table';
import FormA from './components/FormA';
import CrudA from './components/CrudA';

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
      <Navbar/>
       <Routes>
        <Route path='/' element={<CrudA/>}/>
        <Route path='/table' element={<Table/>}/>
        <Route path='/edit/:id' element={<CrudA/>}/>
       </Routes>
      </BrowserRouter> */}
      <FormA/>
    </div>
  );
}

export default App;
