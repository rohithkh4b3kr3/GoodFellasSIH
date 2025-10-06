import React from "react";
import { Brain, Map, AlertTriangle, Calculator } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Calculator className="text-indigo-600 w-8 h-8" />,
      title: "Automated HMPI Calculator",
      desc: "Upload water test data to instantly compute Heavy Metal Pollution Index (HMPI) using WHO and BIS (IS 10500:2012) standards.",
    },
    {
      icon: <Map className="text-indigo-600 w-8 h-8" />,
      title: "Geo-Mapped Dashboard",
      desc: "Visualize safe, moderate, and hazardous water quality zones across regions using interactive GIS-based mapping.",
    },
    {
      icon: <Brain className="text-indigo-600 w-8 h-8" />,
      title: "AI-Driven Predictions",
      desc: "Leverages machine learning to forecast contamination trends in untested or data-sparse areas for proactive intervention.",
    },
    {
      icon: <AlertTriangle className="text-indigo-600 w-8 h-8" />,
      title: "Early Warning Alerts",
      desc: "Automatically notifies authorities when pollution levels exceed permissible safety limits, enabling rapid response.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-4">
          About Water Safety Portal
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          This prototype is designed to automate the computation, visualization, and analysis
          of the <span className="font-semibold">Heavy Metal Pollution Index (HMPI)</span> for groundwater
          and surface water sources. It enables authorities, scientists, and citizens to assess water
          quality instantly and identify contamination hotspots using standardized methodologies based
          on <span className="font-semibold">WHO</span> and <span className="font-semibold">BIS (IS 10500:2012)</span> limits.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          Our system integrates <span className="font-semibold">AI, GIS,</span> and <span className="font-semibold">data automation</span> 
          to deliver a fast, accurate, and interactive platform for heavy metal pollution monitoring.
        </p>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col space-y-3 border border-gray-100 hover:shadow-lg transition"
          >
            <div className="flex items-center space-x-3">
              {feature.icon}
              <h3 className="text-xl font-semibold text-gray-800">
                {feature.title}
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <div className="max-w-4xl mx-auto text-center mt-16">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4">
          Empowering Water Safety Through Technology
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          The Water Safety Portal bridges scientific analysis and real-time visualization to
          make pollution monitoring accessible to everyone—from local communities to national
          authorities. With data-driven insights, we aim to ensure safe and sustainable water
          management for all.
        </p>
      </div>
    </div>
  );
}
