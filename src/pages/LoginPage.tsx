import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function LoginPage() {
  const { role } = useParams();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (role === "scientist") {
      navigate("/scientist"); // ✅ Scientist goes to upload page
    } else if (role === "public") {
      navigate("/public"); // ✅ Public goes to complaint page
    } else {
      navigate("/dashboard"); // ✅ Default (admin/others) go to dashboard
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-80 flex flex-col gap-6 items-center">
        <h2 className="text-2xl font-bold">{role?.toUpperCase()} Login</h2>
        <button
          onClick={handleLogin}
          className="bg-indigo-600 text-white p-3 rounded-lg w-full hover:bg-indigo-700"
        >
          Login as {role}
        </button>
      </div>
    </div>
  );
}
