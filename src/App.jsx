import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Search from './pages/Search'


function App() {

  return (
    <>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/search' element={<Search/>}/>
  <Route path='/login' element={<Login/>}/>
</Routes>
    
    </>
  )
}

export default App
