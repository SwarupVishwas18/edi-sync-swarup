import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Main from './components/Main'

function App() {

  return (
    <>
      <Header />
      <main className='main-arena'>
        <Sidebar />
        <Main />
      </main>
    </>
  )
}

export default App
