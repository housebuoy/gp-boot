import React from 'react'
import 'boxicons'
import './Home.css'

const Home = () => {
  return (
    <section className='Home lg:bg-fixed py-32 w-full' id='home'>
        <div className="textArea">
          <div className="w-8/12">
            <h1 className='sm:px-10'>Powerful Digital Solutions With Gp<span>.</span></h1>
            <p>We are team of talented digital marketers</p>
          </div>
            <div className="buttonRow grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-8/12 gap-10 mt-16 lg:w-full lg:px-10">
              <button className='w-full py-10'>
                <span><box-icon name='store-alt' color='#ffc451'></box-icon></span>
                Lorem Ipsum
              </button>
              <button className='py-10'>
                <span><box-icon name='bar-chart-square' color='#ffc451' className='box'></box-icon></span>
                Dolor Sitema
              </button>
              <button className='py-10'>
                <span><box-icon name='calendar-minus' color='#ffc451' ></box-icon></span>
                Sedare Perspiciatis
              </button>
              <button className='py-10'>
                <span><box-icon name='paint-roll' color='#ffc451' ></box-icon></span>
              Magni Dolores
              </button>
              <button className='py-10'>
                <span><box-icon name='data' color='#ffc451' ></box-icon></span>
                Nemos<br></br> Enimade
              </button>
            </div>
        </div>
    </section>
  )
}

export default Home