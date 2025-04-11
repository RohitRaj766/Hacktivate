import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const menuItems = [
    { icon: '📂', text: 'Active Projects', path: '/dashboard' },
    { icon: '💰', text: 'Bills', path: '/dashboard/bills' },
    { icon: '💬', text: 'Forum', path: '/dashboard/forum' },
    { icon: '⚠️', text: 'Raise Issue', path: '/dashboard/raise-issue' },
    // { icon: '🛠️', text: 'Edit Profile', path: '/dashboard/edit-profile' },
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
        {menuItems.map((item) => (
          <NavLink
            key={item.text}
            to={item.path}
            end={item.path === '/dashboard'} // only match exact for dashboard root
            className={({ isActive }) =>
              `w-full flex items-center px-3 py-2 rounded-lg transition-all ${
                isActive
                  ? 'bg-blue-50 text-blue-600 font-medium border-l-2 border-blue-500'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`
            }
          >
            <span className="text-xl mr-3">{item.icon}</span>
            <span className="text-sm">{item.text}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
