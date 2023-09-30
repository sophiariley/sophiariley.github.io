import './App.css';
import NavBar from './components/NavBar';
import {Routes, Route } from 'react-router-dom';
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Home from './pages/Home'

function App() {
  return(
    <>
      <NavBar/>

      <div>
        <Routes>
          <Route exact path = "https://sophiariley.github.io/Personal-Website/" element={<Home/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
    </>
  )
}

export default App;
