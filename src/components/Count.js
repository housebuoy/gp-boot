import React, { useState, useEffect } from 'react';

const Counter = ({ endValue, bold, text, icon }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < endValue) {
        setCount(count + 1);
      }
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, [count, endValue]);

  return (
    <div className="count flex gap-2 items-start">
        {icon}
      <div className="w-8/12 text-black">
        <h2>{count}</h2>
        <p class='font-normal text-slate-700'><b>{bold}</b> {text}</p>
      </div>
    </div>
  );
};

const Count = () => {
  return (
    <section className="sm:px-10 mb-10 ">
      <div className="count-image w-full">
        <img className='w-full max-h-96 object-cover' src="https://bootstrapmade.com/demo/templates/Gp/assets/img/counts-img.jpg" alt="" />
      </div>
      <div className="count-text w-full px-5 pt-16">
        <h3 className="font-raleway text-black text-4xl font-bold mb-2">Voluptatem dignissimos provident quasi</h3>
        <p className="font-open-sans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla optio, ea facilis modi pariatur voluptates
          corrupti quaerat accusantium alias aliquam ratione harum dolorum impedit nobis!
        </p>
        <div className="counts-div grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Counter endValue={65} bold='Happy Clients' text='consequuntur voluptas nostrum aliquid ipsam architecto ut.' icon={<box-icon name="smile" color="#ffc451" size="lg"></box-icon>}/>
          <Counter endValue={85} bold='Projects' text='adipisci atque cum quia aspernatur totam laudantium et quia dere tan' icon={<box-icon name="book" color="#ffc451" size="lg"></box-icon>}/>
          <Counter endValue={35} bold='Years of experience' text='aut commodi quaerat modi aliquam nam ducimus aut voluptate non vel' icon={<box-icon name="time-five" color="#ffc451" size="lg"></box-icon>}/>
          <Counter endValue={20} bold='Awards' text='rerum asperiores dolor alias quo reprehenderit eum et nemo pad der' icon={<box-icon name="award" color="#ffc451" size="lg"></box-icon>}/>
        </div>
      </div>
    </section>
  );
};

export default Count;
