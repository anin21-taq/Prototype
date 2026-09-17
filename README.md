🛒 Halo! Selamat Datang di TechShop
Ini adalah project web sederhana yang dibuat buat ngerjain tugas "Dasar Sistem Informasi". Anggap aja ini simulasi toko online mini! Di sini, kita bisa pura-pura milih barang IT, masukin ke keranjang, dan seolah-olah bayar pakai QRIS.

🌟 Fitur Serunya Apa Aja?
Pilih Barang (Katalog): Ada etalase simpel buat milih produk (seperti Monitor, Keyboard, Flashdisk).

Keranjang Belanja Pintar:

Tiap kali ngeklik tombol "+ Keranjang", angka di pojok kanan atas bakal nambah secara otomatis.

Kalau keranjangnya diklik, bakal muncul rincian belanjaan kita lengkap sama total harganya.

Nggak jadi beli? Tenang, ada tombol silang (x) buat ngehapus barangnya dari keranjang.

Bayar Pura-Pura Pakai QRIS: Nah, ini yang paling keren! Kalau kita klik tombol Lanjut Pembayaran, web ini bakal bikin (generate) gambar kode QR beneran, lengkap sama total tagihan dan nomor invoice acak biar kelihatan pro!

🛠️ Dibuat Pakai Apa Aja Sih?
Tenang, project ini nggak butuh instalasi yang ribet. Kita cuma pakai senjata dasar anak web:

HTML: Ibarat tulang punggung web-nya. Dipakai buat naruh teks, gambar, dan kerangka tombol.

Tailwind CSS: Ini yang bikin webnya jadi cakep (warna-warni, rapi, dan pas kalau dibuka di HP atau laptop). Kita pakai versi instan (lewat internet/CDN), jadi nggak perlu repot nulis kode desain yang panjang-panjang.

JavaScript (JS): Ini "otak" webnya. JS yang bikin webnya hidup—mulai dari ngitung total harga, nambahin barang, sampai ngatur buka-tutup jendela keranjang.

QRCode.js: Ini library tambahan (bantuan kode dari luar) biar kita bisa nyulap teks biasa jadi gambar barcode QRIS dengan gampang.

🚀 Cara Nyobain Web Ini (Gampang Banget!)
Kamu nggak butuh aplikasi khusus atau server segala macem buat ngejalaninnya. Cukup ikuti langkah ini:

Copy semua kode HTML dan JavaScript tadi.

Buka aplikasi semacam Notepad atau VS Code di laptop kamu.

Paste kodenya di sana, lalu Save (Simpan) dengan nama index.html (bebas namanya apa aja, yang penting belakangnya harus .html).

Penting: Pastikan laptop kamu nyambung ke internet ya! (Soalnya web ini butuh narik desain Tailwind dan pembuat QR dari internet).

Tinggal double-click (buka) file index.html yang tadi kamu buat. Nanti webnya bakal otomatis kebuka di Google Chrome atau browser kesayangan kamu!

💡 Buat Maba: Gimana Sih Cara Kerjanya? (Logika Singkat)
Buat kamu yang baru mulai belajar ngoding, ini gambaran singkat cara kerja "daleman" webnya:

Nyimpen Data Pura-Pura: Semua barang yang kamu klik bakal dimasukin ke dalam sebuah daftar (di kode, ini namanya Array listBelanja). Ibaratnya kayak masukin barang ke kantong belanjaan virtual.

Update Layar Biar Sinkron: Tiap ada barang masuk atau dibuang dari keranjang, ada fungsi khusus (refreshTampilanToko) yang tugasnya "nyapu" isi layar sebentar, terus nulis ulang isinya dari awal. Ini dilakuin super cepat biar jumlah item dan harganya selalu akurat.

Sistem Pop-up (Jendela Tiba-Tiba Muncul): Jendela keranjang yang muncul di tengah layar itu sebenernya udah ada di dalam kode sejak awal, cuma disembunyiin aja (pakai perintah hidden). Pas kamu klik tombol keranjang, perintah hidden-nya dicabut, makanya jendelanya jadi kelihatan!

Bikin QR Code: Pas kamu klik bayar, kode JS bakal ngitung total belanjamu, bikin nomor resi acak, lalu nyuruh program pembantu (qrcode.js) buat ngegambar barcode di layar.