'use client';

import Link from 'next/link';
import { X } from 'lucide-react';

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
    { name: 'Restaurants', count: '00' },
    { name: 'Health and Wellness', count: '00' },
    { name: 'Beauty Services', count: '00' },
    { name: 'Retail and Shopping', count: '00' },
    { name: 'Automotive Services', count: '00' },
    { name: 'Real Estate Service', count: '00' },
    { name: 'Event Services', count: '00' },
    { name: 'Travel and Tourism', count: '00' },
    { name: 'IT Services', count: '00' },
    { name: 'Home Made Products', count: '00' },
    { name: 'Agriculture', count: '00' },
    { name: 'Art & Craft', count: '00' },
    { name: 'Education and Training', count: '00' },
    { name: 'Electronics and Technology', count: '00' },
    { name: 'Ladies Fashion', count: '00' },
    { name: 'Food and Beverages', count: '00' },
    { name: 'Home Improvement', count: '00' },
    { name: 'Home Decor', count: '01' },
    { name: 'Healthcare', count: '00' },
    { name: 'Hotel & Accommodations', count: '00' },
    { name: 'Photography & Videography', count: '00' },
    { name: 'Advertising Agency', count: '00' },
    { name: 'Transport', count: '00' },
    { name: 'Shop and Centers', count: '00' },
    { name: 'Office', count: '00' },
    { name: 'Banks', count: '00' },
    { name: 'Printing and Publishing', count: '00' },
    { name: 'Scrap Dealer', count: '00' },
    { name: 'Professional', count: '00' },
    { name: 'Rental Services', count: '00' },
    { name: 'Repairing Services', count: '00' },
    { name: 'Agency', count: '00' },
    { name: 'Entertainments', count: '00' },
    { name: 'Gardening & Nursery', count: '00' },
    { name: 'Startups & Company', count: '00' }
  ]
};

interface CategoryNavProps {
  handleExploreMenuClose: (condition: boolean) => void;
}

const CategoryNav:React.FC<CategoryNavProps> = ({handleExploreMenuClose}) => {
  return (
    <div className="flex flex-col bg-gray-100 h-[90%] p-4">
      <div className="flex justify-between h-full">
      {/* Side Navigation */}
      <div className="w-64 border-r border-gray-200 p-4">
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
      <div className="flex-1 p-4">
        <div className="relative">
          <div className="flex justify-between items-center mb-2 border-b border-gray-300 pb-2">
            <h1 className="text-2xl font-semibold text-gray-800">All Categories</h1>
            <button className="p-2">
              <X className="h-6 w-6 text-gray-500" onClick={()=>handleExploreMenuClose(false)}/>
            </button>
          </div>

          <div className="grid grid-cols-4 gap-x-2 gap-y-1">
            {navigationData.categories.map((category) => (
              <Link
                key={category.name}
                href="#"
                className="flex items-center gap-1 py-2 border-b border-gray-100 hover:text-blue-600"
              >
                <span className="text-sm text-gray-600 hover:text-blue-600">
                  {category.name}
                </span>
                <span className="text-xs text-gray-400">- {category.count}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      </div>
        {/* Bottom CTA */}
        <div className="mt-3 p-4 flex items-start justify-between">
          <div >
          <p className="text-lg mb-4 text-gray-900">A few reasons you'll love Online Business Directory</p>
          <p className="text-[2rem] font-semibold text-[#6f6347] mb-6">
            Call us on: +91 9425828209
          </p>
          </div>
          <div className="flex space-x-4">
            <button className="bg-purple-600 text-white px-6 py-2 rounded-lg flex items-center space-x-2">
              <span>📢</span>
              <span>Advertise with us</span>
            </button>
            <button className="bg-purple-600 text-white px-6 py-2 rounded-lg flex items-center space-x-2">
              <span>🏪</span>
              <span>Add your business</span>
            </button>
          </div>
        </div>
    </div>
  );
};

export default CategoryNav;