// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} TradelineApp — All rights reserved.</p>
        <div className="mt-3 text-xs">
          <span className="mr-4">Privacy</span>
          <span className="mr-4">Terms</span>
          <span>Contact</span>
        </div>
      </div>
    </footer>
  )
}
