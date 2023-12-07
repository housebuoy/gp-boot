import React from 'react'
import './About.css'
import Swiper from './Swiper'


const About = () => {
  return (
    <section className='About mt-10 sm:px-14 mb-20' id='about'>
        <div className="upper-div flex flex-col-reverse lg:flex-row w-full px-4 sm:px-14 items-center">
            <div className="text-span w-11/12 my-5 flex flex-col items-center">
                <h2 className='mb-5'>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h2>
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
                <ul>
                    <li>
                        <span><box-icon name='check-double' color='#ffc451' ></box-icon></span>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </li>
                    <li>
                        <span><box-icon name='check-double' color='#ffc451' ></box-icon></span>
                        Duis aute irure dolor in reprehenderit in voluptate velit.
                    </li>
                    <li>
                        <span><box-icon name='check-double' color='#ffc451' ></box-icon></span>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.
                    </li>
                </ul>
                <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
            </div>
            <div className="w-full">
                <img className='w-full object-cover' src="./images/about.jpg" alt="" />
            </div>
        </div>
        <div className="slider-div" class='my-20'>
            <Swiper />
        </div>
        <div className="Features" class='flex flex-col  lg:flex-row lg:gap-10'>
            <div className="image-tag-featues w-full h-full mb-10 sm:px-10">
                <img className='w-full object-cover '  src="https://bootstrapmade.com/demo/templates/Gp/assets/img/features.jpg" alt="" class='w-feature-left-img h-feature-left-img'/>
            </div>
            <div className="text-features" class='flex flex-col justify-center px-5 lg:pr-10'>
                <div className="feature-text-labels" class='flex gap-5 mb-10 items-center'>
                    <div className="feature-icon"><box-icon name='receipt' color='#ffc451' size='lg'></box-icon></div> 
                    <div className="feature-icon-label">
                        <h4 class=' font-raleway text-xl'>Est labore ad</h4>
                        <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                    </div>
                </div>
                <div className="feature-text-labels" class='flex gap-5 mb-10 items-center'>
                    <div className="feature-icon"><box-icon name='cube-alt' color='#ffc451' size='lg'></box-icon></div> 
                    <div className="feature-icon-label">
                        <h4 class=' font-raleway text-xl'>Harum esse qui</h4>
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                    </div>
                </div>
                <div className="feature-text-labels" class='flex gap-5 mb-10 items-center'>
                    <div className="feature-icon"><box-icon name='images' color='#ffc451' size='lg'></box-icon></div> 
                    <div className="feature-icon-label">
                        <h4 class=' font-raleway text-xl'>Aut occaecati</h4>
                        <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                    </div>
                </div>
                <div className="feature-text-labels" class='flex gap-5 mb-10 items-center'>
                    <div className="feature-icon">
                        <box-icon name='shield' color='#ffc451' size='lg'></box-icon>
                    </div> 
                    <div className="feature-icon-label">
                        <h4 class=' font-raleway text-xl' >
                            Beatae veritatis
                        </h4>
                        <p>
                            Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About