import React from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "../store/cartStore";
import { useToast } from "../context/toastCore";
import type { Product } from "../types/product";

interface ProductCardProps {
  product: Product;
}

// ✅ Định dạng tiền VNĐ
const formatCurrency = (priceUSD: number): string => {
  const rate = 25000;
  const priceVND = priceUSD * rate;
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(priceVND);
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const { showToast } = useToast();

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: 1 });
    showToast("✅ Đã thêm vào giỏ hàng!");
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow hover:shadow-yellow-400/40 transition-transform hover:-translate-y-1 hover:scale-[1.02] duration-200 p-4 flex flex-col justify-between h-full">
      {/* Ảnh sản phẩm */}
      <Link to={`/product/${product.id}`} className="block relative flex-1 mb-4">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-contain mb-3 rounded-lg transition-transform duration-300 hover:scale-105"
        />
        <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-center line-clamp-2 min-h-[3rem]">
          {product.title}
        </h3>
      </Link>

      {/* Giá + Nút thêm giỏ */}
      <div className="mt-auto">
        <p className="text-yellow-600 dark:text-yellow-400 font-bold mb-3 text-center">
          {formatCurrency(product.price)}
        </p>
        <button
          onClick={handleAddToCart}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-2 rounded-md w-full transition"
        >
          🛍️ Thêm vào giỏ hàng
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
