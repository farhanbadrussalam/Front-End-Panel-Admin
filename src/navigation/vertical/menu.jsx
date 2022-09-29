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
        navLink: "pages/role-user",
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
  {
    id: "data-pesanan",
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
  {
    id: "menu-komisi-wo",
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
  {
    id: "artikel-blog",
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
  {
    id: "pengaturan-website",
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
  {
    id: "notifikasi",
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
  {
    id: "kupon",
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
];

export default company;
