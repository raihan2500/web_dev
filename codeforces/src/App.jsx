import React from 'react'
import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Contests from './pages/Contests'
import Submission from './pages/Submission'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import ProfileLayout from './pages/ProfileLayout'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path = "/" element= { <Home/> } />
        
        <Route 
          path='/profile/:handle' element = { <ProfileLayout/> }
          >
          <Route 
            index element = {Profile}
          />
          <Route path='contests' element = {<Contests/>} />
          <Route path='submissions' element = { <Submission/> } />

        </Route>
        
        <Route path='*' element = { <NotFound/> } />
        
      </Routes>
    </>
  )
}

export default App