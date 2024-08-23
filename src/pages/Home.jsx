import React from 'react'
import Navbar from './../components/Navbar';
import Contact from './../sections/Contact';
import Services from './../sections/Services';
import HowWeDeliver from './../sections/HowWeDeliver';
import Portfolio from './../sections/Portfolio';
import About from './../sections/About';
import Footer from '../sections/Footer';



function Home() {
    return (
        <>
          <div className="raleway bg-image body-bg">
            <Navbar />
            <div className="container mx-auto p-10">
              <Contact/>
              <Services/>
              <HowWeDeliver/>
              <Portfolio/>
              <About/>
              <Footer/>
            </div>
          </div>
        </>
      );
}

export default Home