/** @format */

import { NavLink } from 'react-router-dom';
import {
  Home,
  Users,
  Calendar,
  BarChart,
  Settings,
  LogOut,
} from 'lucide-react';

const Sidebar = () => {
  const menu = [
    { name: 'Dashboard', path: '/', icon: <Home size={20} /> },
    { name: 'Students', path: '/students', icon: <Users size={20} /> },
    { name: 'Attendance', path: '/attendance', icon: <Calendar size={20} /> },
    { name: 'Reports', path: '/reports', icon: <BarChart size={20} /> },
    { name: 'Settings', path: '/setting', icon: <Settings size={20} /> },
  ];

  return (
    <div
      className='h-screen w-64 flex flex-col justify-between 
                    bg-gray-900 dark:bg-white border-r-2 border-black dark:border-white
                    text-white dark:text-black p-5 transition-all'
    >
      <div>
        <h1 className='text-2xl font-bold mb-10'>Attendance</h1>

        <ul className='space-y-4'>
          {menu.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 p-3 rounded-lg transition 
                  ${
                    isActive
                      ? 'bg-blue-500 text-white'
                      : 'hover:bg-gray-700 dark:hover:bg-gray-200'
                  }`
                }
              >
                {item.icon}
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className='flex gap-3 items-center p-3 hover:bg-gray-700 dark:hover:bg-gray-200 rounded cursor-pointer'>
        <LogOut size={24} />
        <p className='text-lg'>Logout</p>
      </div>
    </div>
  );
};

export default Sidebar;
