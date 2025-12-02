// src/components/Features.jsx
export default function Features(){
  const items = [
    { title: "Verified Accounts", desc: "High-quality tradelines from verified vendors." },
    { title: "Easy Management", desc: "Add, remove, and update tradelines quickly." },
    { title: "Secure Payments", desc: "Stripe-ready payments (optional integration)." }
  ];
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((it)=>(
          <div key={it.title} className="p-6 border rounded-lg">
            <h3 className="font-semibold">{it.title}</h3>
            <p className="mt-2 text-sm">{it.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
