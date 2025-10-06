import React from "react";
import { Lock, Users, Megaphone, CalculatorIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AfterHome from "./AfterHome";

export default function Homepage() {
  const navigate = useNavigate();

  const cards = [
    {
      id: 1,
      title: "Admin Login",
      description: "Access for authorized government administrators.",
      icon: <Lock size={36} className="text-blue-700" />,
      route: "/login/admin",
    },
    {
      id: 2,
      title: "Public Login",
      description: "Portal for citizens, NGOs, and registered organizations.",
      icon: <Users size={36} className="text-gray-700" />,
      route: "/login/public",
    },
    {
      id: 3,
      title: "Scientist / NGO Login",
      description: "Secure access for research and analysis tools.",
      icon: <CalculatorIcon size={36} className="text-blue-900" />,
      route: "/login/scientist",
    },
    {
      id: 4,
      title: "Announcements",
      description: "Latest updates and notifications.",
      icon: <Megaphone size={36} className="text-amber-600" />,
      route: "/announcements",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-black flex flex-col items-center">

      {/* HEADER */}
      <header className="w-full max-w-7xl text-center py-10 bg-voilet-50">
        <h1 className="text-4xl md:text-4xl font-bold text-indigo-700 mb-2">
          Water Quality Monitoring Portal
        </h1>
        <p className="text-sm text-gray-600">
          Central ground water board, Ministry of Jal Shakti
        </p>
      </header>

      {/* ANNOUNCEMENTS BAR */}
      <section className="w-full max-w-7xl px-6 mb-12 rounded-xl overflow-hidden py-10">
        <div className="whitespace-nowrap animate-marquee text-base font-medium text-blue-900 tracking-wide">
          <Megaphone size={18} className="text-amber-600 inline-block mr-2" />
          <span className="font-semibold">Announcements:</span>
          &nbsp;&nbsp; Water quality reports for October released. &nbsp; | &nbsp;
          New AI-powered HMPI calculator live. &nbsp; | &nbsp;
          NGOs can now upload bulk CSV test data. &nbsp; | &nbsp;
          Early warning alerts activated for arsenic contamination.
        </div>
      </section>

      {/* LOGIN & PORTAL CARDS */}
      <main className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl px-6 mb-16">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => navigate(card.route)}
            className="bg-white border border-gray-100 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition cursor-pointer flex flex-col justify-between"
          >
            <div className="flex items-center space-x-4 mb-4">
              {card.icon}
              <h3 className="text-xl md:text-2xl font-semibold text-blue-800">{card.title}</h3>
            </div>
            <p className="text-gray-700 text-base leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </main>

      {/* AFTERHOME SECTION */}
      <AfterHome />

      {/* FOOTER */}
      <footer className="w-full max-w-7xl text-center mt-16 text-sm text-gray-500 border-t border-gray-200 pt-6">
        © 2025 Government of India • All Rights Reserved
      </footer>
    </div>
  );
}
