import React from 'react';
import Link from 'next/link';


const BrokersPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Sign up for wholesale tradelines access</h1>
      
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Column - Contact Form */}
        <div>
          <p className="mb-6">To register as a broker, enter your information here.</p>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name (*)</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email (*)</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number (*)</label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="consent"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  required
                />
              </div>
              <label htmlFor="consent" className="ml-2 block text-sm text-gray-700">
                I consent to be contacted via email & phone. Please review the{' '}
                <Link href="/privacy-policy" className="text-blue-600 hover:underline">privacy policy</Link>.
              </label>
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </form>
        </div>
        
        {/* Right Column - Steps */}
        <div>
          <h2 className="text-2xl font-bold mb-6">BECOME A TRADELINE BROKER</h2>
          <p className="mb-6">Follow these steps to become a tradeline broker partner.</p>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">#1 – Submit Application</h3>
              <p className="text-gray-700">
                Apply on this page to start the white label application and to ensure you are aware of our compliance policies.
                There are no fees to join and it is easy to qualify.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">#2 – Send Documentation</h3>
              <p className="text-gray-700">
                Return a completed application and business documentation.
                Easy approvals in as little as one business day.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">#3 – Place Orders</h3>
              <p className="text-gray-700">
                Sell our tradelines under your company name.
                Set your own tradeline prices and profit margins.
              </p>
            </div>
          </div>
          
          <div className="mt-10">
            <h3 className="text-xl font-bold mb-4">TRADELINE SELLING BENEFITS</h3>
            <p className="mb-4">Want to help your clients acquire tradelines? Join the broker program and earn these benefits:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Help your clients</span>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Sell to your clients</span>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Access the largest marketplace</span>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Build a new sales channel</span>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Set your prices</span>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Use the website API</span>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Empower with high closing rates</span>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Get volume discounts</span>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0  ​0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Grow with support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Pricing Section */}
      <div className="mt-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">BROKER PRICING</h2>
        <p className="mb-6">
          Brokers are eligible to receive the following discounting based on the total volume of orders:
        </p>
        
        <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lifetime Volume</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Discount</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">$0 - $4,999</td>
                <td className="px-6 py-4 whitespace-nowrap">5%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">$5,000 - $9,999</td>
                <td className="px-6 py-4 whitespace-nowrap">7.5%</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">$10,000 - $24,999</td>
                <td className="px-6 py-4 whitespace-nowrap">10%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">$25,000+</td>
                <td className="px-6 py-4 whitespace-nowrap">15%</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="text-sm text-gray-600 mb-10">
          *Please note that Tradeline Supply Company, LLC reserves the right to modify or discontinue discounts, promotions, and eligibility criteria at any time without notice. Changes may apply to both new and existing customers.
        </p>
      </div>
      
      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto mt-16">
        <h2 className="text-2xl font-bold mb-6">TRADELINE SELLING FAQS</h2>
        <p className="mb-8">
          Have questions about selling authorized user tradelines? Start with these{' '}
          <Link href="/faq" className="text-blue-600 hover:underline">most popular questions and answers</Link>.
        </p>
      </div>
      
      {/* Videos Section */}
      <div className="max-w-4xl mx-auto mt-16">
        <h2 className="text-2xl font-bold mb-6">RECOMMENDED VIDEOS</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-100 aspect-video flex items-center justify-center rounded-lg">
            <p className="text-gray-500">Video Placeholder 1</p>
          </div>
          <div className="bg-gray-100 aspect-video flex items-center justify-center rounded-lg">
            <p className="text-gray-500">Video Placeholder 2</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrokersPage;
