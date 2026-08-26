# ☕ Waga Kopi - Premium & Responsive Kafe Landing Page

Selamat datang! Berkas ini berisi panduan lengkap untuk menggunakan, menyesuaikan, dan mempublikasikan (mendeploy) website **Waga Kopi**. 

Website ini dirancang khusus dengan gaya berkelas menggunakan **Obsidian Glassmorphism** (tema gelap premium beraksen emas hangat). Kode programnya sengaja dibuat menggunakan **HTML5 & CSS3 murni** tanpa framework rumit agar pembeli pemula sekalipun bisa langsung mengubah isinya dengan sangat mudah.

---

## 📂 Daftar File & Fungsinya

* **`index.html`**: Halaman Beranda (Landing Page) utama dengan sambutan, slogan, dan banner foto kedai.
* **`menu.html`**: Halaman daftar menu makanan, cemilan, perkopian, dan es lengkap dengan emoji pelengkap.
* **`tentang.html`**: Halaman informasi sejarah singkat kedai, Visi, dan Misi menggunakan gaya bahasa Gen Z yang kasual.
* **`kontak.html`**: Halaman kontak sosial media (TikTok, Instagram, WhatsApp), jam buka, dan peta Google Maps terintegrasi.
* **`style.css`**: File CSS utama untuk mengatur warna tema, jenis huruf (font), ukuran teks, animasi hover, dan responsivitas layar HP.

---

## 🛠️ PANDUAN EDITING LENGKAP (Cara Mengubah Isi Web)

Pembeli dapat membuka file-file di bawah menggunakan aplikasi editor teks (seperti VS Code, Notepad++, Sublime Text, atau Notepad bawaan) untuk melakukan perubahan berikut:

### 1. Mengubah Skema Warna Tema Website
Buka file **`style.css`**, cari kode berikut di bagian paling atas (`:root`):
```css
:root {
    --primary-color: #d4a373;       /* Warna Emas Utama (untuk judul, border kiri menu, tombol) */
    --secondary-color: #faedcd;     /* Warna Krem Champagne (saat tombol atau kartu menu disentuh kursor) */
    --dark-color: #0b0b0d;          /* Warna Hitam Obsidian (Latar belakang utama website) */
    --bg-card: rgba(19, 19, 22, 0.75); /* Warna latar belakang kotak menu (efek kaca transparan) */
}
```
* **Cara Mengubah**: Ganti kode hex warna (misal `#d4a373`) dengan warna kedai pilihan Anda sendiri (misal `#889c72` untuk warna hijau Matcha).

---

### 2. Mengubah Nama Kedai/Brand Anda
Cari dan ganti tulisan **Waga Kopi** di semua file HTML (`index.html`, `menu.html`, `tentang.html`, `kontak.html`):
1. **Nama di Tab Browser**: Cari tag `<title>` di bagian atas file:
   ```html
   <title>Waga Kopi - Seduhan Hangat di Ruang Digital</title>
   ```
2. **Logo di Navbar atas**: Cari tag logo:
   ```html
   <div class="logo">☕ Waga Kopi</div>
   ```
3. **Teks Hak Cipta di Footer bawah**: Cari tag footer:
   ```html
   <p>&copy; 2026 Waga Kopi. ☕ Dibuat dengan cinta...</p>
   ```

---

### 3. Mengubah Sosial Media & WhatsApp
Buka file **`kontak.html`**, cari baris berkode berikut di bagian bawah:
1. **Mengubah Link TikTok**:
   ```html
   <p><strong>🎵 TikTok:</strong> @WAGA.COFFEE0</p>
   ```
   * *Ganti tulisan `@WAGA.COFFEE0` dengan nama akun TikTok Anda.*
2. **Mengubah Link Instagram**:
   ```html
   <p><strong>📸 Instagram:</strong> @WAGACOFFEE123</p>
   ```
   * *Ganti tulisan `@WAGACOFFEE123` dengan nama akun Instagram Anda.*
