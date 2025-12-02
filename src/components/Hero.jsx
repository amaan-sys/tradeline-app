// src/components/Hero.jsx
export default function Hero(){
  return (
    <section className="bg-gradient-to-r from-slate-800 to-slate-700 text-white py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-extrabold mb-4">Credit & Tradeline Management</h1>
        <p className="mb-6">Discover, add, and manage tradelines quickly. Simple UI for brokers and clients.</p>
        <div>
          <a href="#tradelines" className="bg-white text-slate-900 px-6 py-3 rounded-md font-semibold">Browse Tradelines</a>
        </div>
      </div>
    </section>
  )
}
