import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full'>
        <div className="pl-10 sm:pl-20 pt-10 bg-neutral-900 grid grid-cols-1 md:grid-cols-2  lg:flex-row gap-14 pb-10 w-full">
            <div className="text-white">
                <h1 className='uppercase text-white font-raleway font-extrabold mb-2'>gp<span className='text-swiper-theme'>.</span></h1>
                <p className=' text-white font-raleway font-semibold mb-2'>A108 Adam Street<br/>NY 535022, USA</p>
                <p className=' text-white font-raleway  '><strong>Phone:</strong> +1 5589 55488 55</p>
                <p className=' text-white font-raleway  mb-2'><strong>Email:</strong> info@example.com</p>
                <div className="flex items-center gap-2 ">
                    <div className="bg-gray-800 flex items-center justify-center w-9 h-9 rounded hover:bg-swiper-theme hover:text-black hover:cursor-pointer">
                        <i className="bx bxl-twitter text-2xl"></i>
                    </div>
                    <div className="bg-gray-800 flex items-center justify-center w-9 h-9 rounded hover:bg-swiper-theme hover:text-black hover:cursor-pointer">
                        <i className="bx bxl-facebook-circle text-2xl"></i>
                    </div>
                    <div className="bg-gray-800 flex items-center justify-center w-9 h-9 rounded hover:bg-swiper-theme hover:text-black hover:cursor-pointer">
                        <i className="bx bxl-instagram text-2xl"></i>
                    </div>
                    <div className="bg-gray-800 flex items-center justify-center w-9 h-9 rounded hover:bg-swiper-theme hover:text-black hover:cursor-pointer">
                        <i className="bx bxl-skype text-2xl"></i>
                    </div>
                    <div className="bg-gray-800 flex items-center justify-center w-9 h-9 rounded hover:bg-swiper-theme hover:text-black hover:cursor-pointer">
                        <i className="bx bxl-linkedin-square text-2xl"></i>
                    </div>
                </div>
            </div>
            <div className="UsefulLinks">
                <h4 className='text-white mb-2 font-raleway'>Useful Links</h4>
                <ul className='font-open-sans'>
                    <li className=' flex items-center'><i class='bx bx-chevron-right text-swiper-theme text-2xl'>
                        </i><a href="" className='hover:no-underline text-white hover:text-swiper-theme'>
                            Home
                        </a></li>
                    <li className=' flex items-center'><i class='bx bx-chevron-right text-swiper-theme text-2xl'>
                        </i><a href="" className='hover:no-underline text-white hover:text-swiper-theme'>
                            About Us
                        </a></li>
                    <li className=' flex items-center'><i class='bx bx-chevron-right text-swiper-theme text-2xl'>
                        </i><a href="" className='hover:no-underline text-white hover:text-swiper-theme'>
                            Services
                        </a></li>
                    <li className=' flex items-center'><i class='bx bx-chevron-right text-swiper-theme text-2xl'>
                        </i><a href="" className='hover:no-underline text-white hover:text-swiper-theme'>
                            Terms of Services
                        </a></li>
                    <li className=' flex items-center'><i class='bx bx-chevron-right text-swiper-theme text-2xl'>
                        </i><a href="" className='hover:no-underline text-white hover:text-swiper-theme'>
                            Privacy policy
                        </a></li>
                </ul>
            </div>
            <div className="OurServices">
                <h4 className='text-white mb-2 font-raleway'>Our Services</h4>
                <ul className=' font-open-san'>
                    <li className=' flex items-center'><i class='bx bx-chevron-right text-swiper-theme text-2xl'>
                        </i><a href="" className='hover:no-underline text-white hover:text-swiper-theme'>
                            Web Design
                        </a></li>
                    <li className=' flex items-center'><i class='bx bx-chevron-right text-swiper-theme text-2xl'>
                        </i><a href="" className='hover:no-underline text-white hover:text-swiper-theme'>
                            Web Development
                        </a></li>
                    <li className=' flex items-center'><i class='bx bx-chevron-right text-swiper-theme text-2xl'>
                        </i><a href="" className='hover:no-underline text-white hover:text-swiper-theme'>
                            Services
                        </a></li>
                    <li className=' flex items-center'><i class='bx bx-chevron-right text-swiper-theme text-2xl'>
                        </i><a href="" className='hover:no-underline text-white hover:text-swiper-theme'>
                            Terms of Services
                        </a></li>
                    <li className=' flex items-center'><i class='bx bx-chevron-right text-swiper-theme text-2xl'>
                        </i><a href="" className='hover:no-underline text-white hover:text-swiper-theme'>
                            Privacy policy
                        </a></li>
                </ul>
            </div>
            <div className="div">
                <h4 className='text-white mb-3 font-raleway'>Our Newsletter</h4>
                <p className='w-80 font-open-sans text-white text-sm mb-6'>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                <form action="" method="post">
                    <input type="email" name="email" class="bg-white w-56 h-10 rounded-l outline-none" />
                    <input type="submit" value="Subscribe" class="bg-swiper-theme h-10 text-black font-bold rounded-r px-3 "/>
                </form>
            </div>
        </div>
        <div className="bg-black w-full h-24 flex flex-col items-center justify-center">
            <p className='text-white'>&copy; Copyright <strong>Gp.</strong> All Rights Reserved</p>
            <p className='text-white'>Designed by <a href="https://bootstrapmade.com/" className='hover:no-underline text-swiper-theme'>BootstrapMade</a></p>
        </div>
    </footer>
  )
}

export default Footer