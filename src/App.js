import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blog";
function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/about" element={<About/>}></Route>
        <Route exact path="/blog" element={<Blogs/>}></Route>
      </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
