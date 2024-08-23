import React from 'react'

function HowWeDeliver() {
    return (
        <>
            <div className='w-full flex flex-col justify-center items-start my-10 text-justify' id='deliver'>
                <p className='text-left text-white text-5xl font-extrabold uppercase my-20'>How We Deliver <br /> High Quality Work</p>
                <div className='flex flex-col lg:flex-row justify-between items-start'>
                    <div className='w-full lg:w-1/3 flex flex-col justify-center items-center text-white my-10 gap-10'>
                        <div className='flex flex-col gap-5'>
                            <p className='text-2xl font-bold'>Communicate with customer</p>
                            <p>Open communication is key to exceptional service. By reaching out to us, you're ensuring that your concerns and needs are addressed promptly and effectively.</p>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <p className='text-2xl font-bold'>Website creation process</p>
                            <p>Our website creation process is designed to ensure your vision comes to life seamlessly. From initial consultation to final launch, we work closely with you to understand your needs and goals.</p>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <p className='text-2xl font-bold'>Testing process</p>
                            <p>Our rigorous testing process ensures that every aspect of your website functions flawlessly. We meticulously check for performance, compatibility, and usability issues, addressing any potential problems before launch.</p>
                        </div>
                    </div>
                    <div className='w-full lg:w-1/3 flex flex-col lg:flex-col justify-center items-center text-white my-10 gap-5'>
                        <p className='w-full text-2xl font-bold text-left'>Design & Develop</p>
                        <p><b>Personalized Design:</b> We begin by understanding your brand and goals to create a custom design that reflects your vision and engages your audience.</p>

                        <p><b>Creative Execution:</b> Our design team translates your ideas into visually stunning layouts that capture your essence and set you apart.</p>

                        <p><b>Seamless Development:</b> We develop the design into a fully functional, user-friendly website, ensuring smooth performance and compatibility across devices.</p>

                        <p><b>Enhanced Satisfaction:</b> This thorough approach ensures a website that not only meets but exceeds your expectations, providing you with a final product that enhances your overall satisfaction.</p>
                    </div>
                </div>
            </div >
        </>
    )
}

export default HowWeDeliver