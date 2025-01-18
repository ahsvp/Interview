import React from "react";

const Sidebar = ({ setCurrentPage }) => {
  const handleNavigation = (page) => {
    setCurrentPage(page); // Call the parent's state change function
  };

  return (
    <aside className="w-64 bg-[#ffeedd] p-6 min-h-screen">
      <div className="text-2xl font-bold text-[#ff9c45] mb-6">ルックミール</div>
      <nav>
        <ul className="space-y-4">
          <li
            onClick={() => handleNavigation("dashboard")}
            className="cursor-pointer py-2 px-4 rounded-lg bg-[#ff9c45] text-white font-medium"
          >
            📊 ダッシュボード
          </li>
          <li
            onClick={() => handleNavigation("registeredUsers")}
            className="cursor-pointer py-2 px-4 rounded-lg hover:bg-[#ffcc99] text-gray-700 font-medium"
          >
            👤 登録ユーザー
          </li>
          <li className="py-2 px-4 rounded-lg hover:bg-[#ffcc99] text-gray-600">
            🏆 当選者
          </li>
          <li className="py-2 px-4 rounded-lg hover:bg-[#ffcc99] text-gray-600">
            ⚙️ 運営管理者
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
