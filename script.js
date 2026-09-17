// Variabel Global
let listBelanja = []; 
let qrEngine = null;  

// Fungsi nambah barang ke keranjang
function beliBarang(namaItem, hargaItem) {
  listBelanja.push({ nama: namaItem, harga: hargaItem });
  refreshTampilanToko();
  alert(`Berhasil menambahkan ${namaItem} ke keranjang!`);
}

// Fungsi update tampilan keranjang
function refreshTampilanToko() {
  document.getElementById('totalItem').innerText = listBelanja.length;
  
  const kontainerList = document.getElementById('isiKantung');
  const textTotal = document.getElementById('angkaTotal');
  const btnPay = document.getElementById('tombolCheckout');
  
  kontainerList.innerHTML = '';
  let kalkulasiTotal = 0; 

  if (listBelanja.length === 0) {
    kontainerList.innerHTML = '<li class="py-4 text-center text-gray-400">Keranjang masih kosong.</li>';
    btnPay.classList.add('hidden'); 
  } else {
    listBelanja.forEach((item, urutan) => {
      kalkulasiTotal += item.harga;
      kontainerList.innerHTML += `
        <li class="py-2 flex justify-between items-center text-sm">
          <span>${item.nama}</span>
          <div class="flex items-center gap-2">
            <span class="font-semibold">Rp ${item.harga.toLocaleString('id-ID')}</span>
            <button onclick="buangItem(${urutan})" class="text-red-500 hover:text-red-700 font-bold">&times;</button>
          </div>
        </li>
      `;
    });
    btnPay.classList.remove('hidden');
  }

  textTotal.innerText = `Rp ${kalkulasiTotal.toLocaleString('id-ID')}`;
}

// Fungsi hapus barang dari keranjang
function buangItem(urutan) {
  listBelanja.splice(urutan, 1);
  refreshTampilanToko();
}

// Buka modal
function bukaKantung() {
  document.getElementById('boxKeranjang').classList.remove('hidden');
}

// Tutup modal
function tutupKantung() {
  document.getElementById('boxKeranjang').classList.add('hidden');
  balikKeList();
}

// Beralih ke halaman QRIS
function prosesKeBayar() {
  let hitungTotal = 0;
  for (let i = 0; i < listBelanja.length; i++) {
    hitungTotal += listBelanja[i].harga;
  }
  
  document.getElementById('tagihanQris').innerText = `Rp ${hitungTotal.toLocaleString('id-ID')}`;

  document.getElementById('panelList').classList.add('hidden');
  document.getElementById('panelQris').classList.remove('hidden');

  const areaQr = document.getElementById('areaQr');
  areaQr.innerHTML = ''; 

  // Bikin QR Code
  let nomorInvoice = 'INV-' + Math.floor(Math.random() * 900000 + 100000);
  let payloadQris = `https://techshop.id${nomorInvoice}?total=${hitungTotal}`;
  
  qrEngine = new QRCode(areaQr, {
    text: payloadQris,
    width: 175,
    height: 175,
    colorDark: "#1e3a8a", 
    colorLight: "#ffffff" 
  });
}

// Batal bayar / kembali ke keranjang
function balikKeList() {
  document.getElementById('panelQris').classList.add('hidden');
  document.getElementById('panelList').classList.remove('hidden');
}

// Selesai belanja
function prosesSelesai() {
  alert('Sip! Pembayaran kamu bakal langsung dicek sama sistem.');
  listBelanja = [];
  refreshTampilanToko();
  tutupKantung();
}