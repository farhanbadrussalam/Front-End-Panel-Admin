const Menus = [
  // {
  //   title: "Kelola user",
  //   options: [
  //     {
  //       value: "Lihat user",
  //       label: "Lihat user",
  //     },
  //     {
  //       value: "Ubah user",
  //       label: "Ubah user"
  //     },
  //     {
  //       value: "Buat user",
  //       label: "Buat user"
  //     },
  //     {
  //       value: "Hapus user",
  //       label: "Hapus user"
  //     },
  //   ],
  //   name: "user"
  // },
  {
    title: "Kelola user",
    value: ["Lihat user", "Buat user", "Ubah user", "Hapus user"],
    label: ["Lihat user", "Buat user", "Ubah user", "Hapus user"],
    name: "user"
  },
  {
    title: "Kelola role",
    value: ["Lihat permission", "Buat permission", "Ubah permission", "Hapus permission"],
    label: ["Lihat permission", "Buat permission", "Ubah permission", "Hapus permission"],
    name: "role"
  },
  {
    title: "Kelola wo",
    value: ["Lihat wo", "Buat wo", "Ubah wo", "Hapus wo"],
    label: ["Lihat wo", "Buat wo", "Ubah wo", "Hapus wo"],
    name: "wo"
  },
  {
    title: "Kelola pengantin",
    value: ["Lihat pengantin", "Buat pengantin", "Ubah pengantin", "Hapus pengantin"],
    label: ["Lihat pengantin", "Buat pengantin", "Ubah pengantin", "Hapus pengantin"],
    name: "bride"
  },
  {
    title: "Kelola pelanggan",
    value: ["Lihat pelanggan", "Buat pelanggan", "Ubah pelanggan", "Hapus pelanggan"],
    label: ["Lihat pelanggan", "Buat pelanggan", "Ubah pelanggan", "Hapus pelanggan"],
    name: "customer"
  },
  {
    title: "Kelola produk ucapan digital",
    value: ["Lihat produk", "Buat produk", "Ubah produk", "Hapus produk"],
    label: ["Lihat produk", "Buat produk", "Ubah produk", "Hapus produk"],
    name: "product-greet"
  },
  {
    title: "Kelola produk wo",
    value: ["Lihat produk wo", "Buat produk wo", "Ubah produk wo", "Hapus produk wo", "Lihat user group", "Buat user group", "Ubah user group", "Hapus user group", "Generate link"],
    label: ["Lihat produk wo", "Buat produk wo", "Ubah produk wo", "Hapus produk wo", "Lihat user group", "Buat user group", "Ubah user group", "Hapus user group", "Generate link"],
    name: "product-wo"
  },
  {
    title: "Kelola komisi",
    value: ["Lihat saldo wo", "Lihat riwayat komisi admin", "Lihat riwayat komisi wo", "Pencairan komisi", "Riwayat pencairan komisi wo"],
    label: ["Lihat saldo wo", "Lihat riwayat komisi admin", "Lihat riwayat komisi wo", "Pencairan komisi", "Riwayat pencairan komisi wo"],
    name: "commition"
  },
  {
    title: "Kelola artikel",
    value: ["Lihat artikel", "Buat artikel", "Ubah artikel", "Hapus artikel"],
    label: ["Lihat artikel", "Buat artikel", "Ubah artikel", "Hapus artikel"],
    name: "articel"
  },
  {
    title: "Kelola kupon",
    value: ["Lihat kupon", "Buat kupon", "Ubah kupon", "Hapus kupon"],
    label: ["Lihat kupon", "Buat kupon", "Ubah kupon", "Hapus kupon"],
    name: "cupon"
  },
  {
    title: "Kelola pengaturan website",
    value: ["Kelola kontak", "Kelola sosial media", "Kelola FAQ", "Kelola syarat ketentuan", "Kelola kebijakan privasi", "Kelola payment gateaway"],
    label: ["Kelola kontak", "Kelola sosial media", "Kelola FAQ", "Kelola syarat ketentuan", "Kelola kebijakan privasi", "Kelola payment gateaway"],
    name: "web-setting"
  },
]

export { Menus }