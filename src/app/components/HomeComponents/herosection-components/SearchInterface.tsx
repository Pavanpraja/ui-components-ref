"use client";

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Search } from 'lucide-react';

const services = [
  "Find Business",
  "Service Experts",
  "Local Jobs",
  "Explore Travel",
  "Events",
  "Products",
  "Coupons & deals",
  "Blogs"
];

const cities = [
  "Satna",
];

const SearchInterface = () => {
  const [selectedService, setSelectedService] = useState("Select Services");
  const [selectedCity, setSelectedCity] = useState("Select City");
  const [servicesOpen, setServicesOpen] = useState(false);
  const [citiesOpen, setCitiesOpen] = useState(false);
  const [searchService, setSearchService] = useState("");
  const [searchCity, setSearchCity] = useState("");

  const serviceRef = useRef(null);
  const cityRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (serviceRef.current && !serviceRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
      if (cityRef.current && !cityRef.current.contains(event.target)) {
        setCitiesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredServices = services.filter(service =>
    service.toLowerCase().includes(searchService.toLowerCase())
  );

  const filteredCities = cities.filter(city =>
    city.toLowerCase().includes(searchCity.toLowerCase())
  );

  return (
    <div className="flex gap-2 max-[700px]:flex-col bg-white rounded-xl shadow-sm">
      <div className="relative" ref={serviceRef}>
        <button
          onClick={() => setServicesOpen(!servicesOpen)}
          className="flex items-center gap-[3rem] px-5 py-4 text-gray-600 font-semibold opacity-[.8] hover:bg-gray-50 rounded"
        >
          <div className='flex gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#8592c1"><path d="M480-118 120-398l66-50 294 228 294-228 66 50-360 280Zm0-202L120-600l360-280 360 280-360 280Zm0-280Zm0 178 230-178-230-178-230 178 230 178Z" /></svg>
            {selectedService}
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="M480-360 280-560h400L480-360Z" /></svg>
        </button>
        {servicesOpen && (
          <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg border border-gray-200 z-50">
            <div className='flex gap-2'>
              <input
                type="text"
                placeholder="Search services..."
                value={searchService}
                onChange={(e) => setSearchService(e.target.value)}
                className="w-full p-2 border-b border-gray-200 focus:outline-none"
              />
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#999999"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg>
            </div>
            <div className="max-h-60 overflow-auto">
              {filteredServices.map((service, index) => (
                <div
                  key={service}
                  onClick={() => {
                    setSelectedService(service);
                    setServicesOpen(false);
                    setSearchService("");
                  }}
                  className={`px-3 py-2 hover:bg-green-100 cursor-pointer ${index === 0 ? 'bg-green-100' : ''}`}
                >
                  {service}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="relative" ref={cityRef}>
        <button
          onClick={() => setCitiesOpen(!citiesOpen)}
          className="flex items-center gap-[3rem] max-[700px]:w-full justify-between px-5 py-4 text-gray-600 font-semibold opacity-[.8] hover:bg-gray-50 rounded"
        >
          <div className='flex gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#8592c1"><path d="M440-40v-80q-125-14-214.5-103.5T122-438H42v-80h80q14-125 103.5-214.5T440-836v-80h80v80q125 14 214.5 103.5T838-518h80v80h-80q-14 125-103.5 214.5T520-120v80h-80Zm40-158q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Z" /></svg>
            {selectedCity}
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="M480-360 280-560h400L480-360Z" /></svg>
        </button>
        {citiesOpen && (
          <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg border border-gray-200 z-50">
            <div className='flex '>
              <input
                type="text"
                placeholder="Search cities..."
                value={searchCity}
                onChange={(e) => setSearchCity(e.target.value)}
                className="w-full p-2 border-b border-gray-200 focus:outline-none"
              />
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#999999"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg>
            </div>
            <div className="max-h-60 overflow-auto">
              {filteredCities.map((city, index) => (
                <div
                  key={city}
                  onClick={() => {
                    setSelectedCity(city);
                    setCitiesOpen(false);
                    setSearchCity("");
                  }}
                  className={`px-3 py-2 hover:bg-green-100 cursor-pointer ${index === 0 ? 'bg-green-100' : ''}`}
                >
                  {city}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <button className="px-6 py-2 bg-blue-light rounded-r-xl text-white text-[.95rem] tracking-[.02rem] hover:opacity-[.9] font-semibold">
        SEARCH
      </button>
    </div>
  );
};

export default SearchInterface;