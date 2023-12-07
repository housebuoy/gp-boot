import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'
import '../App.css'

const Testimonial = () => {
  return (
    <section className='p-0 bg-gradient h-testimonial bg-fixed bg-cover relative'>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black to-transparent opacity-90"></div>

        <Swiper 
      // install Swiper modules
      modules={[Pagination, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    ><span class='mb-45'>
      <SwiperSlide className='pb-16'>
        <div className="div flex flex-col items-center justify-center mt-14 text-white">
            <div className="w-40 rounded-full border-border border-8 mb-2">
                <img src="https://bootstrapmade.com/demo/templates/Gp/assets/img/testimonials/testimonials-1.jpg" alt="" className='w-40 rounded-full border-slate-200 border-8'/>
            </div>
            <h3>Saul Goodman</h3>
            <h5 className=' text-gray-400'>Ceo and Founder</h5>
            <p className='w-9/12 text-center text-lg font-open-sans leading-3 italic'>
                <i class="bx bxs-quote-alt-left quote-icon-left text-3xl">
                </i> Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                <i class="bx bxs-quote-alt-right quote-icon-left text-3xl "></i>
            </p>
        </div>
        </SwiperSlide>
      <SwiperSlide className='pb-16'>
        <div className="div flex flex-col items-center justify-center mt-14 text-white">
            <div className="w-40 rounded-full border-border border-8 mb-2">
                <img src="https://bootstrapmade.com/demo/templates/Gp/assets/img/testimonials/testimonials-2.jpg" alt="" className='w-40 rounded-full border-slate-200 border-8'/>
            </div>
            <h3>Sarah Wilsson</h3>
            <h5 className=' text-gray-400'>Designer</h5>
            <p className='w-9/12 text-center text-lg font-open-sans leading-3 italic'>
                <i class="bx bxs-quote-alt-left quote-icon-left text-3xl">
                </i>
                  Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                <i class="bx bxs-quote-alt-right quote-icon-left text-3xl "></i>
            </p>
        </div>
        </SwiperSlide>
      <SwiperSlide className='pb-16'>
        <div className="div flex flex-col items-center justify-center mt-14 text-white">
            <div className="w-40 rounded-full border-border border-8 mb-2">
                <img src="https://bootstrapmade.com/demo/templates/Gp/assets/img/testimonials/testimonials-3.jpg" alt="" className='w-40 rounded-full border-slate-200 border-8'/>
            </div>
            <h3>Jena Karlis</h3>
            <h5 className=' text-gray-400'>Store Owner</h5>
            <p className='w-9/12 text-center text-lg font-open-sans leading-3 italic'>
                <i class="bx bxs-quote-alt-left quote-icon-left text-3xl">
                </i> Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                <i class="bx bxs-quote-alt-right quote-icon-left text-3xl "></i>
            </p>
        </div>
        </SwiperSlide>
      <SwiperSlide className='pb-16'>
        <div className="div flex flex-col items-center justify-center mt-14 text-white">
            <div className="w-40 rounded-full border-border border-8 mb-2">
                <img src="https://bootstrapmade.com/demo/templates/Gp/assets/img/testimonials/testimonials-4.jpg" alt="" className='w-40 rounded-full border-slate-200 border-8'/>
            </div>
            <h3>Matt Brandon</h3>
            <h5 className=' text-gray-400'>Freelancer</h5>
            <p className='w-9/12 text-center text-lg font-open-sans leading-3 italic'>
                <i class="bx bxs-quote-alt-left quote-icon-left text-3xl">
                </i>                  
                Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                <i class="bx bxs-quote-alt-right quote-icon-left text-3xl "></i>
            </p>
        </div>
        </SwiperSlide>
      <SwiperSlide className='pb-16'>
        <div className="div flex flex-col items-center justify-center mt-14 text-white">
            <div className="w-40 rounded-full border-border border-8 mb-2">
                <img src="https://bootstrapmade.com/demo/templates/Gp/assets/img/testimonials/testimonials-5.jpg" alt="" className='w-40 rounded-full border-slate-200 border-8'/>
            </div>
            <h3>John Larson</h3>
            <h5 className=' text-gray-400'>Entrepreneur</h5>
            <p className='w-9/12 text-center text-lg font-open-sans leading-3 italic'>
                <i class="bx bxs-quote-alt-left quote-icon-left text-3xl">
                </i> Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                <i class="bx bxs-quote-alt-right quote-icon-left text-3xl "></i>
            </p>
        </div>
        </SwiperSlide>
      
      </span>
    </Swiper>
  );

    </section>
  )
}

export default Testimonial