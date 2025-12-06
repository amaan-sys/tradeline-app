"use client";

import React, { useMemo, useState } from "react";
import { ShoppingCart, CheckCircle2, ArrowUpDown, Filter } from "lucide-react";

export default function BuyTradeline() {
  const [tradelines] = useState([
    { id: 1, bank: "Chase", bankShort: "Chase", cardId: 25235, limit: 5000, opened: "2020 Feb", deadline: "Dec 31st", reporting: "Jan 11th - Jan 18th", availability: 1, price: 327.6 },
    { id: 2, bank: "Bank of America", bankShort: "BofA", cardId: 31991, limit: 10000, opened: "2022 Oct", deadline: "Dec 26th", reporting: "Jan 6th - Jan 13th", availability: 1, price: 380.25 },
    { id: 3, bank: "Chase", bankShort: "Chase", cardId: 13730, limit: 12300, opened: "2021 Nov", deadline: "Dec 25th", reporting: "Jan 5th - Jan 12th", availability: 1, price: 380.25 },
    { id: 4, bank: "Discover", bankShort: "Discover", cardId: 6309, limit: 11500, opened: "2020 Dec", deadline: "Dec 22nd", reporting: "Jan 2nd - Jan 9th", availability: 1, price: 350.0 },
    { id: 5, bank: "Discover", bankShort: "Discover", cardId: 6310, limit: 15000, opened: "2019 Jul", deadline: "Dec 20th", reporting: "Jan 1st - Jan 8th", availability: 1, price: 395.0 },
    { id: 6, bank: "Discover", bankShort: "Discover", cardId: 6311, limit: 8000, opened: "2021 Mar", deadline: "Dec 27th", reporting: "Jan 7th - Jan 14th", availability: 1, price: 310.0 },
    { id: 7, bank: "Chase", bankShort: "Chase", cardId: 20021, limit: 7500, opened: "2018 Sep", deadline: "Dec 23rd", reporting: "Jan 3rd - Jan 10th", availability: 1, price: 340.0 },
    { id: 8, bank: "Bank of America", bankShort: "BofA", cardId: 42010, limit: 9000, opened: "2019 Jan", deadline: "Dec 29th", reporting: "Jan 9th - Jan 16th", availability: 1, price: 365.0 },
  ]);

  const [bankFilter, setBankFilter] = useState("All");
  const [sortBy, setSortBy] = useState("best");
  const [cart, setCart] = useState([]);

  const banks = useMemo(
    () => ["All", ...Array.from(new Set(tradelines.map((t) => t.bank)))],
    [tradelines]
  );

  const handleAddToCart = (id) => {
    setCart((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  const isInCart = (id) => cart.includes(id);

  const filtered = useMemo(() => {
    let list = [...tradelines];

    if (bankFilter !== "All") {
      list = list.filter((t) => t.bank === bankFilter);
    }

    switch (sortBy) {
      case "limit-desc":
        list.sort((a, b) => b.limit - a.limit);
        break;
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      default:
        // "best" – rough value score: limit / price
        list.sort(
          (a, b) => b.limit / b.price - a.limit / a.price
        );
        break;
    }

    return list;
  }, [tradelines, bankFilter, sortBy]);

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-sky-50 via-white to-slate-50 pt-28 pb-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Buy{" "}
              <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                Tradelines
              </span>
            </h1>
            <p className="mt-3 text-sm md:text-base text-slate-600 max-w-xl">
              Browse verified, high-quality tradelines and add them to your
              cart with confidence. Every listing includes key reporting and
              deadline details.
            </p>
          </div>

          {/* Cart summary */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <div className="flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1.5 text-xs font-medium text-sky-800 border border-sky-200">
              <Filter size={14} />
              <span>{filtered.length} results</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-slate-900 text-sky-50 px-3 py-1.5 text-xs font-semibold shadow-lg">
              <ShoppingCart size={14} />
              <span>{cart.length} in cart</span>
            </div>
          </div>
        </div>

        {/* FILTER / SORT BAR */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 rounded-2xl border border-slate-200 bg-white/80 shadow-sm px-4 py-3 md:px-5 md:py-4">
          {/* Bank filter buttons */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            <span className="text-xs font-semibold text-slate-500 mr-1 whitespace-nowrap">
              Bank:
            </span>
            {banks.map((bank) => (
              <button
                key={bank}
                onClick={() => setBankFilter(bank)}
                className={`whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-semibold border transition ${
                  bankFilter === bank
                    ? "bg-sky-600 text-white border-sky-600 shadow-sm"
                    : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                }`}
              >
                {bank}
              </button>
            ))}
          </div>

          {/* Sort select */}
          <div className="flex items-center gap-2">
            <ArrowUpDown size={16} className="text-slate-400" />
            <span className="text-xs font-semibold text-slate-500">
              Sort:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-xs md:text-sm border border-slate-200 rounded-full px-3 py-1.5 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500/70"
            >
              <option value="best">Best value</option>
              <option value="limit-desc">Highest limit</option>
              <option value="price-asc">Lowest price</option>
              <option value="price-desc">Highest price</option>
            </select>
          </div>
        </div>

        {/* DESKTOP TABLE */}
        <div className="hidden md:block mt-8 rounded-2xl border border-slate-200 bg-white/80 shadow-[0_20px_45px_rgba(15,23,42,0.08)] overflow-hidden">
          <div className="max-h-[70vh] overflow-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-sky-50 sticky top-0 z-10">
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
                    "",
                  ].map((header) => (
                    <th
                      key={header}
                      className="px-6 py-3 text-left text-[11px] font-semibold text-slate-500 uppercase tracking-[0.12em] bg-sky-50"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filtered.map((item, idx) => {
                  const featured = idx === 0 && bankFilter === "All";
                  return (
                    <tr
                      key={item.id}
                      className={`transition ${
                        featured
                          ? "bg-sky-50/60 hover:bg-sky-50"
                          : "hover:bg-slate-50"
                      }`}
                    >
                      <td className="px-6 py-4 align-middle">
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-full bg-sky-100 flex items-center justify-center text-[11px] font-semibold text-sky-700">
                            {item.bankShort.slice(0, 2).toUpperCase()}
                          </div>
                          <div className="flex flex-col">
                            <span className="font-semibold text-slate-900">
                              {item.bank}
                            </span>
                            {featured && (
                              <span className="text-[10px] font-semibold text-emerald-600/90">
                                Featured pick
                              </span>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 align-middle text-slate-700">
                        #{item.cardId}
                      </td>
                      <td className="px-6 py-4 align-middle font-semibold text-slate-900">
                        ${item.limit.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 align-middle text-slate-700">
                        {item.opened}
                      </td>
                      <td className="px-6 py-4 align-middle text-slate-700">
                        {item.deadline}
                      </td>
                      <td className="px-6 py-4 align-middle text-slate-700">
                        <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-[11px] font-medium text-slate-700">
                          {item.reporting}
                        </span>
                      </td>
                      <td className="px-6 py-4 align-middle">
                        <span className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold text-emerald-600">
                          {item.availability} in stock
                        </span>
                      </td>
                      <td className="px-6 py-4 align-middle font-semibold text-slate-900">
                        ${item.price.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 align-middle">
                        <button
                          onClick={() => handleAddToCart(item.id)}
                          className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-transform shadow-sm ${
                            isInCart(item.id)
                              ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                              : "bg-gradient-to-r from-sky-500 to-blue-600 text-white border border-sky-500 hover:translate-y-0.5 hover:shadow-md"
                          }`}
                        >
                          {isInCart(item.id) ? (
                            <>
                              <CheckCircle2 size={14} />
                              Added
                            </>
                          ) : (
                            <>
                              <ShoppingCart size={14} />
                              Add to Cart
                            </>
                          )}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* MOBILE CARDS */}
        <div className="grid md:hidden gap-5 mt-8">
          {filtered.map((item, idx) => {
            const featured = idx === 0 && bankFilter === "All";
            return (
              <div
                key={item.id}
                className="bg-white/90 rounded-2xl shadow-[0_16px_35px_rgba(15,23,42,0.12)] border border-slate-100 overflow-hidden"
              >
                {/* Card header */}
                <div className="px-4 pt-4 pb-3 bg-gradient-to-r from-sky-500 via-sky-400 to-blue-500 text-white relative">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">
                        {item.bank} • ${item.limit.toLocaleString()}
                      </h3>
                      <p className="text-xs text-sky-50/90">
                        Card #{item.cardId} • {item.opened}
                      </p>
                    </div>
                    <div className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center text-xs font-semibold">
                      {item.bankShort.slice(0, 2).toUpperCase()}
                    </div>
                  </div>
                  {featured && (
                    <span className="absolute bottom-2 right-3 rounded-full bg-emerald-100/90 text-emerald-700 text-[10px] font-semibold px-2 py-0.5">
                      Featured
                    </span>
                  )}
                </div>

                {/* Body */}
                <div className="px-4 py-4 space-y-2 text-sm text-slate-700">
                  <p>
                    <span className="font-semibold text-slate-900">
                      Deadline:
                    </span>{" "}
                    {item.deadline}
                  </p>
                  <p>
                    <span className="font-semibold text-slate-900">
                      Reporting Window:
                    </span>{" "}
                    {item.reporting}
                  </p>
                  <p>
                    <span className="font-semibold text-slate-900">
                      Availability:
                    </span>{" "}
                    <span className="text-emerald-600 font-semibold">
                      {item.availability} in stock
                    </span>
                  </p>
                  <p className="pt-1 text-base font-semibold text-slate-900">
                    Price: ${item.price.toFixed(2)}
                  </p>
                </div>

                {/* Action */}
                <div className="px-4 pb-4">
                  <button
                    onClick={() => handleAddToCart(item.id)}
                    className={`w-full inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-transform ${
                      isInCart(item.id)
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                        : "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md hover:translate-y-0.5"
                    }`}
                  >
                    {isInCart(item.id) ? (
                      <>
                        <CheckCircle2 size={16} />
                        Added to Cart
                      </>
                    ) : (
                      <>
                        <ShoppingCart size={16} />
                        Add to Cart
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
