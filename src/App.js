import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Header from './shared/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Jobs from './components/Jobs/Jobs';
import NotFound from './components/Error/NotFound';
import JobDetails from './components/Jobs/JobDetails';
import CreateJob from './components/CreateJob/CreateJob';
import RequireAuth from './RequireAuth/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<RequireAuth><Home/></RequireAuth>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/jobs' element={<RequireAuth><Jobs/></RequireAuth> }></Route>
        <Route path='/jobs/:id' element={<RequireAuth><JobDetails/></RequireAuth>}></Route>
        <Route path='/CreateJob' element={<RequireAuth><CreateJob/></RequireAuth>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
