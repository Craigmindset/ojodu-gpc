"use client";

import { Instagram, Facebook, MapPin, Phone, Music } from "lucide-react";

export default function Home() {
  return (
    <main
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center bg-black"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://res.cloudinary.com/dylmpyglw/image/upload/q_auto/f_auto/v1773927889/arkoflight/images/1773927889372_hebron_hosting_prophet_isaiah_macwealth.jpg")',
        backgroundAttachment: "fixed",
      }}
    >
      <div className="w-full max-w-md px-4 py-8 text-center">
        {/* Social Links Section */}
        <div className="mb-12">
          <div className="flex justify-center gap-6 mb-8">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/gpc.ojodu/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-transform hover:scale-110 active:scale-95"
              aria-label="Instagram"
            >
              <Instagram className="w-8 h-8 text-white hover:text-gray-300" />
            </a>

            {/* Facebook */}
            <a
              href="https://web.facebook.com/gpcojodu"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-transform hover:scale-110 active:scale-95"
              aria-label="Facebook"
            >
              <Facebook className="w-8 h-8 text-white hover:text-gray-300" />
            </a>

            {/* Audio */}
            <a
              href="https://macwealthfreestore.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-transform hover:scale-110 active:scale-95"
              aria-label="Audio Store"
            >
              <Music className="w-8 h-8 text-white hover:text-gray-300" />
            </a>

            {/* Spotify */}
            <a
              href="https://open.spotify.com/show/1irvr4tTzXbHa1DaDWNgbn"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-transform hover:scale-110 active:scale-95"
              aria-label="Spotify"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-8 h-8 text-white hover:text-gray-300"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 1.5A10.5 10.5 0 1 0 22.5 12 10.51 10.51 0 0 0 12 1.5Zm4.82 15.16a.88.88 0 0 1-1.2.29 9.9 9.9 0 0 0-7.55-.97.88.88 0 1 1-.53-1.67 11.65 11.65 0 0 1 8.88 1.15.88.88 0 0 1 .4 1.2Zm1.71-2.54a1.09 1.09 0 0 1-1.49.36 12.27 12.27 0 0 0-9.27-1.18 1.09 1.09 0 0 1-.59-2.1 14.45 14.45 0 0 1 10.92 1.41 1.09 1.09 0 0 1 .43 1.51Zm.15-2.64a14.65 14.65 0 0 0-11.68-1.43 1.31 1.31 0 1 1-.75-2.5 17.28 17.28 0 0 1 13.76 1.69 1.31 1.31 0 1 1-1.33 2.24Z" />
              </svg>
            </a>
          </div>

          {/* Main Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-8 whitespace-nowrap">
            Gospel Pillars Church Ojodu
          </h1>

          {/* Map Direction Section */}
          <a
            href="https://maps.app.goo.gl/rfKXL6mGdBBQK2C38"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 mb-8 bg-white/10 backdrop-blur-sm py-3 px-4 rounded-lg border border-white/20 transition-all transform hover:scale-105 active:scale-95"
          >
            <MapPin className="w-5 h-5 text-white flex-shrink-0" />
            <span className="text-white text-sm sm:text-base">
              Use Map Direction
            </span>
          </a>

          {/* Call Section */}
          <div className="space-y-3">
            <p className="text-white/80 text-sm mb-4">
              Call us for more information
            </p>

            <div className="grid grid-cols-2 gap-2">
              {/* First Phone Number */}
              <a
                href="tel:09030079555"
                className="flex items-center justify-center gap-3 bg-white/15 hover:bg-white/25 backdrop-blur-sm py-3 px-4 rounded-lg border border-white/20 transition-all transform hover:scale-105 active:scale-95"
              >
                <Phone className="w-5 h-5 text-white flex-shrink-0" />
                <span className="text-white font-semibold text-sm sm:text-base">
                  09030079555
                </span>
              </a>

              {/* Second Phone Number */}
              <a
                href="tel:09060325545"
                className="flex items-center justify-center gap-3 bg-white/15 hover:bg-white/25 backdrop-blur-sm py-3 px-4 rounded-lg border border-white/20 transition-all transform hover:scale-105 active:scale-95"
              >
                <Phone className="w-5 h-5 text-white flex-shrink-0" />
                <span className="text-white font-semibold text-sm sm:text-base">
                  09060325545
                </span>
              </a>
            </div>

            <div className="mt-8 space-y-3">
              <h2 className="text-white text-xl sm:text-2xl font-bold">
                Input Form
              </h2>
              <a
                href="https://forms.gle/TuMF9hib3AZVrMHr5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-white/90 underline underline-offset-4 hover:text-white"
              >
                https://forms.gle/TuMF9hib3AZVrMHr5
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
