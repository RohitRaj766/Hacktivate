// Updated Sidebar.js
import React, { useState } from 'react';

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  const menuItems = [
    { icon: '📂', text: 'Active Projects' },
    { icon: '💰', text: 'Bills' },
    { icon: '📊', text: 'Polls' },
    { icon: '⚠️', text: 'Raise Issue' },
  ];

  return (
    <div className="w-full bg-white p-4 h-full">
      {/* Header Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-800">
          <span className="text-blue-600">C</span>ommunity
        </h2>
        <p className="text-xs text-gray-500 mt-1">Management Portal</p>
      </div>

      {/* Menu Items */}
      <nav className="space-y-2">
        {menuItems.map((item, index) => (
          <button
            key={item.text}
            onClick={() => setSelectedItem(index)}
            className={`w-full flex items-center px-3 py-2 rounded-lg transition-all
              ${selectedItem === index 
                ? 'bg-blue-50 text-blue-600 font-medium border-l-2 border-blue-500' 
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
          >
            <span className="text-xl mr-3">{item.icon}</span>
            <span className="text-sm">{item.text}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;