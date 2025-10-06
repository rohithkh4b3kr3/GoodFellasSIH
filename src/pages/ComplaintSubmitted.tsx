import React from "react";
import { FileText } from "lucide-react";
import { Link } from "react-router-dom";

export default function ComplaintSubmitted() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[400px] text-center flex flex-col gap-6">
        <FileText size={40} className="text-green-600 mx-auto" />
        <h2 className="text-2xl font-bold text-green-700">
          Complaint Submitted!
        </h2>
        <p className="text-gray-600 text-sm">
          Thank you for reporting the issue. Our team will review and take action.
        </p>
        <Link
          to="/"
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
