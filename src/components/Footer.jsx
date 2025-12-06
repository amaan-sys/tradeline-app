"use client";

import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="bg-gradient-to-br bg-gray-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">

        {/* LEFT SECTION */}
        <div className="col-span-1 flex flex-col gap-6">
          <h1 className="text-4xl font-bold leading-tight">
            Learn the<br />Law. Know<br />the Difference
          </h1>

          {/* Email */}
          <div className="flex items-center gap-3">
            <svg width="20" height="20" fill="#4ADE80" viewBox="0 0 24 24">
              <path d="M12 13L2 6.76V18h20V6.76L12 13zm10-9H2l10 6 10-6z" />
            </svg>
            <span className="text-white/80">counselor@creditoracademy.com</span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-3">
            <svg width="20" height="20" fill="#4ADE80" viewBox="0 0 24 24">
              <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
            </svg>
            <span className="text-white/80">USA</span>
          </div>
        </div>

        {/* CENTER SECTION */}
        <div className="col-span-1 flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">Lawful & Policies</h2>

          <div className="flex flex-col gap-2 text-white/80">
            <a className="hover:text-white" href="#">Privacy Policies</a>
            <a className="hover:text-white" href="#">Terms and Condition</a>
            <a className="hover:text-white" href="#">Return and Refunds</a>
            <a className="hover:text-white" href="#">Membership Terms and Conditions</a>
          </div>
        </div>

        {/* CONTACT SECTION */}
        <div className="col-span-1 flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">Contact Us</h2>

          <a
            href="mailto:counselor@creditoracademy.com"
            className="flex items-center gap-3 text-white/80 hover:text-blue-300"
          >
            <svg width="22" height="22" fill="white" viewBox="0 0 24 24">
              <path d="M12 13L2 6.76V18h20V6.76L12 13zm10-9H2l10 6 10-6z" />
            </svg>
            counselor@creditoracademy.com
          </a>

          <a
            href="tel:+14254009246"
            className="flex items-center gap-3 text-white/80 hover:text-blue-300"
          >
            <svg width="22" height="22" fill="white" viewBox="0 0 24 24">
              <path d="M6.6 10.8c1.2 2.4 3.2 4.4 5.6 5.6l1.9-1.9c.2-.2.6-.3.9-.2 1 .3 2 .5 3 .5.5 0 .9.4.9.9V20c0 .5-.4.9-.9.9C9.4 20.9 3.1 14.6 3.1 6.9c0-.5.4-.9.9-.9h3.3c.5 0 .9.4.9.9 0 1 .2 2 .5 3 .1.3 0 .7-.2.9l-1.9 1.9z" />
            </svg>
            (425-400-9246)
          </a>

          <div className="flex items-center gap-3 text-white/80">
            <svg width="22" height="22" fill="white" viewBox="0 0 24 24">
              <path d="M12 1a11 11 0 100 22 11 11 0 000-22zm1 11h5v2h-7V6h2v6z" />
            </svg>
            9:00 AM to 5:00 PM EST
          </div>
        </div>

        {/* SOCIAL LINKS */}
        <div className="col-span-1 flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">Social Links</h2>
          <p className="text-white/60 text-sm">
            Follow us on social media to stay updated with our latest news and offerings.
          </p>

            <div className="flex flex-wrap gap-3">
            {[
              { name: 'Facebook', href: 'https://www.facebook.com/groups/1455118361753321/', icon: '/images/footer/facebook.webp' },
              { name: 'X', href: 'https://x.com/CreditorAcademy', icon: '/images/footer/twitter.webp' },
              { name: 'YouTube', href: 'https://www.youtube.com/@creditoracademy', icon: '/images/footer/youtube.webp' },
              { name: 'Rumble', href: 'https://rumble.com/user/CreditorAcademy', icon: '/images/footer/rumble.webp' },
              { name: 'TikTok', href: 'https://www.tiktok.com/@creditoracademy', icon: '/images/footer/tiktok.webp' },
            ].map((s) => (
              <a
                key={s.name}
                href={s.href}
                rel="noreferrer"
                target="_blank"
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-blue-500 transition"
              >
                <Image src={s.icon} alt={s.name} width={18} height={18} />
                {s.name}
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
