import React, { useState } from 'react';

const CitizenSidebar = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  const menuItems = [
    { icon: '📂', text: 'Active Projects' },
    { icon: '💰', text: 'Bills' },
    { icon: '📊', text: 'Polls' },
    { icon: '⚠️', text: 'Raise Issue' },
  ];

  return (
    <div className="w-80 bg-white shadow-xl p-6 border-r border-gray-100 h-[calc(100vh-4rem)] mt-16">
      {/* Added mt-16 (64px) for navbar height and height calculation */}
      
      {/* Logo/Header Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800">
          <span className="text-blue-600">C</span>ommunity
        </h2>
        <p className="text-sm text-gray-500 mt-1">Management Portal</p>
      </div>

      {/* Menu Items */}
      <nav className="space-y-4">
        {menuItems.map((item, index) => (
          <button
            key={item.text}
            onClick={() => setSelectedItem(index)}
            className={`w-full flex items-center px-4 py-3 rounded-xl transition-all
              ${selectedItem === index 
                ? 'bg-blue-50 text-blue-600 font-semibold border-l-4 border-blue-500' 
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
          >
            <span className="text-2xl mr-4">{item.icon}</span>
            <span className="text-base">{item.text}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default CitizenSidebar;