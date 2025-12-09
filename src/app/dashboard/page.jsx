"use client";

import React, { useState, useEffect } from 'react';
import { Line, Pie, Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';
import {
    FiUser, FiMail, FiPhone, FiSave,
    FiTrendingUp, FiPieChart, FiShoppingCart,
    FiCheckCircle, FiClock, FiDollarSign,
    FiRefreshCw, FiLogOut, FiCreditCard,
    FiBriefcase, FiActivity, FiFilter,
    FiEye, FiArrowUp, FiArrowDown,
    FiChevronDown, FiBell, FiSettings,
    FiHome, FiBarChart2, FiGrid, FiSearch,
    FiTrendingDown, FiPlus, FiDownload,
    FiExternalLink, FiCalendar
} from 'react-icons/fi';
import { BsGraphUp, BsWallet2 } from 'react-icons/bs';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

// Enhanced color scheme
const colors = {
    primary: '#3b82f6',
    secondary: '#8b5cf6',
    success: '#10b981',
    warning: '#f59e0b',
    danger: '#ef4444',
    dark: '#1f2937',
    light: '#f9fafb',
    purple: '#8b5cf6',
    indigo: '#6366f1',
    blue: '#0ea5e9',
};

// Sections data with improved icons
const sections = [
    { id: 'dashboard', label: 'Dashboard', icon: <FiHome />, color: colors.primary },
    { id: 'myStocks', label: 'My Stocks', icon: <BsGraphUp />, color: colors.success },
    { id: 'account', label: 'Account', icon: <FiUser />, color: colors.purple },
    { id: 'creditScore', label: 'Credit Score', icon: <FiCreditCard />, color: colors.indigo },
    { id: 'history', label: 'History', icon: <FiCalendar />, color: colors.warning },
];

// Enhanced stock data with realistic values
const stockData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    datasets: [
        {
            label: 'Portfolio Value',
            data: [85000, 92000, 98000, 105000, 115000, 128000, 135000, 142000],
            borderColor: colors.primary,
            backgroundColor: 'rgba(59, 130, 246, 0.08)',
            borderWidth: 3,
            tension: 0.4,
            fill: true,
            pointBackgroundColor: colors.primary,
            pointBorderColor: '#ffffff',
            pointBorderWidth: 2,
            pointRadius: 4,
            pointHoverRadius: 8,
        },
    ],
};

const pieData = {
    labels: ['Technology', 'Finance', 'Healthcare', 'Energy', 'Consumer'],
    datasets: [
        {
            data: [42, 23, 18, 10, 7],
            backgroundColor: [
                colors.primary,
                colors.success,
                colors.purple,
                colors.warning,
                colors.danger
            ],
            borderWidth: 3,
            borderColor: '#ffffff',
            hoverOffset: 20,
        },
    ],
};

const allStocks = [
    { symbol: 'AAPL', name: 'Apple Inc.', price: 182.34, change: '+2.15%', volume: '85M', sector: 'Technology' },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 2850.75, change: '+1.81%', volume: '1.5M', sector: 'Technology' },
    { symbol: 'TSLA', name: 'Tesla Inc.', price: 245.80, change: '+3.20%', volume: '120M', sector: 'Automotive' },
    { symbol: 'MSFT', name: 'Microsoft', price: 415.60, change: '+1.42%', volume: '45M', sector: 'Technology' },
    { symbol: 'AMZN', name: 'Amazon', price: 3512.40, change: '+2.80%', volume: '3.8M', sector: 'Consumer' },
    { symbol: 'NVDA', name: 'NVIDIA', price: 520.40, change: '+7.17%', volume: '85M', sector: 'Technology' },
    { symbol: 'JPM', name: 'JPMorgan', price: 152.80, change: '+2.90%', volume: '15M', sector: 'Finance' },
    { symbol: 'JNJ', name: 'Johnson & Johnson', price: 160.25, change: '+1.23%', volume: '8M', sector: 'Healthcare' },
];

