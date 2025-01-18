import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const UserList = () => {
  // Sample user data
  const users = [
    {
      id: 1,
      nickname: "ゆうと",
      email: "example1@example.com",
      birthDate: "1992年 12月",
      gender: "男性",
      location: "東京都",
      registrationDate: "2024年01月12日",
    },
    {
      id: 2,
      nickname: "ニックネーム最大12文字",
      email: "user234@example.net",
      birthDate: "1987年 5月",
      gender: "女性",
      location: "東京都",
      registrationDate: "2024年01月12日",
    },
    {
      id: 3,
      nickname: "わんこ好き",
      email: "test_user@gmail.com",
      birthDate: "1996年 10月",
      gender: "男性",
      location: "東京都",
      registrationDate: "2024年01月12日",
    },
    // Add more user objects here...
  ];

  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  // Filtered users based on search input
  const filteredUsers = users.filter(
    (user) =>
      user.nickname.includes(search) || user.email.includes(search)
  );

  return (
    <div className="flex min-h-screen bg-[#fef7ef]">
      {/* Sidebar */}
  

      {/* Main content */}
      <main className="flex-1 p-6">
        {/* Search bar */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-lg font-bold text-gray-800">登録ユーザー一覧</h1>
          <div className="relative w-64">
            <FiSearch className="absolute top-2 left-3 text-gray-500" />
            <input
              type="text"
              placeholder="ニックネーム / メールアドレスで検索"
              className="w-full pl-10 py-2 border border-gray-300 rounded-lg"
              value={search}
              onChange={handleSearchChange}
            />
          </div>
        </div>

        {/* User table */}
        <table className="w-full bg-white rounded-lg shadow-md text-sm">
          <thead>
            <tr className="bg-[#fff4f4] text-left">
              <th className="px-4 py-2">No.</th>
              <th className="px-4 py-2">ニックネーム</th>
              <th className="px-4 py-2">メールアドレス</th>
              <th className="px-4 py-2">生年月</th>
              <th className="px-4 py-2">性別</th>
              <th className="px-4 py-2">居住地</th>
              <th className="px-4 py-2">登録日</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={user.id} className="border-t">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{user.nickname}</td>
                <td
                  className="px-4 py-2 truncate"
                  title={user.email} // Tooltip on hover
                >
                  {user.email}
                </td>
                <td className="px-4 py-2">{user.birthDate}</td>
                <td className="px-4 py-2">{user.gender}</td>
                <td className="px-4 py-2">{user.location}</td>
                <td className="px-4 py-2">{user.registrationDate}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4 text-gray-600 text-sm">
          <span>5,000人中 - 10人表示</span>
          <div className="flex space-x-2">
            <button className="px-2 py-1 bg-gray-200 rounded">&lt;</button>
            <button className="px-2 py-1 bg-gray-300 rounded">1</button>
            <button className="px-2 py-1 bg-gray-200 rounded">2</button>
            <button className="px-2 py-1 bg-gray-200 rounded">&gt;</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserList;
