import React from "react";
import Header from "./components/header/header";
import { library } from '@fortawesome/fontawesome-svg-core'
import {faAt} from "@fortawesome/free-solid-svg-icons";
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import About from "./pages/about/About";
import Gallery from "./pages/gallery/Gallery";
import Photos from "./pages/photos/Photos";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";




library.add(faAt)

function App() {
  return (
    <div className="App">
       <Header/>

<Routes>

    <Route path="/" element={<HomePage/>} />
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