const myStocks = [
    { symbol: 'AAPL', shares: 50, avgPrice: 178.50, currentPrice: 182.34, value: 9117, change: '+2.15%', dayChange: '+1.2%' },
    { symbol: 'GOOGL', shares: 5, avgPrice: 2800.00, currentPrice: 2850.75, value: 14253.75, change: '+1.81%', dayChange: '+0.8%' },
    { symbol: 'TSLA', shares: 10, avgPrice: 240.00, currentPrice: 245.80, value: 2458, change: '+3.20%', dayChange: '+2.1%' },
    { symbol: 'NVDA', shares: 20, avgPrice: 485.60, currentPrice: 520.40, value: 10408, change: '+7.17%', dayChange: '+3.5%' },
];

const ordersHistory = [
    { id: 1, stock: 'AAPL', type: 'Buy', shares: 50, price: 178.50, total: 8925, date: 'Today, 10:30 AM', status: 'Completed' },
    { id: 2, stock: 'GOOGL', type: 'Buy', shares: 5, price: 2800.00, total: 14000, date: 'Yesterday, 14:20', status: 'Completed' },
    { id: 3, stock: 'TSLA', type: 'Buy', shares: 10, price: 240.00, total: 2400, date: 'Jan 5, 09:15', status: 'Completed' },
    { id: 4, stock: 'AAPL', type: 'Sell', shares: 10, price: 180.00, total: 1800, date: 'Dec 20, 11:45', status: 'Completed' },
    { id: 5, stock: 'NVDA', type: 'Buy', shares: 20, price: 485.60, total: 9712, date: 'Dec 15, 16:30', status: 'Completed' },
];

// Market indices
const marketIndices = [
    { name: 'S&P 500', value: '4,890.12', change: '+0.75%', trend: 'up' },
    { name: 'NASDAQ', value: '15,432.87', change: '+1.25%', trend: 'up' },
    { name: 'DOW 30', value: '38,456.23', change: '+0.45%', trend: 'up' },
    { name: 'VIX', value: '13.45', change: '-2.15%', trend: 'down' },
];

