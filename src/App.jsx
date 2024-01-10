import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './user/pages/login'
import SignUp from './user/pages/signup'
import HomePage from './user/pages/homePage'
import Navbar from './components/user/Navbar'
import Orders from './user/pages/orders'
import Cart from './user/pages/cart'

function App() {

  return (
    <div className='w-full min-h-screen' >
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/orders' element={<Orders/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </div>
  )
}

export default App
