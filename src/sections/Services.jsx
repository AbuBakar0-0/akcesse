import React from 'react'
import ServiceCard from '../components/ServiceCard'

function Services() {
  return (
    <>
        <div className='w-full flex flex-col justify-center items-start my-10' id='services'>
            <p className='text-white text-5xl font-bold'>Web & App <br /> Services</p>
            <div className='w-full flex flex-wrap mt-10 gap-2 lg:gap-5 justify-center md:justify-between'>
                <ServiceCard/>
            </div>
        </div>
    </>
  )
}

export default Services