export default function TradeLineExchange() {
    const [activeSection, setActiveSection] = useState('dashboard');
    const [userDetails, setUserDetails] = useState({
        name: 'Alex Johnson',
        email: 'alex.johnson@tradeline.com',
        phone: '+1 (555) 123-4567',
        accountId: 'TLX-458923',
        joinDate: 'June 15, 2023',
        accountType: 'Premium',
        avatar: 'AJ',
    });
    const [portfolioValue, setPortfolioValue] = useState(36237);
    const [todayGain, setTodayGain] = useState(425);
    const [totalGain, setTotalGain] = useState(2450);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredStocks, setFilteredStocks] = useState(allStocks);
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Simulate real-time updates
    useEffect(() => {
        const interval = setInterval(() => {
            const fluctuation = (Math.random() * 300 - 150);
            setPortfolioValue(prev => Math.max(35000, prev + fluctuation));
            setTodayGain(prev => prev + (Math.random() * 80 - 40));
            setTotalGain(prev => prev + (Math.random() * 50 - 25));
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (!searchQuery) {
            setFilteredStocks(allStocks);
        } else {
            const filtered = allStocks.filter(stock =>
                stock.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
                stock.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredStocks(filtered);
        }
    }, [searchQuery]);

    const handleLogout = () => {
        if (window.confirm('Are you sure you want to logout?')) {
            alert('Logged out successfully');
            // In a real app, you would clear auth tokens and redirect
        }
    };

    const refreshData = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
    };

    const formatCurrency = (value) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(value);
    };

    const formatPrice = (value) => {
        return new Intl.NumberFormat('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(value);
    };

    const renderDashboard = () => (
        <div className="space-y-8">
            {/* Market Overview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {marketIndices.map((index, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="text-sm text-gray-500 font-medium">{index.name}</p>
                                <p className="text-2xl font-bold text-gray-900 mt-2">{index.value}</p>
                            </div>
                            <div className={`p-2 rounded-lg ${index.trend === 'up' ? 'bg-green-50' : 'bg-red-50'}`}>
                                {index.trend === 'up' ? (
                                    <FiArrowUp className="text-green-600" />
                                ) : (
                                    <FiArrowDown className="text-red-600" />
                                )}
                            </div>
                        </div>
                        <p className={`text-sm font-semibold mt-3 ${index.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                            {index.change}
                        </p>
                    </div>
                ))}
            </div>

            {/* Portfolio Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Portfolio Summary */}
                <div className="lg:col-span-2 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-sm border border-gray-100 p-6">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900">Portfolio Overview</h3>
                            <p className="text-gray-500 text-sm mt-1">Real-time performance tracking</p>
                        </div>
                        <button
                            onClick={refreshData}
                            className="flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-gray-700 transition-colors"
                        >
                            <FiRefreshCw className={`${isLoading ? 'animate-spin' : ''}`} />
                            Refresh
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-blue-500/20 rounded-lg">
                                    <BsWallet2 className="text-blue-600 text-xl" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Total Value</p>
                                    <p className="text-2xl font-bold text-gray-900">{formatCurrency(portfolioValue)}</p>
                                </div>
                            </div>
                            <p className={`text-sm font-medium mt-2 ${todayGain >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                {todayGain >= 0 ? '+' : ''}{formatCurrency(todayGain)} today
                            </p>
                        </div>

                        <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-green-500/20 rounded-lg">
                                    <FiTrendingUp className="text-green-600 text-xl" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Total Gain</p>
                                    <p className="text-2xl font-bold text-gray-900">{formatCurrency(totalGain)}</p>
                                </div>
                            </div>
                            <p className="text-sm text-green-600 font-medium mt-2">+8.2% overall</p>
                        </div>

                        <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-purple-500/20 rounded-lg">
                                    <FiBriefcase className="text-purple-600 text-xl" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Holdings</p>
                                    <p className="text-2xl font-bold text-gray-900">{myStocks.length}</p>
                                </div>
                            </div>
                            <p className="text-sm text-gray-600 mt-2">Stocks in portfolio</p>
                        </div>
                    </div>

                    {/* Chart */}
                    <div className="h-72">
                        <Line
                            data={stockData}
                            options={{
                                responsive: true,
                                maintainAspectRatio: false,
                                scales: {
                                    y: {
                                        beginAtZero: false,
                                        grid: {
                                            color: 'rgba(0, 0, 0, 0.05)',
                                            drawBorder: false,
                                        },
                                        ticks: {
                                            color: '#6b7280',
                                            callback: (value) => `$${(value / 1000).toFixed(0)}K`,
                                            font: {
                                                family: "'Inter', sans-serif",
                                            },
                                        },
                                    },
                                    x: {
                                        grid: {
                                            color: 'rgba(0, 0, 0, 0.05)',
                                            drawBorder: false,
                                        },
                                        ticks: {
                                            color: '#6b7280',
                                            font: {
                                                family: "'Inter', sans-serif",
                                            },
                                        },
                                    },
                                },
                                plugins: {
                                    legend: { display: false },
                                    tooltip: {
                                        backgroundColor: 'rgba(17, 24, 39, 0.95)',
                                        titleColor: '#f3f4f6',
                                        bodyColor: '#f3f4f6',
                                        borderColor: colors.primary,
                                        borderWidth: 1,
                                        cornerRadius: 8,
                                        padding: 12,
                                        displayColors: false,
                                        callbacks: {
                                            label: (context) => `$${context.parsed.y.toLocaleString()}`
                                        }
                                    },
                                },
                                interaction: {
                                    intersect: false,
                                    mode: 'index',
                                },
                            }}
                        />
                    </div>
                </div>

                {/* Asset Allocation */}
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-sm border border-gray-100 p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Asset Allocation</h3>
                    <div className="h-56">
                        <Doughnut
                            data={pieData}
                            options={{
                                responsive: true,
                                maintainAspectRatio: false,
                                cutout: '70%',
                                plugins: {
                                    legend: {
                                        position: 'bottom',
                                        labels: {
                                            color: '#6b7280',
                                            font: {
                                                family: "'Inter', sans-serif",
                                                size: 11,
                                            },
                                            padding: 20,
                                            usePointStyle: true,
                                            pointStyle: 'circle',
                                        },
                                    },
                                },
                            }}
                        />
                    </div>
                    <div className="mt-6 space-y-3">
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Diversification Score</span>
                            <span className="font-bold text-gray-900">8.2/10</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500" style={{ width: '82%' }}></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-sm border border-gray-100 p-6">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900">Recent Activity</h3>
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-2">
                        View All
                        <FiExternalLink />
                    </button>
                </div>
                <div className="space-y-4">
                    {ordersHistory.slice(0, 3).map((order) => (
                        <div key={order.id} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors">
                            <div className="flex items-center gap-4">
                                <div className={`p-3 rounded-lg ${order.type === 'Buy' ? 'bg-green-50' : 'bg-red-50'}`}>
                                    {order.type === 'Buy' ? (
                                        <FiArrowUp className="text-green-600" />
                                    ) : (
                                        <FiArrowDown className="text-red-600" />
                                    )}
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">{order.stock}</p>
                                    <p className="text-sm text-gray-500">{order.date}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="font-bold text-gray-900">{order.shares} shares</p>
                                <p className="text-sm text-gray-500">${formatPrice(order.price)}</p>
                            </div>
                            <div className={`px-4 py-1.5 rounded-full text-sm font-medium ${order.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                                }`}>
                                {order.status}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const renderMyStocks = () => (
        <div className="space-y-8">
            {/* Stocks Header */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-sm border border-gray-100 p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900">Market Watch</h3>
                        <p className="text-gray-500 mt-2">Real-time stock prices and trading</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="relative flex-1 md:w-80">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FiSearch className="text-gray-400" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search stocks, symbols..."
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <button className="px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors flex items-center gap-2">
                            <FiPlus />
                            Add Stock
                        </button>
                    </div>
                </div>
            </div>

            {/* Stocks Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredStocks.map((stock, index) => (
                    <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg hover:border-blue-200 transition-all duration-300 group">
                        <div className="flex justify-between items-start mb-6">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-blue-50 rounded-xl group-hover:scale-110 transition-transform">
                                    <span className="text-2xl font-bold text-blue-600">{stock.symbol.charAt(0)}</span>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900">{stock.symbol}</h4>
                                    <p className="text-sm text-gray-500">{stock.name}</p>
                                </div>
                            </div>
                            <span className={`px-3 py-1.5 rounded-full text-sm font-semibold ${stock.change.startsWith('+')
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-100 text-red-800'
                                }`}>
                                {stock.change}
                            </span>
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">Current Price</span>
                                <span className="text-2xl font-bold text-gray-900">${formatPrice(stock.price)}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">Volume</span>
                                <span className="font-medium text-gray-900">{stock.volume}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">Sector</span>
                                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                                    {stock.sector}
                                </span>
                            </div>
                        </div>

                        <div className="mt-6 flex gap-3">
                            <button className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-xl transition-all">
                                Buy Now
                            </button>
                            <button className="flex-1 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-xl transition-colors flex items-center justify-center gap-2">
                                <FiEye />
                                Watch
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderAccount = () => (
        <div className="space-y-8">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-sm border border-gray-100 p-8">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900">Account Settings</h3>
                        <p className="text-gray-500 mt-2">Manage your profile and security</p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-xl">
                        <FiSettings className="text-blue-600 text-xl" />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Profile Info */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-100">
                            <h4 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h4>
                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                        <input
                                            type="text"
                                            value={userDetails.name}
                                            onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                        <input
                                            type="email"
                                            value={userDetails.email}
                                            onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        value={userDetails.phone}
                                        onChange={(e) => setUserDetails({ ...userDetails, phone: e.target.value })}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                                <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-xl transition-all">
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Account Stats */}
                    <div className="space-y-6">
                        <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl border border-gray-200">
                            <h4 className="text-lg font-semibold text-gray-900 mb-4">Account Stats</h4>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">Member Since</span>
                                    <span className="font-medium">{userDetails.joinDate}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">Account Type</span>
                                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                                        {userDetails.accountType}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">Account ID</span>
                                    <span className="font-mono font-medium">{userDetails.accountId}</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl border border-gray-200">
                            <h4 className="text-lg font-semibold text-gray-900 mb-4">Security</h4>
                            <div className="space-y-3">
                                <button className="w-full py-3 px-4 bg-white border border-gray-300 hover:bg-gray-50 rounded-xl text-gray-700 font-medium transition-colors flex items-center justify-between">
                                    <span>Change Password</span>
                                    <FiArrowUp className="rotate-90 text-gray-400" />
                                </button>
                                <button className="w-full py-3 px-4 bg-white border border-gray-300 hover:bg-gray-50 rounded-xl text-gray-700 font-medium transition-colors flex items-center justify-between">
                                    <span>Two-Factor Auth</span>
                                    <div className="w-10 h-6 bg-green-500 rounded-full relative">
                                        <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1"></div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderCreditScore = () => (
        <div className="space-y-8">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-sm border border-gray-100 p-8">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900">Credit Health</h3>
                        <p className="text-gray-500 mt-2">Your financial wellness score</p>
                    </div>
                    <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl">
                        <FiCreditCard className="text-white text-xl" />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Credit Score Display */}
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-200">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h4 className="text-lg font-semibold text-gray-900">Current Score</h4>
                                <p className="text-gray-600 text-sm">Updated daily</p>
                            </div>
                            <div className="text-right">
                                <div className="text-5xl font-bold text-gray-900">750</div>
                                <div className="text-green-600 font-semibold mt-2">Excellent</div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="text-gray-600">Score Range</span>
                                    <span className="font-medium">300-850</span>
                                </div>
                                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-green-400 to-emerald-500" style={{ width: '88%' }}></div>
                                </div>
                            </div>
                            <div className="text-sm text-gray-600">
                                Better than 85% of users in your age group
                            </div>
                        </div>
                    </div>

                    {/* Recommendations */}
                    <div className="space-y-6">
                        <div className="p-6 bg-white rounded-2xl border border-gray-200">
                            <h4 className="text-lg font-semibold text-gray-900 mb-4">Improvement Tips</h4>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3">
                                    <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center">
                                        <span className="text-blue-600 text-sm font-bold">1</span>
                                    </div>
                                    <span className="text-gray-700">Reduce credit utilization below 30%</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center">
                                        <span className="text-blue-600 text-sm font-bold">2</span>
                                    </div>
                                    <span className="text-gray-700">Add another credit account</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center">
                                        <span className="text-blue-600 text-sm font-bold">3</span>
                                    </div>
                                    <span className="text-gray-700">Keep payment history perfect</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Credit History */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Credit History</h3>
                <div className="h-64">
                    <Line
                        data={{
                            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                            datasets: [{
                                label: 'Credit Score',
                                data: [720, 730, 735, 740, 745, 748, 750],
                                borderColor: colors.success,
                                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                                borderWidth: 3,
                                tension: 0.4,
                                fill: true,
                            }]
                        }}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            scales: {
                                y: {
                                    beginAtZero: false,
                                    min: 700,
                                    max: 800,
                                    grid: { color: 'rgba(0, 0, 0, 0.05)' },
                                    ticks: { color: '#6b7280' },
                                },
                                x: {
                                    grid: { color: 'rgba(0, 0, 0, 0.05)' },
                                    ticks: { color: '#6b7280' },
                                },
                            },
                            plugins: {
                                legend: { display: false },
                            },
                        }}
                    />
                </div>
            </div>
        </div>
    );

    const renderHistory = () => (
        <div className="space-y-8">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-sm border border-gray-100 p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900">Transaction History</h3>
                        <p className="text-gray-500 mt-2">All your trading activities</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="px-4 py-3 border border-gray-300 hover:bg-gray-50 rounded-xl text-gray-700 font-medium transition-colors flex items-center gap-2">
                            <FiDownload />
                            Export CSV
                        </button>
                        <button className="px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors">
                            Filter
                        </button>
                    </div>
                </div>

                <div className="overflow-hidden rounded-xl border border-gray-200">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700">Date & Time</th>
                                <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700">Symbol</th>
                                <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700">Type</th>
                                <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700">Quantity</th>
                                <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700">Price</th>
                                <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700">Total</th>
                                <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {ordersHistory.map((order) => (
                                <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="py-4 px-6">
                                        <div className="text-sm text-gray-900">{order.date}</div>
                                    </td>
                                    <td className="py-4 px-6">
                                        <div className="font-semibold text-gray-900">{order.stock}</div>
                                    </td>
                                    <td className="py-4 px-6">
                                        <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium ${order.type === 'Buy'
                                            ? 'bg-green-100 text-green-800'
                                            : 'bg-red-100 text-red-800'
                                            }`}>
                                            {order.type === 'Buy' ? (
                                                <FiArrowUp className="text-green-600" />
                                            ) : (
                                                <FiArrowDown className="text-red-600" />
                                            )}
                                            {order.type}
                                        </span>
                                    </td>
                                    <td className="py-4 px-6">
                                        <div className="text-gray-900 font-medium">{order.shares}</div>
                                    </td>
                                    <td className="py-4 px-6">
                                        <div className="text-gray-900">${formatPrice(order.price)}</div>
                                    </td>
                                    <td className="py-4 px-6">
                                        <div className="font-bold text-gray-900">{formatCurrency(order.total)}</div>
                                    </td>
                                    <td className="py-4 px-6">
                                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                                            <FiCheckCircle className="text-green-600" />
                                            {order.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="flex justify-between items-center mt-8">
                    <div className="text-sm text-gray-500">
                        Showing {ordersHistory.length} of {ordersHistory.length} transactions
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                            Previous
                        </button>
                        <button className="px-3 py-2 bg-blue-600 text-white rounded-lg">
                            1
                        </button>
                        <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                            2
                        </button>
                        <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 bg-white pt-20 pb-10">
            {/* Modern Header */}
            <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        {/* Left Section */}
                        <div className="flex items-center gap-8">
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-sm">
                                    <span className="text-white font-bold text-xl">TL</span>
                                </div>
                                <div>
                                    <h1 className="text-xl font-bold text-gray-900">TradeLine Exchange</h1>
                                    <p className="text-sm text-gray-500">Professional Trading Platform</p>
                                </div>
                            </div>

                            {/* Quick Stats */}
                            <div className="hidden md:flex items-center gap-6">
                                <div className="text-right">
                                    <p className="text-xs text-gray-500 font-medium">Portfolio Value</p>
                                    <p className="text-lg font-bold text-gray-900">{formatCurrency(portfolioValue)}</p>
                                </div>
                                <div className="h-6 w-px bg-gray-300"></div>
                                <div className="text-right">
                                    <p className="text-xs text-gray-500 font-medium">Today's Gain</p>
                                    <p className={`text-lg font-bold ${todayGain >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                        {todayGain >= 0 ? '+' : ''}{formatCurrency(todayGain)}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="flex items-center gap-4">
                            {/* Notifications */}
                            <button className="relative p-2.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-xl transition-colors">
                                <FiBell className="text-xl" />
                                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                                    3
                                </span>
                            </button>

                            {/* User Profile */}
                            <div className="relative">
                                <button
                                    onClick={() => setShowProfileMenu(!showProfileMenu)}
                                    className="flex items-center gap-3 p-1.5 hover:bg-gray-100 rounded-xl transition-colors"
                                >
                                    <div className="h-10 w-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold">
                                        {userDetails.avatar}
                                    </div>
                                    <div className="hidden md:block text-left">
                                        <p className="text-sm font-medium text-gray-900">{userDetails.name}</p>
                                        <p className="text-xs text-gray-500">{userDetails.accountType}</p>
                                    </div>
                                    <FiChevronDown className={`text-gray-500 transition-transform ${showProfileMenu ? 'rotate-180' : ''}`} />
                                </button>

                                {/* Profile Dropdown */}
                                {showProfileMenu && (
                                    <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 py-2 z-50">
                                        <div className="px-4 py-3 border-b border-gray-100">
                                            <p className="font-medium text-gray-900">{userDetails.name}</p>
                                            <p className="text-sm text-gray-500 truncate">{userDetails.email}</p>
                                        </div>
                                        <div className="py-2">
                                            <button className="w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-50 flex items-center gap-3">
                                                <FiUser className="text-gray-400" />
                                                <span>Profile Settings</span>
                                            </button>
                                            <button className="w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-50 flex items-center gap-3">
                                                <FiSettings className="text-gray-400" />
                                                <span>Account Settings</span>
                                            </button>
                                            <div className="border-t border-gray-100 my-2"></div>
                                            <button
                                                onClick={handleLogout}
                                                className="w-full px-4 py-3 text-left text-red-600 hover:bg-red-50 flex items-center gap-3"
                                            >
                                                <FiLogOut className="text-red-500" />
                                                <span>Log Out</span>
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-6 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Enhanced Sidebar */}
                    <div className="lg:w-72">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sticky top-24">
                            <div className="mb-2">
                                <h2 className="text-lg font-bold text-gray-900 mb-2">Navigation</h2>
                                <p className="text-sm text-gray-500">Access different trading features</p>
                            </div>

                            <div className="space-y-2">
                                {sections.map((section) => (
                                    <button
                                        key={section.id}
                                        onClick={() => setActiveSection(section.id)}
                                        className={` w-full flex items-center gap-4 px-4 py-2 rounded-xl transition-all duration-300 ${activeSection === section.id
                                            ? 'bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 text-blue-700 shadow-sm'
                                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 hover:shadow-sm'
                                            }`}
                                    >
                                        <div className={`p-2.5 rounded-lg ${activeSection === section.id
                                            ? 'bg-white shadow-sm'
                                            : 'bg-gray-100'
                                            }`}>
                                            <div style={{ color: activeSection === section.id ? section.color : '#6b7280' }}>
                                                {section.icon}
                                            </div>
                                        </div>
                                        <span className="font-medium">{section.label}</span>
                                        {activeSection === section.id && (
                                            <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full"></div>
                                        )}
                                    </button>
                                ))}
                            </div>

                            {/* Help Section */}
                            <div className="mt-8 pt-2 border-t border-gray-200">
                                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-100">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-2 bg-blue-100 rounded-lg">
                                            <span className="text-blue-600 font-bold">?</span>
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900">Need help?</p>
                                            <p className="text-sm text-gray-600">Our support team is here 24/7</p>
                                        </div>
                                    </div>
                                    <button className="w-full mt-3 py-2.5 bg-white border border-blue-200 text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors">
                                        Contact Support
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1">
                        {activeSection === 'dashboard' && renderDashboard()}
                        {activeSection === 'myStocks' && renderMyStocks()}
                        {activeSection === 'account' && renderAccount()}
                        {activeSection === 'creditScore' && renderCreditScore()}
                        {activeSection === 'history' && renderHistory()}
                    </div>
                </div>
            </main>

            {/* Modern Footer */}

        </div>
    );
}