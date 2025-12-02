"use client";

import React, { useState } from 'react';

const SellTradelinesPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    bankName: 'discover',
    cardType: '',
    creditLimit: '',
    dateOpened: '',
    creditScore: '',
    isOnWaitlist: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add API call or form submission logic here
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold text-center mb-6">Selling Authorized User Tradelines</h1>
      
      <p className="text-lg text-center mb-8">
        Get a quote to find out how much you could earn by selling authorized user tradelines.
      </p>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              <strong>NOTICE:</strong> At this time, we are only enrolling Discover tradelines. Please enter your information below if you have Discover cards or would like to sign up for our waitlist for other banks.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name *</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name *</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Credit Card Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="bankName" className="block text-sm font-medium text-gray-700">Bank Name *</label>
                <select
                  id="bankName"
                  name="bankName"
                  value={formData.bankName}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="discover">Discover</option>
                  <option value="chase">Chase (Waitlist)</option>
                  <option value="bankofamerica">Bank of America (Waitlist)</option>
                  <option value="citi">Citi (Waitlist)</option>
                  <option value="amex">American Express (Waitlist)</option>
                  <option value="other">Other (Waitlist)</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="cardType" className="block text-sm font-medium text-gray-700">Card Type *</label>
                <input
                  type="text"
                  id="cardType"
                  name="cardType"
                  value={formData.cardType}
                  onChange={handleChange}
                  required
                  placeholder="e.g., Discover it, Discover More"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <label htmlFor="creditLimit" className="block text-sm font-medium text-gray-700">Credit Limit *</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <input
                    type="number"
                    id="creditLimit"
                    name="creditLimit"
                    value={formData.creditLimit}
                    onChange={handleChange}
                    required
                    className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md py-2 px-3"
                    placeholder="0.00"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="dateOpened" className="block text-sm font-medium text-gray-700">Date Opened *</label>
                <input
                  type="date"
                  id="dateOpened"
                  name="dateOpened"
                  value={formData.dateOpened}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="creditScore" className="block text-sm font-medium text-gray-700">Credit Score Range *</label>
              <select
                id="creditScore"
                name="creditScore"
                value={formData.creditScore}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select your credit score range</option>
                <option value="300-579">300-579 (Poor)</option>
                <option value="580-669">580-669 (Fair)</option>
                <option value="670-739">670-739 (Good)</option>
                <option value="740-799">740-799 (Very Good)</option>
                <option value="800-850">800-850 (Excellent)</option>
              </select>
            </div>

            {formData.bankName !== 'discover' && (
              <div className="mt-4 flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="isOnWaitlist"
                    name="isOnWaitlist"
                    type="checkbox"
                    checked={formData.isOnWaitlist}
                    onChange={handleChange}
                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="isOnWaitlist" className="font-medium text-gray-700">
                    Add me to the waitlist for {formData.bankName}
                  </label>
                  <p className="text-gray-500">We'll notify you when we start accepting {formData.bankName} cards.</p>
                </div>
              </div>
            )}
          </div>

          <div className="pt-6">
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {formData.bankName === 'discover' ? 'GET QUOTE' : 'JOIN WAITLIST'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SellTradelinesPage;
