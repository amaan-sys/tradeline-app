"use client";

import React, { useState } from "react";

export default function BuyTradeline() {
  const [tradelines] = useState([
    { id: 1, bank: "Chase", cardId: 25235, limit: 5000, opened: "2020 Feb", deadline: "Dec 31st", reporting: "Jan 11th - Jan 18th", availability: 1, price: 327.6 },
    { id: 2, bank: "Bank of America", cardId: 31991, limit: 10000, opened: "2022 Oct", deadline: "Dec 26th", reporting: "Jan 6th - Jan 13th", availability: 1, price: 380.25 },
    { id: 3, bank: "Chase", cardId: 13730, limit: 12300, opened: "2021 Nov", deadline: "Dec 25th", reporting: "Jan 5th - Jan 12th", availability: 1, price: 380.25 },
    { id: 4, bank: "Discover", cardId: 6309, limit: 11500, opened: "2020 Dec", deadline: "Dec 22nd", reporting: "Jan 2nd - Jan 9th", availability: 1, price: 350.0 },
    { id: 5, bank: "Discover", cardId: 6309, limit: 11500, opened: "2020 Dec", deadline: "Dec 22nd", reporting: "Jan 2nd - Jan 9th", availability: 1, price: 350.0 },
    { id: 6, bank: "Discover", cardId: 6309, limit: 11500, opened: "2020 Dec", deadline: "Dec 22nd", reporting: "Jan 2nd - Jan 9th", availability: 1, price: 350.0 },
    { id: 7, bank: "Discover", cardId: 6309, limit: 11500, opened: "2020 Dec", deadline: "Dec 22nd", reporting: "Jan 2nd - Jan 9th", availability: 1, price: 350.0 },
    { id: 8, bank: "Discover", cardId: 6309, limit: 11500, opened: "2020 Dec", deadline: "Dec 22nd", reporting: "Jan 2nd - Jan 9th", availability: 1, price: 350.0 },
  ]);

  return (
    <div className="w-full min-h-screen bg-gray-50 py-30 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4 text-center">
          Buy Tradelines
        </h1>

        <p className="text-gray-700 text-center mb-10 text-lg">
          Browse verified tradelines and add them to your cart.
        </p>

        {/* Desktop Table (Hidden on Mobile) */}
        <div className="hidden md:block overflow-x-auto shadow-lg rounded-2xl">
          <table className="min-w-full bg-white divide-y divide-gray-200">
            <thead className="bg-blue-50">
              <tr>
                {[
                  "Bank",
                  "Card ID",
                  "Credit Limit",
                  "Opened",
                  "Deadline",
                  "Reporting",
                  "Availability",
                  "Price",
                  "Add",
                ].map((header) => (
                  <th
                    key={header}
                    className="px-6 py-3 text-left text-xs font-semibold text-blue-700 uppercase tracking-wider"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {tradelines.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 transition text-black">
                  <td className="px-6 py-4">{item.bank}</td>
                  <td className="px-6 py-4">{item.cardId}</td>
                  <td className="px-6 py-4">${item.limit.toLocaleString()}</td>
                  <td className="px-6 py-4">{item.opened}</td>
                  <td className="px-6 py-4">{item.deadline}</td>
                  <td className="px-6 py-4">{item.reporting}</td>
                  <td className="px-6 py-4 text-green-600 font-semibold">
                    {item.availability} in stock
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-800">
                    ${item.price}
                  </td>

                  <td className="px-6 py-4">
                    <button className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-600 transition">
                      Add to Cart
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="grid md:hidden gap-6 mt-6">
          {tradelines.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md p-5 border border-gray-100"
            >
              <h3 className="text-xl font-bold text-blue-700 mb-3">
                {item.bank} • ${item.limit.toLocaleString()}
              </h3>

              <div className="space-y-2 text-gray-700 text-sm">
                <p><strong>Card ID:</strong> {item.cardId}</p>
                <p><strong>Opened:</strong> {item.opened}</p>
                <p><strong>Deadline:</strong> {item.deadline}</p>
                <p><strong>Reporting:</strong> {item.reporting}</p>
                <p><strong>Availability:</strong> 
                  <span className="text-green-600 font-semibold ml-1">
                    {item.availability} in stock
                  </span>
                </p>
                <p className="text-lg font-semibold text-gray-900">
                  Price: ${item.price}
                </p>
              </div>

              <button className="w-full mt-4 bg-blue-600 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
