import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Footer from './components/Footer';
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import Add from './pages/add/Add';
import View from './pages/view/View';
import Edit from './pages/Edit';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/admin" element={<Dashboard/>} />
        <Route path="/add" element={<Add/>} />
        <Route path="/view" element={<View/>} />
        <Route path="/edit/:eid" element={<Edit/>} />
      </Routes>
      </BrowserRouter>
   
    </>
  );
}

export default App;
