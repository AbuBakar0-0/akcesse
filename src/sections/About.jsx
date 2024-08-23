import React from 'react'
import line from '../assets/Line 1.png';
import { HashLink } from 'react-router-hash-link';


function About() {
    return (
        <>
            <div className='w-full flex-col justify-center items-center my-10' id="about">
                <p className='text-white text-5xl font-extrabold uppercase my-10 md:my-20'>About</p>
                <div className='w-full flex flex-col md:flex-row justify-between items-center'>
                    <p className='text-white w-full md:w-1/2 text-lg md:text-2xl text-justify'>
                    At akcesse.com, we are dedicated to delivering cutting-edge software solutions that drive innovation and efficiency. Our team of experienced developers and engineers leverages the latest technologies to create customized software tailored to meet your unique business needs. From streamlined applications to robust systems, we are committed to helping you achieve your goals and stay ahead in a rapidly evolving digital landscape.
                    </p>
                    <HashLink to="#contact" className='px-6 py-3 text-2xl text-white bg-gradient-to-r from-primary to-secondary rounded-xl mt-10 md:mt-0'>Contact Us</HashLink>
                </div>
            </div>
            <img src={line} alt="" className='w-full'/>
        </>
    )
}

export default About