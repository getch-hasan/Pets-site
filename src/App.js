
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nabvar from './Pages/Shared/Nabvar';
import Home from './Pages/Home/Home';
import Cats from './Pages/Cats/Cats';
import Dashboard from './Pages/Dashboard/Dashboard';
import Footer from './Pages/Shared/Footer';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className="App">
      <Nabvar></Nabvar>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/cats' element={<Cats></Cats>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
