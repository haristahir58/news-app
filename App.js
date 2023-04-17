import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import Signup from './Signup';
import Login from './Login';


export default class App extends Component { 
  render() {
    return (
      <div>
        {/* <NavBar/>
        <News/> */}
        {/* <Signup/> */}
        <Login/>


        <Router>
        {/* <Routes>
        <Route exact path='/login' element={<Login/>}></Route>
      
        </Routes> */}
      </Router>


      </div>
    )
  }
}

