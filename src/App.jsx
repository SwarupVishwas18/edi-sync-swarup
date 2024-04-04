import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Main from './components/Main'


function App() {

  return (
    <>
      <Routes>
        <Route path='/login' element={<h1>Login</h1>}></Route>
      </Routes>
      <Header />

      <main className='main-arena'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/profile' element={<h1>Profile</h1>} />
        </Routes >
      </main>
    </>
  )
}

export default App
