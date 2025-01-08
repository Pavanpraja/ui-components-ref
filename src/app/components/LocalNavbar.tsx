'use client';

import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, Menu, CrossIcon, TrendingUp, Sparkles } from 'lucide-react';
import { RxCross2 } from "react-icons/rx";
import Image from 'next/image';
import CategoryNav from './navbar-components/CategoryNav';

const LocalNavbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isExploreOpen, setIsExploreOpen] = useState(false);
    const [isExploreOpenInMobile, setIsExploreOpenInMobile] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchToggle, setSearchToggle] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (!event.target.closest('.dropdown-container')) {
                setIsDropdownOpen(false);
            }
            if (!event.target.closest('.explore-container')) {
                setIsExploreOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    const handleSearchToggle = () => {
        setSearchToggle(prev => !prev);
    }

    const handleExploreMenuClose = (condition:any) =>{
        setIsExploreOpen(condition);
    }

    return (
        // bg-blue-extradark
        <nav className="w-full bg-transparent text-white shadow-sm fixed top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto relative px-2 sm:px-4 lg:px-8">
                <div className="flex items-center justify-between h-14">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center space-x-2">
                        <span className="text-xl sm:text-2xl font-bold border-r pr-3 border-gray-500"><Image width={160} height={160} src={"https://localkaro.com/images/home/5871localkarowhitelogos1.png"} alt='logo' /></span>

                        <div className=" explore-container">
                            <button
                                onClick={() => setIsExploreOpen(!isExploreOpen)}
                                className="flex items-center space-x-1 text-white font-bold hover:text-gray-100 px-2 py-1 text-[.75rem] "
                            >
                                <span>Explore</span>
                                <ChevronDown className="h-4 w-4" />
                            </button>

                            {isExploreOpen && (
                                <div
                                    className={`absolute w-max-7xl mt-5 left-0 right-0 bg-white rounded-lg shadow-lg py-2 border border-gray-100 transform transition-all duration-500 ease-in-out ${isExploreOpen ? 'translate-y-[0.5rem] opacity-100' : 'translate-y-[1rem] opacity-0'}`}
                                >
                                    <CategoryNav handleExploreMenuClose={handleExploreMenuClose} />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Search Bar with Shots */}
                    <div className="hidden md:flex flex-1 max-w-xl mx-4 lg:mx-6">
                        <div className="relative w-full lg:w-[60%]">
                            <input
                                type="text"
                                placeholder="What are you looking for?"
                                className={`w-full text-gray-800 max-[1134px]: pl-4 pr-32 py-2 max-[1134px]:absolute max-[1134px]:top-5 max-[1134px]:left-0 max-[1134px]:w-[74vw] rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 text-[.75rem] ${isSearchToggle ? "max-[1134px]:block" : "max-[1134px]:hidden"}`}
                            />
                            <div className="absolute right-0 top-0 h-full flex items-center">
                                {/* <div className="relative dropdown-container mr-2">
                                     <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setIsDropdownOpen(!isDropdownOpen);
                                        }}
                                        className="flex items-center space-x-1 text-white hover:text-gray-900 px-2 py-1 text-[.75rem]"
                                    >
                                        <span>Shots</span>
                                        <ChevronDown className="h-4 w-4" />
                                    </button>

                                    {isDropdownOpen && (
                                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 border border-gray-100">
                                            <a href="#" className="block px-4 py-2 text-[.75rem] text-white hover:bg-gray-100">
                                                Shots
                                            </a>
                                            <a href="#" className="block px-4 py-2 text-[.75rem] text-white hover:bg-gray-100">
                                                Designers
                                            </a>
                                        </div>
                                    )}
                                </div> */}
                                <div className="pr-3 text-gray-400">
                                    <Search className="h-5 w-5" onClick={handleSearchToggle} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-2 lg:space-x-6">
                        {/* Explore Dropdown */}
                        <a href="#" className="text-[.75rem] font-bold text-white hover:text-gray-900 px-2 py-1">Add buisness</a>
                        <button className="text-[.75rem] font-bold text-white hover:text-gray-900 px-2 py-1">Sign up</button>
                        <button className="text-white font-bold px-3 py-1.5 lg:px-4 lg:py-2 rounded-lg bg-blue-darklight hover:bg-blue-dark border-blue-darklight text-[.75rem]">
                            Create an Account
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={`text-white hover:text-gray-900 p-2 transform transition-transform duration-500 ${isMobileMenuOpen ? 'rotate-90' : 'rotate-0'
                                }`}
                            aria-label="Toggle mobile menu"
                        >
                            {!isMobileMenuOpen ? <Menu className="h-6 w-6" /> : <RxCross2 className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="md:hidden pb-4 border-t border-gray-200 mt-2">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <div className="mb-4">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="What are you looking for?"
                                        className="w-full pl-4 pr-32 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 text-[.75rem]"
                                    />
                                    <div className="absolute right-0 top-0 h-full flex items-center">
                                        {/* <div className="relative dropdown-container">
                                            <button
                                                onClick={() => {
                                                    setIsDropdownOpen(!isDropdownOpen);
                                                }}
                                                className="flex items-center space-x-1 text-white hover:text-gray-900 px-2 py-1 text-[.75rem]"
                                            >
                                                <span>Shots</span>
                                                <ChevronDown className="h-4 w-4" />
                                            </button>
                                        </div> */}
                                        <div className="pr-3 text-gray-400">
                                            <Search className="h-5 w-5" />
                                        </div>
                                    </div>
                                </div>
                                {/* {isDropdownOpen && (
                                    <div className="mt-2 bg-white rounded-lg shadow-lg py-2 border border-gray-100 z-50">
                                        <a href="#" className="block px-4 py-2 text-[.75rem] text-white hover:bg-gray-100">
                                            Shots
                                        </a>
                                        <a href="#" className="block px-4 py-2 text-[.75rem] text-white hover:bg-gray-100">
                                            Designers
                                        </a>
                                    </div>
                                )} */}
                            </div>
                            {/* Mobile Explore Menu */}
                            <div className="relative space-y-1">
                                <button
                                    onClick={() => setIsExploreOpenInMobile((prev) => !prev)}
                                    className="flex items-center justify-between w-full px-3 py-2 text-[.75rem] text-white hover:bg-gray-100 rounded-md"
                                >
                                    <span>Explore</span>
                                    <ChevronDown className="h-4 w-4" />
                                </button>
                                {/* {isExploreOpen && ( */}
                                <div className={`${isExploreOpenInMobile ? "max-md:block" : "max-md:hidden"} absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 border border-gray-100 z-50`}
                                    onMouseLeave={() => setIsExploreOpen(false)}
                                >
                                    <a href="#" className="flex items-center space-x-2 px-3 py-2 text-[.75rem] text-white hover:bg-gray-100 rounded-md">
                                        <TrendingUp className="h-4 w-4" />
                                        <span>Popular</span>
                                    </a>
                                    <a href="#" className="flex items-center space-x-2 px-3 py-2 text-[.75rem] text-gray-700 hover:bg-gray-100 rounded-md">
                                        <Sparkles className="h-4 w-4" />
                                        <span>New and Noteworthy</span>
                                    </a>
                                    {[
                                        'Product Design',
                                        'Web Design',
                                        'Animation',
                                        'Branding',
                                        'Illustration',
                                        'Mobile',
                                        'Typography',
                                        'Print'
                                    ].map((category) => (
                                        <a
                                            key={category}
                                            href="#"
                                            className="block px-3 py-2 text-[.75rem] text-white hover:bg-gray-100 rounded-md"
                                        >
                                            {category}
                                        </a>
                                    ))}
                                </div>
                                {/* )} */}
                            </div>
                            <a href="#" className="block px-3 py-2 text-[.75rem] text-white hover:bg-gray-100 rounded-md">
                                Hire a Designer
                            </a>
                            <a href="#" className="block px-3 py-2 text-[.75rem] text-white hover:bg-gray-100 rounded-md">
                                Find Jobs
                            </a>
                            <a href="#" className="block px-3 py-2 text-[.75rem] text-white hover:bg-gray-100 rounded-md">
                                Blog
                            </a>
                            <div className="pt-4 space-y-2">
                                <button className="w-full text-center px-4 py-2 text-[.75rem] text-white hover:bg-gray-100 rounded-md">
                                    Sign up
                                </button>
                                <button className="w-full text-center px-4 py-2 text-[.75rem] bg-blue-darklight hover:bg-blue-dark border-blue-darklight text-white rounded-lg">
                                    Create an Account
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default LocalNavbar;