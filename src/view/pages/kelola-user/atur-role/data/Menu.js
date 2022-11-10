const Menus = [
  {
    title: "Kelola pengguna",
    value: ["/admin/crud-user", "/admin/crud-user/create", "/admin/crud-user/userid:", "delete"],
    label: ["Lihat user", "Buat user", "Ubah user", "Hapus user"],
    name: "pengguna"
  },
  {
    title: "Kelola role",
    value: ["/admin/atur-role", "/admin/atur-role/create", "/admin/atur-role/userid:", "delete"],
    label: ["Lihat permission", "Buat permission", "Ubah permission", "Hapus permission"],
    name: "role"
  },
  {
    title: "Kelola wo",
    value: ["/admin/wedding-organizer", "/admin/wedding-organizer/create", "/admin/wedding-organizer/userid:", "delete"],
    label: ["Lihat wo", "Buat wo", "Ubah wo", "Hapus wo"],
    name: "wo"
  },
  {
    title: "Kelola pengantin",
    value: ["/admin/pengantin", "/admin/pengantin/create", "/admin/pengantin/userid:", "delete"],
    label: ["Lihat pengantin", "Buat pengantin", "Ubah pengantin", "Hapus pengantin"],
    name: "pengantin"
  },
  {
    title: "Kelola pelanggan",
    value: ["/admin/customer", "/admin/customer/create", "/admin/customer/userid:", "delete"],
    label: ["Lihat pelanggan", "Buat pelanggan", "Ubah pelanggan", "Hapus pelanggan"],
    name: "pelanggan"
  },
  {
    title: "Kelola produk ucapan digital",
    value: ["/admin/produk-ucapan-digital", "/admin/produk-ucapan-digital/create", "/admin/produk-ucapan-digital/userid:", "delete"],
    label: ["Lihat produk", "Buat produk", "Ubah produk", "Hapus produk"],
    name: "produk-ucapan"
  },
  {
    title: "Kelola produk wo",
    value: ["/admin/produk-ucapan-user", "/admin/produk-ucapan-user/create", "/admin/produk-ucapan-user/userid:", "delete", "/admin/produk-ucapan-user2", "/admin/produk-ucapan-user/create2", "/admin/produk-ucapan-user/userid2:", "delete"],
    label: ["Lihat produk wo", "Buat produk wo", "Ubah produk wo", "Hapus produk wo", "Lihat user group", "Buat user group", "Ubah user group", "Hapus user group"],
    name: "produk-wo"
  },
  //! usergroup belom
  //! afiliasi belom

  //! komisi wo belom
  // {
  //   title: "Kelola komisi",
  //   value: ["/admin/afiliasi-ucapan", "/admin/afiliasi-ucapan/create", "/admin/afiliasi-ucapan/userid:", true],
  //   label: ["Lihat saldo wo", "Lihat riwayat komisi admin", "Lihat riwayat komisi wo", "Pencairan komisi", "Riwayat pencairan komisi wo"],
  //   name: "commition"
  // },
  {
    title: "Kelola artikel",
    value: ["/admin/artikel", "/admin/artikel/create", "/admin/artikel/userid:", true],
    label: ["Lihat artikel", "Buat artikel", "Ubah artikel", "Hapus artikel"],
    name: "artikel"
  },
  {
    title: "Kelola kupon",
    value: ["/admin/kupon", "/admin/kupon/create", "/admin/kupon/userid:", true],
    label: ["Lihat kupon", "Buat kupon", "Ubah kupon", "Hapus kupon"],
    name: "kupon"
  },
  // ! jelaskan link web
  // {
  //   title: "Kelola pengaturan website",
  //   value: ["/admin/produk-ucapan-digital", "/admin/produk-ucapan-digital/create", "/admin/produk-ucapan-digital/userid:", true],
  //   label: ["Kelola kontak", "Kelola sosial media", "Kelola FAQ", "Kelola syarat ketentuan", "Kelola kebijakan privasi", "Kelola payment gateaway"],
  //   name: "web-setting"
  // },
]

export { Menus }