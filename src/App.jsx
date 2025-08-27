import React from 'react'
import "./App.css";
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Service from './components/Service/Service';
import Resume from './components/Resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';

function App() {
  return (
    <>
      <Sidebar />
      <main className='main'>
        <Home />
        <About />
        <Service />
        <Portfolio />
        <Contact />
      </main>
    </>
  )
}

export default App;
