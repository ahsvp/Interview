import React, { useState } from "react";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    // Perform logout logic here
    alert("Logged out!");
  };

  return (
    <nav className="bg-[#fffef9] shadow-md h-16 flex justify-between items-center px-6">
      {/* Navbar Title */}
      <h1 className="text-lg font-semibold text-gray-900">ダッシュボード</h1>

      {/* Profile Icon with Dropdown */}
      <div className="relative">
        <button
          className="flex items-center"
          onClick={toggleDropdown}
        >
          {/* Profile Icon */}
          <span className="material-symbols-outlined text-3xl text-gray-700 cursor-pointer">
            account_circle
          </span>
        </button>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md">
            <ul className="py-2 text-sm text-gray-700">
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={handleLogout}
              >
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
