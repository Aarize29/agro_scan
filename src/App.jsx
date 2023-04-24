import { useState } from 'react'
import './App.css'
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import MainPart from "./pages/Prediction/MainPart"
import Auth from './pages/Auth/Auth'
function App() {

  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Auth title="SignIn"/>}/>
        <Route path='/signup' element={<Auth title="SignUp"/>}/>
        <Route path='/main' element={<MainPart/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App
