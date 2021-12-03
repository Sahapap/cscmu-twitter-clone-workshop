import { useState, ReactNode } from 'react'
import Profile from './components/profile'
import Home from './components/home'
import Login from './components/login'
import Car from './components/car'
import Cat2 from './components/cat2'
import { Route, Routes,  useLocation, useParams, useNavigate } from 'react-router-dom'
import './App.css';
import FrameComponent from './components/FrameComponent'

const Component = (element: ReactNode) => {
  return (
    <FrameComponent> {element} </FrameComponent>
  )
}

export default function ResponsiveDrawer() {

  return (
    <Routes>
        <Route path='/' element={Component(<Home />)} />
        <Route path='/profile' element={ Component(<Profile/>) } />
        <Route path='/car' element={<Car/>} />
        <Route path='/cat2' element={<Cat2/>} />
        <Route path='/login' element={ <Login/> } />
        
    </Routes>
  );
}