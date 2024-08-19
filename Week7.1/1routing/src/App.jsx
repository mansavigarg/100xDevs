import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom';
import { Dashboard } from './components/dashboard';
import { Landing } from './components/landing';

function App() {

  return (
    <div>

      {/* 
      // this is not working beacause useNavigate only allow to get used in the BrowserRouter only 
      <div>
        <button onClick={()=> {
          navigate('/');
        }}>Landing Page</button>

        <button onClick={()=>{
          navigate('/dashboard');
        }}>Dashboard</button>
      </div> 
      */}

      <BrowserRouter>
        {/* //Creating a components of the top bar that was written upside => Appbar  */}
        <Appbar />
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/' element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Appbar(){
  const navigate = useNavigate();
  // used to nevigate through pages and make sure that a hard reload is not done
  // we have to use the useNavigate inside a BrowserRouter and cannot use outside

  return <div>
    <div>
    <button onClick={()=> {
      navigate('/');
    }}>Landing Page</button>

    <button onClick={()=>{
      navigate('/dashboard');
    }}>Dashboard</button>
    </div> 
  </div>

}

export default App;
