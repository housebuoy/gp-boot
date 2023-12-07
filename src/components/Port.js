import React, { useState } from 'react';


const Portfolio = () => {
    const [selectedCategory, setSelectedCategory] = useState('All'); // Initialize with 'All'

    const items = [
        {
          id: 1,
          title: 'App 1',
          imageUrl: 'https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/portfolio-1.jpg',
          description: 'left',
          category: 'App',
          style: {
            width: '296px',
            height: '300px',
          },
        },
        {
          id: 2,
          title: 'App 3',
          imageUrl: 'https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/portfolio-6.jpg',
          description: 'left',
          category: 'App',
          style: {
            width: '296px',
            height: '300px',
          },
        },
        {
          id: 3,
          title: 'Web 3',
          imageUrl: 'https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/portfolio-2.jpg',
          description: 'mid',
          category: 'Web',
          style: {
            width: '296px',
            height: '300px',
          },
        },
        {
          id: 4,
          title: 'Web 2',
          imageUrl: 'https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/portfolio-5.jpg',
          description: 'mid',
          category: 'Web',
          style: {
            width: '296px',
            height: '300px',
          },
        },
        {
          id: 5,
          title: 'Web 3',
          imageUrl: 'https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/portfolio-9.jpg',
          description: 'mid',
          category: 'Web',
          style: {
            width: '296px',
            height: '300px',
          },
        },
        {
          id: 6,
          title: 'App2',
          imageUrl: 'https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/portfolio-3.jpg',
          description: 'right',
          category: 'App',
          style: {
            width: '296px',
            height: '300px',
          },
        },
        {
          id: 7,
          title: 'Card 2',
          imageUrl: 'https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/portfolio-4.jpg',
          description: 'right',
          category: 'Card',
          style: {
            width: '296px',
            height: '300px',
          },
        },
        {
          id: 8,
          title: 'Card 1',
          imageUrl: 'https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/portfolio-7.jpg',
          description: 'right',
          category: 'Card',
          style: {
            width: '296px',
            height: '300px',
          },
        },
        {
          id: 9,
          title: 'Card 3',
          imageUrl: 'https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/portfolio-8.jpg',
          description: 'right',
          category: 'Card',
          style: {
            width: '296px',
            height: '300px',
          },
        },
        // Additional portfolio items
      ];

    // Filter the items based on the selected category
    const filteredItems = items.filter(item => {
        if (selectedCategory === 'All') {
            return true;
        }
        return item.category === selectedCategory;
    });

    return (
        <section class='px-10 md:px-24 mb-24 w-fit h-fit' id='portfolio'>
            <header class='pb-8'>
                <h2 class='uppercase text-gray font-poppins text-sm font-bold '>Portfolio
                    <span class=" w-32 h-px bg-swiper-theme mb-1 mx-4 inline-block " ></span>
                </h2>
                <p class='uppercase text-4xl font-poppins text-black font-semibold'>Check our Portfolio</p>
            </header>
            <div className="filter-buttons" class='flex gap-2 font-poppins text-black justify-center mb-14'>
    <button
        className={`filter-button ${selectedCategory === 'All' ? 'active' : ''}`}
        onClick={() => setSelectedCategory('All')}
        class={`px-3 py-1 font-semibold shadow-sm border ${
            selectedCategory === 'All' ? 'bg-swiper-theme' : 'bg-white'
        }`}
    >
        All
    </button>
    <button
        className={`filter-button ${selectedCategory === 'App' ? 'active' : ''}`}
        onClick={() => setSelectedCategory('App')}
        class={`px-3 py-1 font-semibold shadow-sm border ${
            selectedCategory === 'App' ? 'bg-swiper-theme' : 'bg-white'
        }`}
    >
        App
    </button>
    <button
        className={`filter-button ${selectedCategory === 'Card' ? 'active' : ''}`}
        onClick={() => setSelectedCategory('Card')}
        class={`px-3 py-1 font-semibold shadow-sm border ${
            selectedCategory === 'Card' ? 'bg-swiper-theme' : 'bg-white'
        }`}
    >
        Card
    </button>
    <button
        className={`filter-button ${selectedCategory === 'Web' ? 'active' : ''}`}
        onClick={() => setSelectedCategory('Web')}
        class={`px-3 py-1 font-semibold shadow-sm border ${
            selectedCategory === 'Web' ? 'bg-swiper-theme' : 'bg-white'
        }`}
    >
        Web
    </button>
</div>

            <div className="portfolio-grids grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-10">
                
                    {filteredItems.map((item, index) => (
                        <div className="portfolio-grid relative" key={index}>
                            <div className="div relative">
                                <img
                                    src={item.imageUrl}
                                    alt="portfolio-img"
                                    style={item.style}
                                    className="w-76 h-feature-left-img transform scale-100 transition-transform duration-300 hover:scale-110"
                                />
                            </div>
                            <div className="portfolio-overlay absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100 text-white flex flex-col items-start justify-end pl-5 pb-8 " style={item.style}>
                                <h3 className="text-slate-50 font-raleway">{item.title}</h3>
                                <p className="uppercase italic text-slate-200 font-open-sans">{item.category}</p>
                                <span className="inline-flex gap-1">
                                    <button>
                                        <i className="bx bx-plus text-white hover:text-swiper-theme text-4xl"></i>
                                    </button>
                                    <button>
                                        <i className="bx bx-link text-white hover:text-swiper-theme text-4xl"></i>
                                    </button>
                                </span>
                            </div>
                        </div>
                    ))}
                
                {/* Add "mid" and "right" divs with your existing content here */}
            </div>
        </section>
    );
};

export default Portfolio;
