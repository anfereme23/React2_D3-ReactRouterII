import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'
import Home from './views/Home'
import Pokemones from './views/Pokemones'
import Detail from './views/Detail'

function App() {
  return (
    <div className='App'>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pokemones' element={<Pokemones />} />
        <Route path='/pokemones/:name' element={<Detail />} />
      </Routes>
    </div>
  )
}
export default App
