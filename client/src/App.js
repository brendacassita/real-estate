import logo from './logo.svg';
import './App.css';
import Navbar from './components/shared/NavBar';
import { Routes, Route, useParams} from 'react-router-dom';
import Home from './components/shared/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import NoMatch from './components/shared/NoMatch';
import HomeClass from './components/shared/HomeClass';
import FetchUser from './components/shared/FetchUser';
import ProtectedRoute from './components/shared/ProtectRoute';
import Available from './components/pages/Available';
import Cities from './components/pages/Cities';
import FindHomes from './components/pages/FindHomes';
import CityCost from './components/pages/CityCost';

// Fetch user: it is going to see if the user is logged in(valid user)
function App() {
  return (
    <div>
      <Navbar />
      {/* When our app first mounts FetchUser Runs */}
      <FetchUser>
        <>
          <Routes>
            {/* Unprotected */}
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/' element={<Home />}/>
            <Route path='/available' element={<Available />}/>
            <Route path='/cities' element={<Cities />}/>
            <Route path='/find_homes' element={<FindHomes />}/>
            <Route path='/city_cost' element={<CityCost />}/>
           
                {/* protected in routes inside of here you need to logged in*/}
                {/* else you go to login page*/}
            <Route element={<ProtectedRoute />}>
              <Route path='/home' element={<HomeClass yo={'yoyo'} />}/>
            </Route>  
            <Route path='*' element={<NoMatch />}/>
          </Routes>
        </>
      </FetchUser>
      <p>Footer for all pages</p>
    </div>
  );
}

export default App;
© 2022 GitHub, Inc.
Terms
Privacy
Security
Status
