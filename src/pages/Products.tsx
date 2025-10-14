import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import Loading from "../components/Loading";
import { useProducts } from "../hooks/useProducts";
import type { Product } from "../types/product";
import { useToast } from "../context/toastCore";

const Products: React.FC = () => {
  const { data, isLoading } = useProducts();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("none");
  const { showToast } = useToast();

  if (isLoading) return <Loading />;
  if (!data) return <p className="text-center mt-8">Không có sản phẩm</p>;

  // 👉 Tự động lấy danh mục
  const categories = ["all", ...new Set(data.map((p: Product) => p.category))];

  // 👉 Lọc theo từ khóa + danh mục
  let filteredProducts = data
    .filter((p: Product) =>
      p.title.toLowerCase().includes(search.toLowerCase().trim())
    )
    .filter((p: Product) => category === "all" || p.category === category);

  // 👉 Sắp xếp theo giá
  if (sortOrder === "asc") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortOrder === "desc") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  }

  // 👉 Xử lý sự kiện
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
    showToast(
      `📦 Lọc theo danh mục: ${
        e.target.value === "all" ? "Tất cả" : e.target.value
      }`
    );
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
    if (e.target.value === "asc") showToast("⬆️ Sắp xếp: Giá thấp đến cao");
    else if (e.target.value === "desc")
      showToast("⬇️ Sắp xếp: Giá cao đến thấp");
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
        🛍️ Danh sách sản phẩm
      </h1>

      {/* 🔍 Bộ lọc */}
      <div className="bg-gray-50 p-4 rounded-lg shadow-md mb-8 flex flex-wrap gap-4 justify-center">
        {/* Tìm kiếm */}
        <input
          type="text"
          placeholder="🔍 Tìm sản phẩm..."
          value={search}
          onChange={handleSearchChange}
          className="border p-2 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 w-full sm:w-64"
        />

        {/* Danh mục */}
        <select
          value={category}
          onChange={handleCategoryChange}
          className="border p-2 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 w-full sm:w-48"
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c === "all" ? "Tất cả danh mục" : c}
            </option>
          ))}
        </select>

        {/* Sắp xếp theo giá */}
        <select
          value={sortOrder}
          onChange={handleSortChange}
          className="border p-2 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 w-full sm:w-48"
        >
          <option value="none"> Mặc định</option>
          <option value="asc">⬆ Giá tăng dần</option>
          <option value="desc">⬇ Giá giảm dần</option>
        </select>
      </div>

      {/* 🧩 Danh sách sản phẩm */}
      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-500">
          Không tìm thấy sản phẩm phù hợp.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((p: Product) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
