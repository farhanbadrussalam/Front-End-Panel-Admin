import { Clipboard, MusicDashboard } from "iconsax-react";
import { RiDashboard2Line } from "react-icons/ri";

const company = [
  {
    header: "MENU",
  },

  /**
   * Dashboard
   */
  {
    id: "dashboard",
    title: "Dashboard",
    icon: <Clipboard size={18} />,
    navLink: "/pages/dashboard",
  },

  /**
   * Master Data
   * 1. CRUD WO
   * 2. CRUD Pengantin
   * 3. CRUD Customer WO
   * 4. CRUD Ucapan Digital
   */
  {
    id: "master",
    title: "Master Data",
    icon: <RiDashboard2Line set="curved" className="remix-icon" size={18} />,
    children: [
      {
        id: "pengguna",
        title: "Data Pengguna",
        navLink: "/pages/users",
      },
      {
        id: "pelanggan",
        title: "Data Pelanggan",
        navLink: "/pages/customers",
      },
      {
        id: "kendaraan",
        title: "Data Kendaraan",
        navLink: "/pages/venicles",
      },
    ],
  },

  /**
   * Kelola User
   * 1. CRUD User
   * 2. Atur Role User (Admin / Staff / WO / Pelanggan)
   * 3. Role & Permission User
   */
  {
    id: "kelola-user",
    title: "Kelola User",
    icon: <RiDashboard2Line set="curved" className="remix-icon" size={18} />,
    children: [
      {
        id: "crud-user",
        title: "Tambah, Update & Hapus",
        navLink: "pages/crud-user",
      },
      {
        id: "atur-role",
        title: "Atur Role user (Admin / Staff / WO / Pelanggan)",
        navLink: "pages/atur-role",
      },
      {
        id: "policy-user",
        title: "Role & Permission User",
        navLink: "pages/policy-user",
      },
    ],
  },

  /**
   * Data Produk WO
   * 1. CRUD User Group / Kategori Komisi
   * 2. CRUD Kelola Produk Ucapan Digital WO
   * 3. CRUD Generate link order / Afiliasi Ucapan Digtal WO
   */
  {
    id: "produk-wo",
    title: "Data Produk WO",
    icon: <RiDashboard2Line set="curved" className="remix-icon" size={18} />,
    children: [
      {
        id: "group-user",
        title: "User Group / Kategori Komisi",
        navLink: "pages/group-user",
      },
      {
        id: "produk-ucapan-user",
        title: "Kelola Produk Ucapan Digital WO",
        navLink: "pages/produk-ucapan-user",
      },
      {
        id: "afiliasi-ucapan",
        title: "Generate link order / Afiliasi Ucapan Digtal",
        navLink: "pages/afiliasi-ucapan",
      },
    ],
  },

  /**
   * Menu Komisi WO
   * 1. Saldo Komisi Semua WO
   * 2. Riwayat Komisi Admin/Aplicator
   * 3. Riwayat Komisi WO
   * 4. Pencairan Komisi
   * 5. Riwayat Pencarian Komisi WO
   */
  {
    id: "komisi-wo",
    title: "Komisi WO",
    icon: <RiDashboard2Line set="curved" className="remix-icon" size={18} />,
    children: [
      {
        id: "saldo-komisi-wo",
        title: "Saldo Komisi Semua WO",
        navLink: "pages/saldo-komisi-wo",
      },
      {
        id: "riwayat-komisi-admin",
        title: "Riwayat Komisi Admin/Aplicator",
        navLink: "pages/riwayat-komisi-admin",
      },
      {
        id: "riwayat-komisi-wo",
        title: "Riwayat Komisi WO",
        navLink: "pages/riwayat-komisi-wo",
      },
      {
        id: "pencairaan-komisi",
        title: "Pencairan Komisi",
        navLink: "pages/pencairan-komisi",
      },
      {
        id: "riwayat-pencairan-komisi-wo",
        title: "Riwayat Pencairan Komisi WO",
        navLink: "pages/riwayat-pencairan-komisi-wo",
      },
    ],
  },

  /**
   * Artikel/Blog
   * 1. Kelola Kategori Artikel
   * 2. Tambah, Update, dan Hapus Artikel
   * 3. Cari dan Filter Artikel
   */
  {
    id: "artikel-blog",
    title: "Artikel/Blog",
    icon: <RiDashboard2Line set="curved" className="remix-icon" size={18} />,
    children: [
      {
        id: "kelola-kategori-artikel",
        title: "Kelola Kategori Artikel",
        navLink: "pages/kelola-kategori-artikel",
      },
      {
        id: "crud-artikel",
        title: "Tambah, Update, dan Hapus Artikel",
        navLink: "pages/crud-artikel",
      },
      {
        id: "cari-filter-artikel",
        title: "Cari dan Filter Artikel",
        navLink: "pages/cari-filter-artikel",
      },
    ],
  },

  /**
   * Pengaturan Website
   * 1. Kontak Admin
   * 2. Sosial Media Dealer
   * 3. FAQ/Pertanyaan Umum
   * 4. Syarat dan Ketentuan
   * 5. Kebijakan Privasi
   * 6. Pembayaran Payment Gateway
   */
  {
    id: "pengaturan-website",
    title: "Pengaturan Website",
    icon: <RiDashboard2Line set="curved" className="remix-icon" size={18} />,
    children: [
      {
        id: "pengaturan-kontak-admin",
        title: "Kontak Admin",
        navLink: "pages/pengaturan-kontak-admin",
      },
      {
        id: "pengaturan-sosmed-dealer",
        title: "Pengaturan Sosial Media Partner",
        navLink: "pages/pengaturan-sosmed-dealer",
      },
      {
        id: "pengaturan-faq",
        title: "FAQ/Pertanyaan Umum",
        navLink: "pages/pengaturan-faq",
      },
      {
        id: "pengaturan-syarat-ketentuan",
        title: "Pengaturan Syarat dan Ketentuan",
        navLink: "pages/pengaturan-syarat-ketentuan",
      },
      {
        id: "pengaturan-kebijakan-privasi",
        title: "Pengaturan Kebijakan Privasi",
        navLink: "pages/pengaturan-kebijakan-privasi",
      },
      {
        id: "pengaturan-payment-gateway",
        title: "Pembayaran Payment Gateway",
        navLink: "pages/pengaturan-payment-gateway",
      },
    ],
  },

  /**
   * Menu Notifikasi
   */
  {
    id: "menu-notifikasi",
    title: "Notifikasi",
    icon: <RiDashboard2Line set="curved" className="remix-icon" size={18} />,
    navLink: "pages/menu-notifikasi",
  },

  /**
   * Menu Kupon
   * 1.
   */
  {
    id: "kupon",
    title: "Kupon",
    icon: <RiDashboard2Line set="curved" className="remix-icon" size={18} />,
    navLink: "pages/kupon",
  },
];

export default company;
