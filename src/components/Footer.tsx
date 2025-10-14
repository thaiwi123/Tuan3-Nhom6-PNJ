import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-10 py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-gray-600 text-sm">
        <p>© Bản quyền của nhóm 6.</p>
        <div className="flex gap-4 mt-2 sm:mt-0">
          <a href="/about" className="hover:text-blue-600">Giới thiệu</a>
          <a href="/contact" className="hover:text-blue-600">Liên hệ</a>
          <a href="/policy" className="hover:text-blue-600">Chính sách</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
