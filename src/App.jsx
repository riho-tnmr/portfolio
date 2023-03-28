import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//pages
import Home from './pages/Home'
import SingleWork from './pages/SingleWork'
//components
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollTop from "./components/ScrollTop";
//css
import './assets/style/reset.css';
import './assets/style/style.css';

function App() {

  return (
    <>
    <Router>
    <ScrollTop/>
    <Header/>
      <Routes path='/'>
        <Route index element={<Home/>}/>
        <Route path='works'>
          <Route path=":id" element={<SingleWork/>}/>
        </Route>
      </Routes>
    <Footer/>
    </Router>
    </>
  )
}

export default App
