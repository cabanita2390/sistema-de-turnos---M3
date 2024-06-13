
import Home from './views/home/Home'
import Login from './views/login/Login'
import MisTurnos from './views/mis-turnos/MisTurnos'
import CrearTurno from './views/crearTurno/CrearTurno'
import Navbar from './components/navbar/navbar'
import Register from './views/register/Register'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Contact from './views/contact/Contact'
import About from './views/about/About'

function App() {

  return (
    <>
      
      <Navbar/>
        <Routes>

          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />      
          <Route path='/appointments' element={<MisTurnos />} />
          <Route path='/appointments/schedule' element={<CrearTurno />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/contact' element={<Contact />} />

        </Routes>
        
    </>
  )
  
}

export default App
