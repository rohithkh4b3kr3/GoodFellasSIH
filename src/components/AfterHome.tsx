import React from "react";
import { MapPin, AlertTriangle } from "lucide-react";
import waterImage from "../assets/download.jpg"; 
import pollutionImage from "../assets/pollution.jpg"; 

export default function AfterHome() {
  return (
    <div className="min-h-screen bg-gray-50 text-slate-900 flex flex-col items-center">

      {/* SECTION 1: IMAGE LEFT + PROBLEM & SOLUTION RIGHT */}
      <section className="max-w-7xl w-full px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT IMAGE */}
        <img
          src={waterImage}
          alt="Water Testing"
          className="rounded-xl shadow-sm border border-gray-200 w-full md:w-11/12 object-cover hover:shadow-md transition"
        />

        {/* RIGHT TEXT */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-blue-900">Problem & Solution</h2>
          <p className="text-gray-700">
            Groundwater may contain toxic metals, and HMPI calculations are slow. 
            Our solution automates calculations, maps hotspots, categorizes water, and provides AI alerts.
          </p>
          <ul className="space-y-2 text-gray-700 mt-2">
            <li className="flex items-center">
              <MapPin className="text-green-600 mr-2" size={18} /> Location & heatmaps
            </li>
            <li className="flex items-center">
              <AlertTriangle className="text-red-600 mr-2" size={18} /> Safe / Moderate / Hazardous
            </li>
          </ul>
        </div>
      </section>

      {/* SECTION 2: TEXT LEFT + IMAGE RIGHT */}
      <section className="max-w-7xl w-full px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT TEXT */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-blue-900">Why It Matters</h2>
          <p className="text-gray-700">
            Fast detection of water pollution helps communities stay safe, allows researchers to act quickly, 
            and enables policymakers to prevent widespread contamination.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <img
          src={pollutionImage}
          alt="Pollution Analysis"
          className="rounded-xl shadow-sm border border-gray-200 w-full md:w-11/12 object-cover hover:shadow-md transition"
        />
      </section>

      {/* HOW TO USE */}
      <section className="w-full bg-white border-t border-gray-200 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-blue-900 mb-10 text-center">
            How to Use the Application
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { step: "Upload Data", desc: "Upload lab test results (CSV/Excel)." },
              { step: "Auto-Compute", desc: "App applies HMPI formulas automatically." },
              { step: "Visualize", desc: "View pollution heatmaps & categories." },
              { step: "Take Action", desc: "Download reports or share with authorities." },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition"
              >
                <p className="font-semibold text-blue-800 mb-2">{item.step}</p>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
