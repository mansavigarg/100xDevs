import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom';
import React, { Suspense } from 'react';
// This is without default export 
// import { Dashboard } from './components/dashboard'; 
// import { Landing } from './components/landing';

// Syntax to lazily load the pages in react.
const Dashboard = React.lazy(() => import('./components/dashboard')) ;
const Landing = React.lazy(() => import('./components/landing')) ;



function App() {

  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          {/* Suspense API is for asynchronous components fetching, asynchronous data fetching 
          As browser is fetching Dashboard or Loading page, it makes it asynchronous   */}
          <Route path='/dashboard' element={<Suspense fallback={"loading..."}> <Dashboard /> </Suspense>} />
          <Route path='/' element={<Suspense fallback={"loading..."}> <Landing /> </Suspense>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Appbar(){
  const navigate = useNavigate();

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