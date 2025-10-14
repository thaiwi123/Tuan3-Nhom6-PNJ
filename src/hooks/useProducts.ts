import { useQuery } from "@tanstack/react-query";
import type { Product } from "../types/product";
import NhanKC14k from "../images/NhanKC14k.png";
import NhanVang18k from "../images/NhanVang18k.png";
import NhanVang18kHoly from "../images/NhanVang18kHoly.png";
import LacBac_VoSo from "../images/LacBac_VoSo.png";
import NhanBac_HinhNo from "../images/NhanBac_HinhNo.png";
import NhanBac_HinhTym from "../images/NhanBac_HinhTym.png";
import DayChuyen_GotNuoc from "../images/DayChuyen_GotNuoc.png";
import BongTai_VangTrang from "../images/BongTai_VangTrang.png";


// ✅ Dữ liệu giả PNJ
const jewelryProducts: Product[] = [
  {
    id: 1,
    title: "Nhẫn vàng 18K PNJ đính đá Swarovski",
    price: 8950000 / 25000, // USD quy đổi (để giữ nguyên format)
    category: "Vàng",
    description: "Nhẫn vàng 18K PNJ đính đá Swarovski sang trọng, tinh tế.",
    image:
      NhanKC14k,
  },
  {
    id: 2,
    title: "Dây chuyền bạc PNJ đính đá trắng",
    price: 1250000 / 25000,
    category: "Bạc",
    description: "Dây chuyền bạc PNJ cao cấp đính đá trắng, phong cách hiện đại.",
    image:
      NhanVang18k,
  },
  {
    id: 3,
    title: "Lắc tay vàng trắng 14K PNJ nữ",
    price: 6750000 / 25000,
    category: "Vàng trắng",
    description: "Lắc tay vàng trắng 14K PNJ, thiết kế nữ tính, thanh lịch.",
    image:
     NhanVang18kHoly,
  },
  {
    id: 4,
    title: "Bông tai bạc PNJ hình hoa đính đá",
    price: 890000 / 25000,
    category: "Bạc",
    description: "Bông tai bạc PNJ hình hoa đính đá trắng tinh khôi.",
    image:
      LacBac_VoSo,
  },

  // 🔹 👉 Thêm sản phẩm mới ngay dưới đây
  {
    id: 5,
    title: "Vòng cổ vàng 24K PNJ đính ngọc trai",
    price: 15900000 / 25000,
    category: "Vàng",
    description: "Vòng cổ vàng 24K PNJ đính ngọc trai thật sang trọng.",
    image:
     NhanBac_HinhNo,
  },
  {
    id: 6,
    title: "Nhẫn bạc PNJ nữ đá Aquamarine",
    price: 950000 / 25000,
    category: "Bạc",
    description: "Nhẫn bạc PNJ nữ đính đá Aquamarine phong cách dịu dàng.",
    image:
      NhanBac_HinhTym,
  },
  {
    id: 7,
    title: "Nhẫn bạc PNJ nữ đá Aquamarine",
    price: 950000 / 25000,
    category: "Bạc",
    description: "Nhẫn bạc PNJ nữ đính đá Aquamarine phong cách dịu dàng.",
    image:
      DayChuyen_GotNuoc,
  },
  {
    id: 8,
    title: "Nhẫn bạc PNJ nữ đá Aquamarine",
    price: 950000 / 25000,
    category: "Bạc",
    description: "Nhẫn bạc PNJ nữ đính đá Aquamarine phong cách dịu dàng.",
    image:
      BongTai_VangTrang,
  },
];

export function useProducts() {
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: async () => jewelryProducts, // ✅ Lấy dữ liệu giả
  });
}
