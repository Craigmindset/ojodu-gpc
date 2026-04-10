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
          </div>

          {/* Main Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-balance leading-tight mb-8">
            Join every sunday at Gospel Pillars Church Ojodu
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

            <div className="flex flex-col gap-2">
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
          </div>
        </div>
      </div>
    </main>
  );
}
