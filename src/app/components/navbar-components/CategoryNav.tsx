'use client';

import Link from 'next/link';
import { X } from 'lucide-react';
import { 
  FaUtensils, FaHeartbeat, FaCut, FaShoppingBag, FaCar, FaHome, FaCalendarAlt, 
  FaPlane, FaLaptop, FaBoxOpen, FaTractor, FaPaintBrush, FaGraduationCap, 
  FaMicrochip, FaTshirt, FaPizzaSlice, FaTools, FaCouch, FaHospital, FaHotel, 
  FaCamera, FaBullhorn, FaBus, FaStore, FaBuilding, FaUniversity, FaPrint, 
  FaRecycle, FaBriefcase, FaKey, FaWrench, FaUserTie, FaTheaterMasks, FaLeaf, 
  FaIndustry
} from 'react-icons/fa';
import { useEffect } from 'react';
import Image from 'next/image';

const navigationData = {
  sideNav: [
    { icon: '🏪', text: 'FIND BUSINESS', href: '#' },
    { icon: '📢', text: 'CLASSIFIEDS ADS', href: '#' },
    { icon: '🛠️', text: 'SERVICE EXPERTS', href: '#', highlight: true },
    { icon: '👔', text: 'LOCAL JOBS', href: '#' },
    { icon: '🎈', text: 'EXPLORE TRAVEL', href: '#' },
    { icon: '📅', text: 'EVENTS', href: '#' },
    { icon: '🔒', text: 'PRODUCTS', href: '#' },
    { icon: '🎫', text: 'COUPON & DEALS', href: '#' },
    { icon: '📝', text: 'BLOGS', href: '#' },
    { icon: '👥', text: 'COMMUNITY', href: '#' }
  ],
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

interface CategoryNavProps {
  isExploreOpen: boolean;
  handleExploreMenuClose: (condition: boolean) => void;
}

const CategoryNav:React.FC<CategoryNavProps> = ({isExploreOpen, handleExploreMenuClose}) => {

  return (
    <div className={`pop-menu relative flex flex-col bg-gray-100 h-[90%] p-4 mt-1 transition-all duration-500 ease-in-out ${isExploreOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-[1rem]'}`} data-aos="fade-bottom">
      <div className="flex justify-between h-full">
      {/* Side Navigation */}
      <div className="w-64 border-r border-gray-200 px-4">
        {navigationData.sideNav.map((item) => (
          <Link
            key={item.text}
            href={item.href}
            className={`flex items-center font-bold space-x-3 p-2 rounded-lg hover:bg-gray-50 ${
              item.highlight ? 'text-blue-600' : 'text-gray-700'
            }`}
          >
            <span className="text-[.75rem]">{item.icon}</span>
            <span className="text-sm font-medium">{item.text}</span>
          </Link>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 px-4">
        <div className="relative">
          <div className="flex justify-between items-center mb-2 border-b border-gray-300 pb-2">
            <h1 className="text-2xl font-bold text-gray-800">All Categories</h1>
            <button className="p-2">
              <X className="h-6 w-6 text-gray-500" onClick={()=>handleExploreMenuClose(false)}/>
            </button>
          </div>

          <div className="grid grid-cols-4 gap-x-1 gap-y-1">
            {navigationData.categories.map((category) => (
              <Link
                key={category.name}
                href="#"
                className="flex items-center gap-1 py-2 border-b border-gray-100 hover:text-blue-600"
              >
                <category.icon className="text-gray-400 group-hover:text-blue-600 text-sm" />
                <span className="text-sm text-gray-600 hover:text-blue-600 truncate">
                  {category.name} - {category.count}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      </div>
        {/* Bottom CTA */}
        <div className="mt-3 p-4 flex items-start justify-between">
          <div >
          <p className="text-md mb-1 text-gray-900">A few reasons you'll love Online Business Directory</p>
          <p className="text-[2rem] font-semibold text-[#6f6347] mb-6">
            Call us on: +91 9425828209
          </p>
          </div>
          <div className="flex space-x-4">
            <button className="bg-gradient-to-tr from-[#d90c55] to-[#8d18ba] text-[0.9rem] font-semibold opacity-[.9] text-white px-6 py-4 rounded-lg flex items-center space-x-2">
              <span>📢</span>
              <span>Advertise with us</span>
            </button>
            <button className="bg-gradient-to-tr from-[#d90c55] to-[#8d18ba] text-[0.9rem] font-semibold opacity-[.9] text-white px-6 py-4 rounded-lg flex items-center space-x-2">
              <span>🏪</span>
              <span>Add your business</span>
            </button>
          </div>
        </div>
    </div>
  );
};

export default CategoryNav;