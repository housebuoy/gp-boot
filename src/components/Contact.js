import React from 'react'
import MapFeature from './MapFeature'


const Contact = () => {
  return (
    <div className='pl-24 pr-10 mt-24 w-full' id='contact'>
        <header class='pb-8'>
            <h2 class='uppercase text-gray font-poppins text-sm font-bold '>contact
                <span class=" w-32 h-px bg-swiper-theme mb-1 mx-4 inline-block " ></span>
            </h2>
            <p class='uppercase text-4xl font-poppins text-black font-semibold'>Contact us</p>
        </header>
        {/* <MapFeature/> */}
        <section className="pt-20 flex flex-col lg:flex-row lg:gap-20">
            <div className="left-info">
                <div className="info flex items-start mb-10">
                    <div className='bg-swiper-theme text-3xl w-14 h-14 flex items-center justify-center mr-4 rounded'>
                        <i class='bx bx-map text-gray-700 '></i>
                    </div>
                    <div>
                        <h4 class='font-raleway text-black font-semibold'>Location:</h4>
                        <p class='font-open-sans'>A108 Adan Street, New York, NY535022</p>
                    </div>
                </div>
                <div className="info flex items-start mb-10">
                    <div className='bg-swiper-theme text-3xl w-14 h-14 flex items-center justify-center mr-4 rounded'>
                        <i class='bx bx-envelope text-gray-700 '></i>
                    </div>
                    <div>
                        <h4 class='font-raleway text-black font-semibold'>Email:</h4>
                        <p class='font-open-sans'>info@example.com</p>
                    </div>
                </div>
                <div className="info flex items-start mb-10">
                    <div className='bg-swiper-theme text-3xl w-14 h-14 flex items-center justify-center mr-4 rounded'>
                        <i class='bx bx-mobile-alt text-gray-700 '></i>
                    </div>
                    <div>
                        <h4 class='font-raleway text-black font-semibold'>Call:</h4>
                        <p class='font-open-sans'>+1 5589 55488 55</p>
                    </div>
                </div>
            </div>
            <form action="" className='flex flex-col items-center text-gray-800 font-light w-full'>
                <div className="flex flex-col gap-10 mb-6 w-full md:flex-row">
                    <input type="text" placeholder='Your Name' className='border w-full md:w-1/2 h-11 rounded pl-3 focus:outline-none focus:border-swiper-theme caret-swiper-theme'/>
                    <input type="text" placeholder='Your Email' className='border w-full md:w-1/2 h-11 rounded pl-3 text-gray-800 font-light focus:outline-none focus:border-swiper-theme caret-swiper-theme'/>
                </div>
                <div className="mb-6 w-full">
                    <input type="text" placeholder='Subject' className='border h-11 rounded pl-3 text-gray-800 font-light focus:outline-none focus:border-swiper-theme caret-swiper-theme w-full'/>
                </div>
                <textarea name="" id="" cols="30" rows="10" placeholder='Message' className='border w-full h-form-text rounded pl-3 pt-3 mb-6 focus:outline-none focus:border-swiper-theme caret-swiper-theme'></textarea>
                <button className='bg-swiper-theme text-gray-800 font-normal mb-6 w-40 h-11 rounded text-base shadow-md hover:shadow-xl opacity-100 hover:opacity-90'>Send Message</button>
            </form>
        </section>

    </div>
  )
}

export default Contact