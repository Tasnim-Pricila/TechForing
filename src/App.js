import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Header from './shared/Header/Header';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header></Header>
      {/* <Home></Home> */}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
