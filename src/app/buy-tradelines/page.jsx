"use client";

import React, { useState } from 'react';

const BuyTradelinesPage = () => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [filters, setFilters] = useState({
    bankName: '',
    minCreditLimit: '',
    maxCreditLimit: '',
    minPrice: '',
    maxPrice: ''
  });
  const [showFilters, setShowFilters] = useState(false);

  const tradelines = [
    {
      id: 1,
      bankName: 'Chase',
      cardId: '25235',
      creditLimit: 5000.00,
      dateOpened: '2020 Feb',
      purchaseDeadline: 'Dec 31st',
      reportingPeriod: 'Jan 11th - Jan 18th',
      availability: '1 in stock',
      price: 327.60
    },
    {
      id: 2,
      bankName: 'Bank of America',
      cardId: '31991',
      creditLimit: 10000.00,
      dateOpened: '2022 Oct',
      purchaseDeadline: 'Dec 26th',
      reportingPeriod: 'Jan 6th - Jan 13th',
      availability: '1 in stock',
      price: 380.25
    },
    {
      id: 3,
      bankName: 'Chase',
      cardId: '13730',
      creditLimit: 12300.00,
      dateOpened: '2021 Nov',
      purchaseDeadline: 'Dec 25th',
      reportingPeriod: 'Jan 5th - Jan 12th',
      availability: '1 in stock',
      price: 380.25
    },
    {
      id: 4,
      bankName: 'Discover',
      cardId: '6309',
      creditLimit: 11500.00,
      dateOpened: '2020 Dec',
      purchaseDeadline: 'Dec 22nd',
      reportingPeriod: 'Jan 2nd - Jan 9th',
      availability: '1 in stock',
      price: 409.50
    },
    {
      id: 5,
      bankName: 'CP1',
      cardId: '21396',
      creditLimit: 16000.00,
      dateOpened: '2023 Jun',
      purchaseDeadline: 'Dec 5th',
      reportingPeriod: 'Dec 16th - Dec 23rd',
      availability: '1 in stock',
      price: 409.50
    },
    {
      id: 6,
      bankName: 'Barclays',
      cardId: '2392',
      creditLimit: 11250.00,
      dateOpened: '2020 Aug',
      purchaseDeadline: 'Dec 11th',
      reportingPeriod: 'Dec 22nd - Dec 29th',
      availability: '1 in stock',
      price: 409.50
    },
    {
      id: 7,
      bankName: 'Discover',
      cardId: '5055',
      creditLimit: 8500.00,
      dateOpened: '2021 Dec',
      purchaseDeadline: 'Dec 30th',
      reportingPeriod: 'Jan 10th - Jan 17th',
      availability: '1 in stock',
      price: 409.50
    }
  ];

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const applyFilters = (items) => {
    return items.filter(item => {
      return (
        (filters.bankName === '' || 
         item.bankName.toLowerCase().includes(filters.bankName.toLowerCase())) &&
        (filters.minCreditLimit === '' || item.creditLimit >= parseFloat(filters.minCreditLimit)) &&
        (filters.maxCreditLimit === '' || item.creditLimit <= parseFloat(filters.maxCreditLimit)) &&
        (filters.minPrice === '' || item.price >= parseFloat(filters.minPrice)) &&
        (filters.maxPrice === '' || item.price <= parseFloat(filters.maxPrice))
      );
    });
  };

  const sortedAndFilteredTradelines = React.useMemo(() => {
    let sortableItems = [...tradelines];
    
    // Apply filters
    sortableItems = applyFilters(sortableItems);
    
    // Apply sorting
    if (sortConfig.key) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    
    return sortableItems;
  }, [sortConfig, filters]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(amount);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Buy Tradelines</h1>
      
      <div className="mb-6">
        <button 
          onClick={() => setShowFilters(!showFilters)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Show Filters
        </button>
        
        {showFilters && (
          <div className="mt-4 p-4 border rounded-lg bg-gray-50">
            <h3 className="font-semibold mb-3">Filters</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Bank Name</label>
                <input
                  type="text"
                  name="bankName"
                  value={filters.bankName}
                  onChange={handleFilterChange}
                  className="w-full p-2 border rounded"
                  placeholder="Filter by bank name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Min Credit Limit</label>
                <input
                  type="number"
                  name="minCreditLimit"
                  value={filters.minCreditLimit}
                  onChange={handleFilterChange}
                  className="w-full p-2 border rounded"
                  placeholder="Min limit"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Max Credit Limit</label>
                <input
                  type="number"
                  name="maxCreditLimit"
                  value={filters.maxCreditLimit}
                  onChange={handleFilterChange}
                  className="w-full p-2 border rounded"
                  placeholder="Max limit"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Price Range</label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    name="minPrice"
                    value={filters.minPrice}
                    onChange={handleFilterChange}
                    className="w-1/2 p-2 border rounded"
                    placeholder="Min price"
                  />
                  <input
                    type="number"
                    name="maxPrice"
                    value={filters.maxPrice}
                    onChange={handleFilterChange}
                    className="w-1/2 p-2 border rounded"
                    placeholder="Max price"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-200"
                onClick={() => handleSort('bankName')}
              >
                Bank Name
                {sortConfig.key === 'bankName' && (
                  <span>{sortConfig.direction === 'asc' ? ' ↑' : ' ↓'}</span>
                )}
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-200"
                onClick={() => handleSort('cardId')}
              >
                Card ID
                {sortConfig.key === 'cardId' && (
                  <span>{sortConfig.direction === 'asc' ? ' ↑' : ' ↓'}</span>
                )}
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-200"
                onClick={() => handleSort('creditLimit')}
              >
                Credit Limit
                {sortConfig.key === 'creditLimit' && (
                  <span>{sortConfig.direction === 'asc' ? ' ↑' : ' ↓'}</span>
                )}
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-200"
                onClick={() => handleSort('dateOpened')}
              >
                Date Opened
                {sortConfig.key === 'dateOpened' && (
                  <span>{sortConfig.direction === 'asc' ? ' ↑' : ' ↓'}</span>
                )}
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-200"
                onClick={() => handleSort('purchaseDeadline')}
              >
                Purchase Deadline
                {sortConfig.key === 'purchaseDeadline' && (
                  <span>{sortConfig.direction === 'asc' ? ' ↑' : ' ↓'}</span>
                )}
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-200"
                onClick={() => handleSort('reportingPeriod')}
              >
                Reporting Period
                {sortConfig.key === 'reportingPeriod' && (
                  <span>{sortConfig.direction === 'asc' ? ' ↑' : ' ↓'}</span>
                )}
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Availability
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-200"
                onClick={() => handleSort('price')}
              >
                Price
                {sortConfig.key === 'price' && (
                  <span>{sortConfig.direction === 'asc' ? ' ↑' : ' ↓'}</span>
                )}
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {sortedAndFilteredTradelines.map((tradeline) => (
              <tr key={tradeline.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{tradeline.bankName}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{tradeline.cardId}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{formatCurrency(tradeline.creditLimit)}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{tradeline.dateOpened}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{tradeline.purchaseDeadline}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{tradeline.reportingPeriod}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {tradeline.availability}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{formatCurrency(tradeline.price)}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900">
                    Add to cart
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <p className="mt-4 text-sm text-gray-500">Click on column headers to sort the list.</p>
    </div>
  );
};

export default BuyTradelinesPage;