3. **Mengubah WhatsApp & Link Chat Langsung**:
   ```html
   <p><strong>💬 WhatsApp:</strong> +62 882-0031-60137</p>
   ```
   * *Ganti nomor WhatsApp di atas.* 
   * **PENTING**: Jika ingin mengaktifkan tombol pesan langsung, cari link tombol di menu atau kontak, lalu ganti nomor telepon pada link `https://wa.me/62882003160137` (gunakan kode negara `62` tanpa tanda `+` atau spasi).

---

### 4. Mengubah Jam Operasional
Buka file **`kontak.html`**, cari baris kode ini:
```html
<p><strong>⏰ Jam Operasional:</strong> Setiap hari 08:00 - 24:00 (Tengah Malam)</p>
```
* **Cara Mengubah**: Ganti teks `Setiap hari 08:00 - 24:00 (Tengah Malam)` dengan jadwal buka kedai Anda sendiri.

---

### 5. Mengubah Lokasi Peta (Google Maps)
Buka file **`kontak.html`**, cari bagian `<!-- Google Maps Embed -->`:
```html
<iframe src="https://maps.google.com/maps?q=-6.732222,110.839306&z=17&output=embed" ...></iframe>
```
* **Cara Mengubah**:
  1. Cari titik koordinat (Latitude & Longitude) tempat kedai Anda lewat Google Maps (contoh koordinat Kudus: `-6.732222,110.839306`).
  2. Ganti angka koordinat setelah parameter `q=` di dalam link `src` di atas dengan koordinat baru Anda.
  3. Ubah tingkat kebesaran zoom pada parameter `z=17` jika peta dirasa kurang dekat/jauh.

---

### 6. Menambah atau Mengubah Daftar Menu Produk
Buka file **`menu.html`**, temukan blok kategori menu (misal: `<!-- PERKOPIAN -->`, `<!-- PER MAKANAN -->`), lalu ubah atau tambahkan baris menu dengan format berikut:
```html
<div class="menu-item">
    <div class="menu-text">
        <span class="menu-name">☕ Nama Minuman Kopi Baru</span>
    </div>
</div>
```
* **Tip**: Gunakan emoji keyboard (`Win + .` di Windows atau `Cmd + Ctrl + Space` di Mac) untuk memberikan emoji ikonik pada menu baru Anda.

---

### 7. Mengganti Gambar Banner Utama
Jika ingin mengganti gambar kafe di halaman utama:
1. Simpan foto baru Anda ke dalam folder proyek ini (misal bernama `kafe-saya.jpg`).
2. Buka file **`index.html`**, cari baris kode berikut (di bagian paling bawah sekitar baris 195):
   ```html
   <img src="WhatsApp Image 2026-06-17 at 15.53.57.jpeg" alt="Waga Kopi">
   ```
3. Ubah nama file gambar di dalam `src` menjadi:
   ```html
   <img src="kafe-saya.jpg" alt="Waga Kopi">
   ```

---

## 🌐 PANDUAN PUBLIKASI (DEPLOYMENT) GRATIS

Agar website Anda bisa diakses secara online oleh semua orang di internet, Anda bisa menggunakan platform gratisan berikut:

### Metode A: Menggunakan Netlify (Mudah & Cepat - Tanpa Coding)
1. Kunjungi situs resmi [Netlify](https://www.netlify.com/) dan daftarkan akun baru secara gratis.
2. Masuk ke dashboard utama Netlify.
3. Cari area bertuliskan **"Deploy manually"** atau dropzone pengunggahan.
4. **Tarik dan Lepas (Drag & Drop)** seluruh folder proyek website ini langsung ke dalam browser.
5. Tunggu proses unggah selesai dalam beberapa detik. Website Anda kini sudah online dengan link gratis dari Netlify!

### Metode B: Menggunakan GitHub Pages
1. Buat akun di [GitHub](https://github.com/) dan buat satu repositori baru.
2. Unggah (upload) seluruh berkas website ini ke repositori tersebut.
3. Buka tab **Settings** repositori Anda, kemudian pilih menu **Pages** di sebelah kiri.
4. Di bagian **Build and deployment**, ubah pilihan Source menjadi **Deploy from a branch**.
5. Pilih branch **`main`** atau **`master`**, lalu klik tombol **Save**.
6. Tunggu sekitar 1-2 menit, GitHub akan memberikan link website online Anda secara otomatis.
