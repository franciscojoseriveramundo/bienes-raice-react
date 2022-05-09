import './css/site.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Search from './components/Search';
import Home from './components/Home';
import Login from './components/Login';
import About from './components/About';
import Footer from './components/Footer';
import Register from './components/Register';
import Recovery from './components/Recovery';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/search" element={<Search/>}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/register" element={<Register/>}></Route>
          <Route exact path="/recovery" element={<Recovery/>}></Route>
          <Route exact path="/about" element={<About/>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
