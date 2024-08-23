import React from 'react'

function Contact() {
    return (
        <>
            <div className='bg-white bg-opacity-10 w-full rounded-3xl my-20 p-10 flex flex-col gap-2' id='contact'>
                <h1 className='text-white text-xl'>Your Thoughts, Our Ears. Reach Out Today!</h1>
                <h1 className='text-white text-4xl font-bold'>Free Consultancy Form</h1>
                <div className='flex flex-col md:flex-row gap-3 justify-between items-center mt-4'>
                    <input type="text" className='w-full md:w-1/4 bg-white text-black rounded-full p-3' placeholder='Full Name' />
                    <input type="text" className='w-full md:w-1/4 bg-white text-black rounded-full p-3' placeholder='Phone Number' />
                    <input type="text" className='w-full md:w-1/4 bg-white text-black rounded-full p-3' placeholder='Email' />
                </div>
                <textarea type="text" className='w-full bg-white text-black rounded-xl p-4 mt-1 md:mt-4' placeholder='Message' ></textarea>
                <button className='mt-4 px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-xl'>Ping Me</button>
            </div>
        </>
    )
}

export default Contact