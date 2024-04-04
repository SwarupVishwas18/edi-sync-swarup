import { Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import MainArena from './MainArena'
import Login from './Login'
import Oops from './Oops'



function App() {

  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/' element={<MainArena element={<Dashboard />} />} />
        <Route path='/profile' element={<MainArena element={<h1>Profile</h1>} />} />
        <Route path='*' element={<Oops />} />
      </Routes>


    </>
  )
}

export default App
