'use client';

import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            About Us
          </h1>
        </div>

        <div className="mt-16">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-8 sm:px-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Tradeline Supply Company, LLC</h2>
                  <p className="text-gray-700 mb-6">
                    Tradeline Supply Company, LLC is the leading niche fintech platform designed exclusively for the tradeline industry. 
                    Over the years we have built the highest quality peer-to-peer tradeline marketplace, servicing direct-to-consumer 
                    businesses and supporting the secondary tradeline reseller market.
                  </p>
                </div>
                <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    alt="Financial growth and credit building"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-6 py-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Mission Statement</h2>
                  <p className="text-gray-700">
                    Tradeline Supply Company, LLC aims to reduce financial inequalities and promote equal credit opportunity 
                    by advocating for the rights of our clients to have access to the same credit-building techniques that 
                    many others have had access to for over 40 years.
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Vision Statement</h2>
                  <p className="text-gray-700">
                    Tradeline Supply Company, LLC seeks to enlighten and empower all Americans with financial knowledge and 
                    access to resources that historically have only been available to affluent members of society.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
