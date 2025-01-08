'use client';

import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, Menu } from 'lucide-react';
import { RxCross2 } from "react-icons/rx";
import Image from 'next/image';
import CategoryNav from '../navbar-components/CategoryNav';
import { IoIosHome } from "react-icons/io";
import { GiRingingBell } from "react-icons/gi";
import { FaGift } from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";
import Link from 'next/link';
import { 
  FaUtensils, FaHeartbeat, FaCut, FaShoppingBag, FaCar, FaHome, FaCalendarAlt, 
  FaPlane, FaLaptop, FaBoxOpen, FaTractor, FaPaintBrush, FaGraduationCap, 
  FaMicrochip, FaTshirt, FaPizzaSlice, FaTools, FaCouch, FaHospital, FaHotel, 
  FaCamera, FaBullhorn, FaBus, FaStore, FaBuilding, FaUniversity, FaPrint, 
  FaRecycle, FaBriefcase, FaKey, FaWrench, FaUserTie, FaTheaterMasks, FaLeaf, 
  FaIndustry
} from 'react-icons/fa';

const navigationData = {
  categories: [
    { name: 'Restaurants', count: '00', icon: FaUtensils },
    { name: 'Health and Wellness', count: '00', icon: FaHeartbeat },
    { name: 'Beauty Services', count: '00', icon: FaCut },
    { name: 'Retail and Shopping', count: '00', icon: FaShoppingBag },
    { name: 'Automotive Services', count: '00', icon: FaCar },
    { name: 'Real Estate Service', count: '00', icon: FaHome },
    { name: 'Event Services', count: '00', icon: FaCalendarAlt },
    { name: 'Travel and Tourism', count: '00', icon: FaPlane },
    { name: 'IT Services', count: '00', icon: FaLaptop },
    { name: 'Home Made Products', count: '00', icon: FaBoxOpen },
    { name: 'Agriculture', count: '00', icon: FaTractor },
    { name: 'Art & Craft', count: '00', icon: FaPaintBrush },
    { name: 'Education and Training', count: '00', icon: FaGraduationCap },
    { name: 'Electronics and Technology', count: '00', icon: FaMicrochip },
    { name: 'Ladies Fashion', count: '00', icon: FaTshirt },
    { name: 'Food and Beverages', count: '00', icon: FaPizzaSlice },
    { name: 'Home Improvement', count: '00', icon: FaTools },
    { name: 'Home Decor', count: '01', icon: FaCouch },
    { name: 'Healthcare', count: '00', icon: FaHospital },
    { name: 'Hotel & Accommodations', count: '00', icon: FaHotel },
    { name: 'Photography & Videography', count: '00', icon: FaCamera },
    { name: 'Advertising Agency', count: '00', icon: FaBullhorn },
    { name: 'Transport', count: '00', icon: FaBus },
    { name: 'Shop and Centers', count: '00', icon: FaStore },
    { name: 'Office', count: '00', icon: FaBuilding },
    { name: 'Banks', count: '00', icon: FaUniversity },
    { name: 'Printing and Publishing', count: '00', icon: FaPrint },
    { name: 'Scrap Dealer', count: '00', icon: FaRecycle },
    { name: 'Professional', count: '00', icon: FaBriefcase },
    { name: 'Rental Services', count: '00', icon: FaKey },
    { name: 'Repairing Services', count: '00', icon: FaWrench },
    { name: 'Agency', count: '00', icon: FaUserTie },
    { name: 'Entertainments', count: '00', icon: FaTheaterMasks },
    { name: 'Gardening & Nursery', count: '00', icon: FaLeaf },
    { name: 'Startups & Company', count: '00', icon: FaIndustry }
  ]
};

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
        <nav className="w-full bg-transparent text-white shadow-sm fixed top-0 left-0 z-50 px-[2rem]">
            <div className="max-w-7xl mx-auto relative">
                <div className="flex items-center justify-between h-14">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center space-x-2">
                        <span className="text-xl sm:text-2xl font-bold border-r pr-3 border-gray-500"><Image width={160} height={160} src={"https://localkaro.com/images/home/5871localkarowhitelogos1.png"} alt='logo' /></span>

                        <div><IoIosHome /></div>
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
                                    className={`absolute w-max-7xl left-0 right-0 rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 ease-in-out ${isExploreOpen ? 'translate-y-[0.5rem] opacity-100' : 'translate-y-[.5rem] opacity-0'}`}
                                >
                                    <CategoryNav isExploreOpen={isExploreOpen} handleExploreMenuClose={handleExploreMenuClose} />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Search Bar with Shots */}
                    <div className="hidden md:flex flex-1 max-w-xl mx-4 lg:mx-6">
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="What are you looking for?"
                                className={`w-full text-gray-800 max-[1134px]: pl-4 pr-32 py-2 max-[1134px]:top-5 max-[1134px]:left-0 max-[1023px]:hidden rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 text-[.75rem]`}
                            />
                            <div className="absolute right-0 top-0 h-full flex items-center">
                                <div className="pr-3 text-gray-400">
                                    <Search className="h-5 w-5" onClick={handleSearchToggle} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-2 lg:space-x-6">
                    <GiRingingBell />
                    <FaGift />
                    <IoMdCart />
                        {/* Explore Dropdown */}
                        <a href="#" className="text-[.75rem] font-bold text-white hover:text-gray-900 px-2 py-1">Add Listing</a>
                        <button className="text-white font-bold px-3 py-1.5 lg:px-4 lg:py-2 rounded-lg bg-blue-darklight hover:bg-blue-dark border-blue-darklight text-[.75rem]">
                            Login / Signup
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={`text-white hover:text-gray-900 p-2 transform transition-transform duration-500 ${isMobileMenuOpen ? 'rotate-90' : 'rotate-0'
                                }`}
                            aria-label="Toggle mobile menu"
                        >
                            {!isMobileMenuOpen ? <Menu className="h-6 w-6" data-aos="fade-in" /> : <RxCross2 className="h-6 w-6" data-aos="fade-in" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden pb-4 border bg-white border-gray-200 mt-2 max-h-[calc(100vh-4rem)] overflow-y-auto" data-aos="fade-in">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <div className="mb-4 sticky top-0 bg-white pt-2">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="What are you looking for?"
                                        className="w-full pl-4 pr-32 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 text-[.75rem]"
                                    />
                                    <div className="absolute right-0 top-0 h-full flex items-center">
                                        <div className="pr-3 text-gray-400">
                                            <Search className="h-5 w-5" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Mobile Explore Menu */}
                            <div className="relative space-y-1">
                                <button
                                    onClick={() => setIsExploreOpenInMobile((prev) => !prev)}
                                    className="flex items-center justify-between w-full px-3 py-2 text-[.75rem] text-gray-800 font-semibold opacity-[0.9] hover:bg-gray-100 rounded-md"
                                >
                                    <span>Explore</span>
                                    <ChevronDown className="h-4 w-4" />
                                </button>
                                
                                {isExploreOpenInMobile && (
                                    <div className="mt-2 bg-gray-50 rounded-md p-2 max-h-[60vh] overflow-y-auto">
                                        <h2 className="text-sm font-semibold text-gray-700 mb-2">All Categories</h2>
                                        <div className="grid grid-cols-2 gap-2">
                                            {navigationData.categories.map((category) => (
                                                <Link
                                                    key={category.name}
                                                    href="#"
                                                    className="flex items-center gap-1 py-1 px-2 text-[.7rem] text-gray-600 hover:bg-gray-100 rounded-md"
                                                >
                                                    <category.icon className="text-gray-400 text-[.8rem]" />
                                                    <span className="truncate">
                                                        {category.name} - {category.count}
                                                    </span>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                            <a href="#" className="block px-3 py-2 text-[.75rem] text-gray-800 font-semibold opacity-[0.9] hover:bg-gray-100 rounded-md">
                                Hire a Designer
                            </a>
                            <a href="#" className="block px-3 py-2 text-[.75rem] text-gray-800 font-semibold opacity-[0.9] hover:bg-gray-100 rounded-md">
                                Find Jobs
                            </a>
                            <a href="#" className="block px-3 py-2 text-[.75rem] text-gray-800 font-semibold opacity-[0.9] hover:bg-gray-100 rounded-md">
                                Blog
                            </a>
                            <div className="pt-4 space-y-2">
                                <button className="w-full text-center px-4 py-2 text-[.75rem] text-gray-800 font-semibold opacity-[0.9] hover:bg-gray-100 rounded-md">
                                    Sign up
                                </button>
                                <button className="w-full text-center text-white px-4 py-2 text-[.75rem] bg-blue-darklight hover:bg-blue-dark border-blue-darklight font-semibold opacity-[0.9] rounded-lg">
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