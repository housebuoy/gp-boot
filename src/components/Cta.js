import React from 'react'

const Cta = () => {
  return (
        <section className="cta-container" class='bg-cta relative h-64 bg-center bg-cover w-full bg-fixed mb-14  flex items-center justify-center flex-col'>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-transparent opacity-40 pointer-events-none"></div>
            <h1 class='text-white font-raleway text-3xl font-extrabold mb-5'>Call to Action</h1>
            <p class='w-10/12 text-center text-slate-50 font-open-sans text-sm'> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button class='text-white border-2 py-2 px-4 mt-6 font-raleway text-base font-bold  hover:bg-swiper-theme hover:border-swiper-theme hover:text-black  transition duration-300 ease-in-out'>Call to Action</button>
        </section>
  )
}

export default Cta 