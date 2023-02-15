import './App.css';
import { Route, Routes } from 'react-router-dom';
import React, { useReducer } from 'react';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import { reducer, initialState } from './components/reducers/userReducer';
export const UserContext = React.createContext()

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>

        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} ></Route>
          <Route path='/signin' element={<Signin />} ></Route>
          <Route path='/signup' element={<Signup />} ></Route>
          <Route path='/profile' element={<Profile />}></Route>
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
