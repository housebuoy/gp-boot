import React from 'react'

const Services = () => {
  return (
    <section class='px-6 sm:px-0: md:px-14 lg:px-10 mb-10' id='services'>
        <header class='pb-8'>
                <h2 class='uppercase text-gray font-poppins text-sm font-bold '>Services
                    <span class=" w-32 h-px bg-swiper-theme mb-1 mx-4 inline-block " ></span>
                </h2>
            <p class='uppercase text-4xl font-poppins text-black font-semibold'>Check our services</p>
        </header>
        <div className="grids" class=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 w-11/12'>
    
            <div className="grid" class='flex flex-col items-center w-80 h-80 border p-8 justify-center hover:shadow-xl cursor-pointer transition durati0n-200 ease-in-out'>
                <div className="icon" class='bg-swiper-theme w-16 h-16 flex items-center justify-center' >
                    <box-icon name='dribbble' type='logo'></box-icon>
                </div>
                <h3 class='font-raleway text-black text-xlg text-center hover:text-swiper-theme  transition duration-300 ease-in-out mt-5'>
                    Lorem Ipsum
                </h3>
                <p class='text-center font-open-sans text-sm mt-3'>
                    Voluptatum deleniti atque corrupti quos dolores et wusd molestias excepturi
                </p>
            </div>
            <div className="grid" class='flex flex-col items-center w-80 h-80 border p-8 justify-center hover:shadow-xl cursor-pointer transition durati0n-200 ease-in-out '>
                <div className="icon" class='bg-swiper-theme w-16 h-16 flex items-center justify-center' >
                    <box-icon name='file'></box-icon>
                </div>
                <h3 class='font-raleway text-black text-xlg text-center hover:text-swiper-theme  transition duration-300 ease-in-out mt-5'>
                    Sed ut perspiciatis
                </h3>
                <p class='text-center font-open-sans text-sm mt-3'>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                </p>
            </div>
            <div className="grid" class='flex flex-col items-center w-80 h-80 border p-8 justify-center hover:shadow-xl cursor-pointer transition durati0n-200 ease-in-out'>
                <div className="icon" class='bg-swiper-theme w-16 h-16 flex items-center justify-center' >
                    <box-icon name='tachometer'></box-icon>
                </div>
                <h3 class='font-raleway text-black text-xlg text-center hover:text-swiper-theme  transition duration-300 ease-in-out mt-5'>
                    Magni Dolores
                </h3>
                <p class='text-center font-open-sans text-sm mt-3'>
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                </p>
            </div>
            <div className="grid" class='flex flex-col items-center w-80 h-80 border p-8 justify-center hover:shadow-xl cursor-pointer transition durati0n-200 ease-in-out'>
                <div className="icon" class='bg-swiper-theme w-16 h-16 flex items-center justify-center' >
                    <box-icon name='world' ></box-icon>
                </div>
                <h3 class='font-raleway text-black text-xlg text-center hover:text-swiper-theme  transition duration-300 ease-in-out mt-5'>
                    Nemo Enem
                </h3>
                <p class='text-center font-open-sans text-sm mt-3'>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                </p>
            </div>
            <div className="grid" class='flex flex-col items-center w-80 h-80 border p-8 justify-center hover:shadow-xl cursor-pointer transition durati0n-200 ease-in-out'>
                <div className="icon" class='bg-swiper-theme w-16 h-16 flex items-center justify-center' >
                    <box-icon name='slideshow'></box-icon>
                </div>
                <h3 class='font-raleway text-black text-xlg text-center hover:text-swiper-theme  transition duration-300 ease-in-out mt-5'>
                    Dele Cardo
                </h3>
                <p class='text-center font-open-sans text-sm mt-3'>
                    Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur
                </p>
            </div>
            <div className="grid" class='flex flex-col items-center w-80 h-80 border p-8 justify-center hover:shadow-xl cursor-pointer transition durati0n-200 ease-in-out'>
                <div className="icon" class='bg-swiper-theme w-16 h-16 flex items-center justify-center' >
                    <box-icon name='arch'></box-icon>
                </div>
                <h3 class='font-raleway text-black text-xlg text-center hover:text-swiper-theme  transition duration-300 ease-in-out mt-5'>
                    Divera don
                </h3>
                <p class='text-center font-open-sans text-sm mt-3'>
                    Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur
                </p>
            </div>
        </div>
    </section>
  )
}

export default Services