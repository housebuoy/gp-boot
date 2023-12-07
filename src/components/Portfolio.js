import React, { useState } from 'react'

const Portfolio = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
  
    const handleCategoryChange = (category) => {
      setSelectedCategory(category);
    };

    const portfolioItems = [
        {
          id: 1,
          title: 'App 1',
          image: 'https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/portfolio-1.jpg',
          description: 'left',
          category: 'card',
        },
        {
          id: 2,
          title: 'App 3',
          image: 'https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/portfolio-6.jpg',
          description: 'left',
          category: 'app',
        },
        {
          id: 3,
          title: 'Web 3',
          image: 'https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/portfolio-2.jpg',
          description: 'mid',
          category: 'web',
        },
        {
          id: 4,
          title: 'Web 2',
          image: 'https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/portfolio-5.jpg',
          description: 'mid',
          category: 'web',
        },
        {
          id: 5,
          title: 'Web 3',
          image: 'https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/portfolio-9.jpg',
          description: 'mid',
          category: 'web',
        },
        {
          id: 6,
          title: 'App2',
          image: 'https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/portfolio-3.jpg',
          description: 'right',
          category: 'app',
        },
        {
          id: 7,
          title: 'Card 2',
          image: 'https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/portfolio-4.jpg',
          description: 'right',
          category: 'card',
        },
        {
          id: 8,
          title: 'Card 1',
          image: 'https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/portfolio-7.jpg',
          description: 'right',
          category: 'card',
        },
        // Additional portfolio items
      ];
  
    const filteredItems = selectedCategory === 'all'
      ? portfolioItems
      : portfolioItems.filter(item => item.category === selectedCategory);
  return (
    <section class='pl-24 mb-10' id='portfolio'>
        <header class='pb-8'>
            <h2 class='uppercase text-gray font-poppins text-sm font-bold '>Portfolio
                <span class=" w-32 h-px bg-swiper-theme mb-1 mx-4 inline-block " ></span>
            </h2>
            <p class='uppercase text-4xl font-poppins text-black font-semibold'>Check our Portfolio</p>
        </header>
        <div className="buttons" class='flex gap-2 font-poppins text-black justify-center mb-14'>
            <button onClick={() => handleCategoryChange('all')} class='bg-swiper-theme px-3 py-1 font-semibold shadow-sm border'>ALL</button>
            <button onClick={() => handleCategoryChange('app')} class='bg-white px-3 py-1 font-semibold shadow-sm border'>APP</button>
            <button onClick={() => handleCategoryChange('card')} class='bg-white px-3 py-1 font-semibold shadow-sm border'>CARD</button>
            <button onClick={() => handleCategoryChange('web')} class='bg-white px-3 py-1 font-semibold shadow-sm border'>WEB</button>            
        </div>




        <div className="portfolio-grids grid grid-cols-3 gap-10 w-5/6">
            <div className="left flex flex-col gap-10">

                <div className="portfolio-grid relative">
                    <div className="div relative ">
                        <img src="https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/portfolio-1.jpg" alt="" class='w-76 h-feature-left-img basis-4/12 transition-transform duration-300 transform hover:scale-110'/>
                    </div>
                    <div class="portfolio-overlay absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100 text-white flex flex-col items-start justify-end pl-5 pb-8 pointer-events-none">
                        <h3 class=' text-slate-50 font-raleway'>App 1</h3>
                        <p class=' uppercase italic text-slate-200 font-open-sans'>App</p>
                        <span class='inline-flex gap-1'>
                            <button><i class='bx bx-plus text-white hover:text-swiper-theme text-4xl'></i></button>
                            <button><i class='bx bx-link  text-white hover:text-swiper-theme text-4xl'></i></button>
                        </span>
                    </div>
                </div>
                <div className="portfolio-grid relative">
                    <div className="div relative ">
                        <img src="https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/portfolio-6.jpg" alt="" class='w-76 h-feature-left-img basis-4/12 transition-transform duration-300 transform hover:scale-110'/>
                    </div>
                    <div class="portfolio-overlay absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100 text-white flex flex-col items-start justify-end pl-5 pb-8">
                        <h3 class=' text-slate-50 font-raleway'>App 3</h3>
                        <p class=' uppercase italic text-slate-200 font-open-sans'>App</p>
                        <span class='inline-flex gap-1'>
                            <button><i class='bx bx-plus text-white hover:text-swiper-theme text-4xl'></i></button>
                            <button><i class='bx bx-link  text-white hover:text-swiper-theme text-4xl'></i></button>
                        </span>
                    </div>
                </div>
            </div>
            <div className="mid flex flex-col gap-10">
                <div className="portfolio-grid relative">
                        <div className="div relative ">
                            <img src="https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/portfolio-2.jpg" alt="" class='w-76 h-52 basis-4/12 transition-transform duration-300 transform hover:scale-110'/>
                        </div>
                        <div class="portfolio-overlay absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100 text-white flex flex-col items-start justify-end pl-5 pb-8">
                            <h3 class=' text-slate-50 font-raleway'>Web 3</h3>
                            <p class=' uppercase italic text-slate-200 font-open-sans'>Web</p>
                            <span class='inline-flex gap-1'>
                                <button><i class='bx bx-plus text-white hover:text-swiper-theme text-4xl'></i></button>
                                <button><i class='bx bx-link  text-white hover:text-swiper-theme text-4xl'></i></button>
                            </span>
                        </div>
                    </div>
                    <div className="portfolio-grid relative">
                    <div className="div relative ">
                        <img src="https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/portfolio-5.jpg" alt="" class='w-76 h-feature-left-img basis-4/12 transition-transform duration-300 transform hover:scale-110'/>
                    </div>
                    <div class="portfolio-overlay absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100 text-white flex flex-col items-start justify-end pl-5 pb-8">
                        <h3 class=' text-slate-50 font-raleway'>Web 2</h3>
                        <p class=' uppercase italic text-slate-200 font-open-sans'>Web</p>
                        <span class='inline-flex gap-1'>
                            <button><i class='bx bx-plus text-white hover:text-swiper-theme text-4xl'></i></button>
                            <button><i class='bx bx-link  text-white hover:text-swiper-theme text-4xl'></i></button>
                        </span>
                    </div>
                </div>
                <div className="portfolio-grid relative">
                        <div className="div relative ">
                            <img src="https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/portfolio-9.jpg" alt="" class='w-76 h-52 basis-4/12 transition-transform duration-300 transform hover:scale-110'/>
                        </div>
                        <div class="portfolio-overlay absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100 text-white flex flex-col items-start justify-end pl-5 pb-8 pointer-events-none">
                            <h3 class=' text-slate-50 font-raleway'>Web 3</h3>
                            <p class=' uppercase italic text-slate-200 font-open-sans'>Web</p>
                            <span class='inline-flex gap-1'>
                                <button><i class='bx bx-plus text-white hover:text-swiper-theme text-4xl'></i></button>
                                <button><i class='bx bx-link  text-white hover:text-swiper-theme text-4xl'></i></button>
                            </span>
                        </div>
                    </div>
                </div>
            <div className="right flex flex-col gap-10">
                <div className="portfolio-grid relative">
                    <div className="div relative ">
                        <img src="https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/portfolio-3.jpg" alt="" class='w-76 h-52 basis-4/12 transition-transform duration-300 transform hover:scale-110'/>
                    </div>
                    <div class="portfolio-overlay absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100 text-white flex flex-col items-start justify-end pl-5 pb-8">
                        <h3 class=' text-slate-50 font-raleway'>App 2</h3>
                        <p class=' uppercase italic text-slate-200 font-open-sans'>App</p>
                        <span class='inline-flex gap-1'>
                            <button><i class='bx bx-plus text-white hover:text-swiper-theme text-4xl'></i></button>
                            <button><i class='bx bx-link  text-white hover:text-swiper-theme text-4xl'></i></button>
                        </span>
                    </div>
                </div>
                <div className="portfolio-grid relative">
                    <div className="div relative ">
                        <img src="https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/portfolio-4.jpg" alt="" class='w-76 h-52 basis-4/12 transition-transform duration-300 transform hover:scale-110'/>
                    </div>
                    <div class="portfolio-overlay absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100 text-white flex flex-col items-start justify-end pl-5 pb-8">
                        <h3 class=' text-slate-50 font-raleway'>Card 2</h3>
                        <p class=' uppercase italic text-slate-200 font-open-sans'>Card</p>
                        <span class='inline-flex gap-1'>
                            <button><i class='bx bx-plus text-white hover:text-swiper-theme text-4xl'></i></button>
                            <button><i class='bx bx-link  text-white hover:text-swiper-theme text-4xl'></i></button>
                        </span>
                    </div>
                </div>
                <div className="portfolio-grid relative">
                    <div className="div relative ">
                        <img src="https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/portfolio-7.jpg" alt="" class='w-76 h-52 basis-4/12 transition-transform duration-300 transform hover:scale-110'/>
                    </div>
                    <div class="portfolio-overlay absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100 text-white flex flex-col items-start justify-end pl-5 pb-8">
                        <h3 class=' text-slate-50 font-raleway'>Card 1</h3>
                        <p class=' uppercase italic text-slate-200 font-open-sans'>Card</p>
                        <span class='inline-flex gap-1'>
                            <button><i class='bx bx-plus text-white hover:text-swiper-theme text-4xl'></i></button>
                            <button><i class='bx bx-link  text-white hover:text-swiper-theme text-4xl'></i></button>
                        </span>
                    </div>
                </div>
                <div className="portfolio-grid relative">
                    <div className="div relative ">
                        <img src="https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/portfolio-8.jpg" alt="" class='w-76 h-52 basis-4/12 transition-transform duration-300 transform hover:scale-110'/>
                    </div>
                    <div class="portfolio-overlay absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100 text-white flex flex-col items-start justify-end pl-5 pb-8">
                        <h3 class=' text-slate-50 font-raleway'>Card 3</h3>
                        <p class=' uppercase italic text-slate-200 font-open-sans'>Card</p>
                        <span class='inline-flex gap-1'>
                            <button><i class='bx bx-plus text-white hover:text-swiper-theme text-4xl'></i></button>
                            <button><i class='bx bx-link  text-white hover:text-swiper-theme text-4xl'></i></button>
                        </span>
                    </div>
                </div>
            </div>
            
            
            
        </div>   
    </section>
  )
}

export default Portfolio