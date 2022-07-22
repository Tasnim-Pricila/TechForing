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

function App() {
  return (
    <div>
      <Header></Header>
      {/* <Home></Home> */}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/jobs' element={<Jobs/>}></Route>
        <Route path='/jobs/:id' element={<JobDetails/>}></Route>
        <Route path='/CreateJob' element={<CreateJob/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
