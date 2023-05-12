import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import  Table  from '../src/components/Table'
import Favorites from './Page/Favorites'
import Home from './Page/Home'



function App() {


  return (
    <>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/favorites" element={<Favorites/>}></Route>
    
    </Routes>


    </>
  )
}

export default App
