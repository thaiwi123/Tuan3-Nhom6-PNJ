import React from "react";
import { Link } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";
import type { Product } from "../types/product";
import { useToast } from "../context/toastCore";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import banner1 from "../images/banner1.png";
import banner2 from "../images/banner2.png";
import banner3 from "../images/banner3.png";


const Home: React.FC = () => {
  const { data: products } = useProducts();
  const featured = products ? products.slice(0, 4) : [];
  const { showToast } = useToast();

  return (
    <div className="bg-gray-50">
      
    {/* 💎 Banner Carousel */}
<Swiper
  modules={[Autoplay, Pagination]}
  autoplay={{ delay: 4000, disableOnInteraction: false }}
  pagination={{ clickable: true }}
  loop
  className="w-full h-[500px] rounded-b-3xl overflow-hidden shadow-lg"
>
  {/* Slide 1 */}
  <SwiperSlide>
    <div
      className="relative flex items-center justify-center h-full text-white text-center"
      style={{
        backgroundImage: `url(${banner1})`,   // nếu dùng ảnh online thì đặt thẳng URL string
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 max-w-3xl px-4">
        <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg text-yellow-300">
          Ưu đãi ngày đôi
        </h1>
        <p className="text-lg mb-8 text-gray-100">
          10 điểm phong cách – 10 phần rạng rỡ ✨
        </p>
        <Link
          to="/products"
          onClick={() => showToast("💎 Xem ưu đãi PNJ!")}
          className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-xl transition-all"
        >
          Khám phá ngay
        </Link>
      </div>
    </div>
  </SwiperSlide>

  {/* Slide 2 */}
  <SwiperSlide>
    <div
      className="relative flex items-center justify-center h-full text-white text-center"
      style={{
        backgroundImage: `url(${banner2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 max-w-3xl px-4">
        <h1 className="text-5xl font-bold mb-6 text-yellow-200">Ưu đãi đến 4 triệu 💰</h1>
        <p className="text-lg mb-8 text-gray-100">Quà tặng iPhone 17 mới nhất 📱</p>
        <Link
          to="/products"
          className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-xl transition-all"
        >
          Xem ngay
        </Link>
      </div>
    </div>
  </SwiperSlide>

  {/* Slide 3 */}
  <SwiperSlide>
    <div
      className="relative flex items-center justify-center h-full text-white text-center"
      style={{
        backgroundImage: `url(${banner3})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 max-w-3xl px-4">
        <h1 className="text-5xl font-bold mb-6 text-yellow-200">Bộ sưu tập mới 💍</h1>
        <p className="text-lg mb-8 text-gray-100">Sang trọng – Thanh lịch – Quý phái</p>
        <Link
          to="/products"
          className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-xl transition-all"
        >
          Khám phá ngay
        </Link>
      </div>
    </div>
  </SwiperSlide>
</Swiper>

      {/* 🌟 Sản phẩm nổi bật */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          🌟 Sản phẩm nổi bật
        </h2>
        {featured.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {featured.map((p: Product) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">Đang tải sản phẩm...</p>
        )}
      </section>

      {/* 📰 Tin tức mới */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
            📰 Tin tức mới nhất
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                id: 1,
                title: "🔥 Giảm giá lớn mùa thu - Mua sắm thông minh!",
                desc: "Đừng bỏ lỡ cơ hội nhận ưu đãi lên đến 50% cho các sản phẩm công nghệ, phụ kiện và đồ gia dụng hot nhất năm.",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz6huZ9VoOJLrTEI42RddFWRC6RZ7H_-yZvQ&s",
              },
              {
                id: 2,
                title: "🆕 Ra mắt dòng sản phẩm công nghệ mới 2025",
                desc: "Những thiết bị mới với thiết kế hiện đại, pin bền và hiệu năng vượt trội – sẵn sàng chinh phục mọi nhu cầu.",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUujUwFITsB84aAtZr7zTFB2Jrtazdejfo0Q&s",

              },
              {
                id: 3,
                title: "💡 Mẹo mua hàng online an toàn và tiết kiệm",
                desc: "Hướng dẫn bạn cách chọn mua sản phẩm uy tín, tránh bị lừa đảo và săn được deal tốt nhất.",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdQRt_902m34fMRyfLooskZvxQr4rdh-YiTA&s",
              },
            ].map((news) => (
              <div
                key={news.id}
                className="bg-gray-50 rounded-lg overflow-hidden shadow hover:shadow-lg transition"
              >
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{news.desc}</p>
                  <button
                    onClick={() => showToast(`📰 Đang xem: ${news.title}`)}
                    className="text-blue-600 font-medium hover:underline"
                  >
                    Đọc thêm →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
