import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  // Sample data for the bar chart
  const data = [
    { ageGroup: "10代未満", male: 100, female: 120, others: 50, noResponse: 30 },
    { ageGroup: "10代", male: 200, female: 240, others: 80, noResponse: 40 },
    { ageGroup: "20代", male: 300, female: 320, others: 100, noResponse: 50 },
    { ageGroup: "30代", male: 400, female: 380, others: 120, noResponse: 70 },
    { ageGroup: "40代", male: 500, female: 460, others: 140, noResponse: 90 },
    { ageGroup: "50代", male: 450, female: 400, others: 130, noResponse: 80 },
    { ageGroup: "60代", male: 200, female: 180, others: 70, noResponse: 50 },
  ];

  // Sample card data
  const cards = [
    { title: "ユーザー登録数累計", value: 450, trend: "+12.5%", positive: true },
    { title: "アクティブユーザー", value: 50, trend: "+316.6%", positive: true },
    { title: "定着率", value: "10%", trend: "-16.6%", positive: false },
    { title: "平均検索回数", value: 4, trend: "+100%", positive: true },
    { title: "抽選利用回数", value: 125, trend: "+47%", positive: true },
    { title: "アカウント削除数", value: 10, trend: "+25%", positive: true },
  ];

  return (
    <div className="flex min-h-screen bg-[#fef7ef]">
      {/* Sidebar */}
      

      {/* Main content */}
      <main className="flex-1 p-6">
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg shadow-sm ${
                card.positive ? "bg-[#f6fff4]" : "bg-[#fff4f4]"
              }`}
            >
              <h3 className="text-sm text-gray-700">{card.title}</h3>
              <p className="text-2xl font-bold text-gray-800">{card.value}</p>
              <p
                className={`text-sm ${
                  card.positive ? "text-green-500" : "text-red-500"
                }`}
              >
                {card.trend}
              </p>
            </div>
          ))}
        </div>

        {/* Graph */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold text-gray-700">性別・年代比</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="ageGroup" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="male" stackId="a" fill="#ff9c45" />
              <Bar dataKey="female" stackId="a" fill="#82ca9d" />
              <Bar dataKey="others" stackId="a" fill="#8884d8" />
              <Bar dataKey="noResponse" stackId="a" fill="#d0ed57" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
