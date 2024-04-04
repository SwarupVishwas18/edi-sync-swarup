import { Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import MainArena from './MainArena'
import Login from './Login'



function App() {

  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/' element={<MainArena element={<Dashboard />} />} />
        <Route path='/profile' element={<MainArena element={<h1>Profile</h1>} />} />
      </Routes>


    </>
  )
}

export default App
