'use client';

import React from 'react';

const NatureCards = () => {
  const cards = [
    {
      image: "/api/placeholder/400/300",
      heading: "Heading",
      buttonColor: "bg-[#E5C3B0]"
    },
    {
      image: "/api/placeholder/400/300",
      heading: "Heading",
      buttonColor: "bg-[#8EC4C5]"
    },
    {
      image: "/api/placeholder/400/300",
      heading: "Heading",
      buttonColor: "bg-[#D772A4]"
    }
  ];

  return (
    <div className="container mx-auto p-6 mt-[8rem]">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <div key={index} className="relative bg-white rounded-br-[6rem]">
            {/* Card Container */}
            <div className="group relative overflow-hidden rounded-xl">
              {/* Image */}
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={card.image}
                  alt={`Nature scene ${index + 1}`}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              
              {/* Heading */}
              <h2 className="absolute bottom-4 left-4 text-xl font-semibold text-white">
                {card.heading}
              </h2>
            </div>

            {/* Circular Button */}
            <div className='bg-black w-[6rem] h-[6rem] absolute right-[-1rem] flex items-center justify-center rounded-l-[2rem] rounded-r-[-2.4rem] bottom-[-2rem]'>
            <div className={`-bottom-3 -right-3 h-12 w-12 rounded-full ${card.buttonColor} shadow-lg transition-transform duration-300 hover:scale-110`}>
              <button
                className="h-full w-full cursor-pointer"
                aria-label={`Button for ${card.heading}`}
              >
                <span className="text-sm text-white">Button</span>
              </button>
            </div>
            </div>
          </div>
        ))}
      </div>

      {/* Red Dot Indicator */}
      <div className="mt-8 flex justify-center">
        <div className="h-2 w-2 rounded-full bg-red-500"></div>
      </div>
    </div>
  );
};

export default NatureCards;