import React, { useState, useEffect } from 'react';

const TravelButton = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    const topSection = document.getElementById('topSection');

    if (topSection) {
      topSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
        scrollTimingFunction: 'ease-in-out',
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const topSection = document.getElementById('topSection');
      const topSectionPosition = topSection ? topSection.offsetTop : 0;
      const scrollPosition = window.pageYOffset;

      setShowButton(scrollPosition > topSectionPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed bottom-5 right-5 w-10 h-10 flex items-center justify-center ${showButton ? '' : 'opacity-0'}`}>
      <button onClick={scrollToTop}>
        <a href="#">
          <i className='bx bx-up-arrow-alt text-3xl text-black hover:text-swiper-theme w-10 h-10 bg-swiper-theme hover:bg-black rounded'></i>
        </a>
      </button>
    </div>
  );
};

export default TravelButton;