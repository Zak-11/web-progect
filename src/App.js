import React from "react";
import {Route, Routes} from "react-router-dom";
import About from "./pages/about/About";
import Gallery from "./pages/gallery/Gallery";
import Photos from "./pages/photos/Photos";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import Header from "./components/Header/Header";
import HomePages from "./pages/HomePage/HomePages";







function App() {
  return (
    <div className="App">
       <Header/>


<Routes>

    <Route path="/" element={<HomePages/>} />
    <Route path="/about" element={<About/>}/>
    <Route path="/gallery" element={<Gallery/>}/>
    <Route path="/photos" element={<Photos/>}/>
    <Route path="/blog" element={<Blog/>}/>
    <Route path="/contact" element={<Contact/>}/>

</Routes>
    </div>


  );
}

export default App;
