import React, { useState } from "react";
import { useToast } from "../context/toastCore"; // ✅ Hook toast

const Contact: React.FC = () => {
  const { showToast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.address || !form.message) {
      showToast("⚠️ Vui lòng điền đầy đủ thông tin!");
      return;
    }

    showToast("✅ Gửi tin nhắn thành công!");
    setForm({ name: "", email: "", address: "", message: "" });
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-md mt-8">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        📩 Liên hệ với chúng tôi
      </h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* 🧍‍♂️ Họ và tên */}
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Họ và tên
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Nhập họ tên của bạn"
          />
        </div>

        {/* 📧 Email */}
        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Nhập địa chỉ email"
          />
        </div>

        {/* 🏠 Địa chỉ */}
        <div>
          <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
            Địa chỉ
          </label>
          <input
            type="text"
            name="address"
            id="address"
            value={form.address}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Nhập địa chỉ của bạn"
          />
        </div>

        {/* 💬 Tin nhắn */}
        <div>
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
            Tin nhắn
          </label>
          <textarea
            name="message"
            id="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Nhập nội dung tin nhắn"
          ></textarea>
        </div>

        {/* 🔘 Nút gửi */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition w-full font-semibold"
        >
          Gửi tin nhắn
        </button>
      </form>
    </div>
  );
};

export default Contact;
