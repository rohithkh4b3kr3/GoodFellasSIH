import React, { useState } from "react";
import { Upload, FileDown } from "lucide-react";

export default function ScientistPage() {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (file) {
      alert(`Uploaded: ${file.name}`);
      // send file to backend API here
    } else {
      alert("Please select a file first!");
    }
  };

  const handleDownloadReport = () => {
    const blob = new Blob(["Scientist Report Data..."], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "report.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-blue-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[420px] flex flex-col gap-8 border border-gray-200">
        
        {/* Header */}
        <h2 className="text-3xl font-extrabold text-center text-indigo-800">
          Scientist Panel
        </h2>
        <p className="text-gray-500 text-center text-sm">
          Upload analysis images and download detailed reports
        </p>

        {/* Upload Section */}
        <div className="flex flex-col gap-4">
          <label className="block text-gray-600 font-medium">
            Upload File:
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          {file && (
            <p className="text-sm text-gray-500">
              Selected: <span className="font-semibold">{file.name}</span>
            </p>
          )}
          <button
            onClick={handleUpload}
            className="flex items-center justify-center gap-2 bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition"
          >
            <Upload size={18} /> Upload File
          </button>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-2"></div>

        {/* Download Section */}
        <div className="flex flex-col gap-3">
          <label className="block text-gray-600 font-medium">
            Download Analysis Report:
          </label>
          <button
            onClick={handleDownloadReport}
            className="flex items-center justify-center gap-2 bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition"
          >
            <FileDown size={18} /> Download Report
          </button>
        </div>
      </div>
    </div>
  );
}
