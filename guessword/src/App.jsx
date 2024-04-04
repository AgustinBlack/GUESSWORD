import './App.css'
import NavBar from './components/NavBar/NavBar'
import WordContainer from './components/WordContainer/WordContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path={'/jugar'} element={<WordContainer/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
