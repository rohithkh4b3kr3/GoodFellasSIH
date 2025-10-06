import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-indigo-900 text-white mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Water Safety Portal</h3>
          <p className="text-gray-300">
            Providing real-time updates, official announcements, and tools
            for monitoring and improving water safety across communities.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="/" className="hover:text-blue-400 transition">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-400 transition">About</a>
            </li>
            <li>
              <a href="/announcements" className="hover:text-blue-400 transition">Announcements</a>
            </li>
            <li>
              <a href="/login/public" className="hover:text-green-400 transition">Login</a>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact & Social</h3>
          <p className="text-gray-300 mb-4">
            Email: info@watersafety.gov <br />
            Phone: +91 0808 0202
          </p>
          <div className="flex space-x-4">
           
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="bg-indigo-800 text-gray-300 text-center py-4 mt-8">
        © 2025 Water Safety Portal. All rights reserved.
      </div>
    </footer>
  );
}
