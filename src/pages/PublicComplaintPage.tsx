import React, { useState } from "react";
import { Upload, MapPin, FileText, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PublicComplaintPage() {
  const [file, setFile] = useState<File | null>(null);
  const [complaint, setComplaint] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    if (!complaint || !location) {
      alert("Please fill all fields!");
      return;
    }

    // simulate API submit
    console.log({
      complaint,
      location,
      fileName: file?.name || "No File",
    });

    // redirect to thank you page
    navigate("/complaint-submitted");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[450px] flex flex-col gap-8 border border-gray-200">
        
        {/* Header */}
        <h2 className="text-3xl font-extrabold text-center text-blue-800">
          Public Complaint Portal
        </h2>
        <p className="text-gray-500 text-center text-sm">
          Report water issues quickly & easily
        </p>

        {/* Complaint Text */}
        <div className="flex flex-col gap-2">
          <label className="text-gray-600 font-medium">Complaint Details:</label>
          <textarea
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
            placeholder="Describe the issue..."
            className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            rows={3}
          />
        </div>

        {/* Location Input */}
        <div className="flex flex-col gap-2">
          <label className="text-gray-600 font-medium">Mark Location:</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter area or city..."
              className="flex-1 border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            <MapPin className="text-blue-600 mt-3" />
          </div>
        </div>

        {/* Upload Image */}
        <div className="flex flex-col gap-2">
          <label className="text-gray-600 font-medium">Upload Photo (Optional):</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="border border-gray-300 p-2 rounded-lg"
          />
          {file && (
            <p className="text-sm text-gray-500">
              Selected: <span className="font-semibold">{file.name}</span>
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="flex items-center justify-center gap-2 bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
        >
          <Send size={18} /> Submit Complaint
        </button>
      </div>
    </div>
  );
}
