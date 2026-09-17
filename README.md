# Prototype
🛒 TechShop - Simulasi E-Commerce & Pembayaran QRIS
Proyek ini adalah sebuah halaman web statis sederhana yang mensimulasikan antarmuka toko online (e-commerce). Dibuat sebagai bagian dari "Tugas Dasar Sistem Informasi", web ini dilengkapi dengan fitur keranjang belanja interaktif dan generator kode QR untuk simulasi checkout menggunakan QRIS.

🚀 Fitur Utama
Katalog Produk: Menampilkan daftar barang (Monitor, Keyboard, Flashdisk) dengan desain kartu (card) yang responsif.

Keranjang Belanja Interaktif:

Pengguna dapat menambahkan produk ke dalam keranjang.

Jumlah item pada tombol keranjang di bilah navigasi akan diperbarui secara otomatis.

Pengguna dapat melihat detail barang yang dimasukkan beserta kalkulasi total harga.

Pengguna dapat menghapus barang dari keranjang jika berubah pikiran.

Simulasi Pembayaran QRIS:

Menghasilkan (generate) kode QR unik secara dinamis berdasarkan total tagihan dan nomor invoice acak saat pengguna menekan tombol checkout.

Antarmuka pop-up (modal) transisi antara daftar keranjang dan halaman pembayaran QR.

🛠️ Teknologi yang Digunakan
HTML5: Sebagai struktur dasar dan kerangka antarmuka halaman web.

Tailwind CSS (via CDN): Digunakan untuk melakukan styling dan membuat tampilan web menjadi responsif (beradaptasi dari layar HP hingga Desktop) tanpa perlu menulis file CSS manual.

JavaScript (Vanilla): Mengelola logika inti aplikasi seperti array keranjang belanja (listBelanja), manipulasi DOM untuk merender keranjang, dan kontrol buka-tutup modal.

QRCode.js (via CDN): Library pihak ketiga yang digunakan untuk menggambar/mencetak kode QR secara langsung di sisi klien (client-side) pada panel pembayaran.

📂 Cara Menjalankan Aplikasi
Aplikasi ini berjalan sepenuhnya di sisi klien (client-side) dan tidak memerlukan instalasi backend atau server khusus.

Salin seluruh kode program.

Simpan di komputer Anda dengan nama index.html (atau nama lain berekstensi .html).

Pastikan komputer Anda terhubung ke internet (untuk memuat Tailwind CSS dan QRCode.js dari CDN).

Klik ganda (buka) file .html tersebut menggunakan browser modern apapun (Google Chrome, Mozilla Firefox, Microsoft Edge, atau Safari).

💡 Penjelasan Logika Singkat (Berdasarkan Kode)
Penyimpanan Data: Seluruh barang yang diklik akan dimasukkan sebagai Object ke dalam Array global bernama listBelanja.

Pembaruan UI (Render): Fungsi refreshTampilanToko() bertugas mengosongkan elemen HTML list keranjang (innerHTML = ''), lalu melakukan looping (perulangan) pada listBelanja untuk mencetak ulang elemen <li> beserta tombol hapusnya. Ini memastikan tampilan selalu sinkron dengan data array.

Sistem Modal Pop-up: Tampilan keranjang dan QRIS membentang di atas halaman utama menggunakan teknik Overlay (z-index tinggi). Sistem buka-tutupnya hanya memanipulasi penambahan atau penghapusan class hidden bawaan Tailwind CSS pada elemen Container modal.

Pembuatan QR Code: Library qrcode.js akan mengambil elemen div ber-id areaQr, lalu menyuntikkan elemen <canvas> atau <img> yang berisi pola barcode dari teks payload (URL + Nomor Invoice + Total Harga).