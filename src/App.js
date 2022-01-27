import React from "react";
import {Route, Routes} from "react-router-dom";
import About from "./pages/about/About";
import Gallery from "./pages/gallery/Gallery";
import Photos from "./pages/photos/Photos";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import Header from "./components/Header/Header";
import HomePages from "./pages/HomePage/HomePages";
import Footer from "./components/Footer/Footer";
import Scrolling from "./components/Scrolling/Scrolling";
import Spinner from "./components/Spinner/Spinner";


class App extends React.Component {
    state = {
        loading: true,
    };

    componentDidMount() {
        this.isLoading = setTimeout(() => {
            this.setState({loading: false})
        }, 2300);
    }

    componentWillUnmount() {
        clearTimeout(this.isLoading);
    }

    timer = () => setTimeout(() => {
        this.setState({loading: false})
    }, 2300);

    render() {
        const {loading} = this.state;
        return (
            loading ? (<Spinner/>)
                : (<>
                        <Header/>
                        <Routes>
                            <Route path="/" element={<HomePages/>}/>
                            <Route path="/about" element={<About/>}/>
                            <Route path="/art" element={<Gallery/>}/>
                            <Route path="/photos" element={<Photos/>}/>
                            <Route path="/blog" element={<Blog/>}/>
                            <Route path="/contact" element={<Contact/>}/>
                        </Routes>

                        <Footer/>
                        <Scrolling/>

                    </> )
        )
    }
}

export default App;
