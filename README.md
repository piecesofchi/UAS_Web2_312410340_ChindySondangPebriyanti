# 📖 Chibrary v2.0 - Sistem Informasi Perpustakaan Komik & Buku Digital

### Deskripsi Proyek
Chibrary v2.0 adalah aplikasi Single Page Application (SPA) berbasis web untuk manajemen perpustakaan komik dan buku populer pilihan. Aplikasi ini mengusung estetika desain **Retro Pop-Art / Komik Strip** bertenaga TailwindCSS, menggunakan Vue.js sebagai frontend, dan didukung oleh RESTful API CodeIgniter 4 sebagai backend utamanya.

---

## Petunjuk Instalasi Lokal

### 1. Backend (CodeIgniter 4)
1. Pindahkan folder `backend-api` ke direktori server lokal Anda (misal: `htdocs` atau sejenisnya).
2. Import database `db_elibrary.sql` melalui phpMyAdmin.
3. Konfigurasikan koneksi database pada file `app/Config/Database.php` atau file `.env`.
4. Jalankan perintah di terminal folder backend:
   ```bash
   php spark serve --port 8080

### 2. Frontend (VueJS SPA)
1. Buka folder `frontend-spa`.

2. Karena frontend menggunakan metode SPA berbasis CDN, Anda cukup menjalankan file
   
   `index.html` menggunakan ekstensi Live Server di VS Code atau membuka langsung file
   
   `index.html` di browser Anda.

---

## Fitur Utama (Core Features)

Aplikasi **Chibrary Komik Digital** dirancang sebagai platform perpustakaan digital modern yang responsif, interaktif, dan efisien dengan memanfaatkan arsitektur Single Page Application (SPA). Berikut adalah fitur-fitur utama yang tersedia:

### 1. Katalog Buku & Komik Interaktif (Real-time Catalog)
* **Penyajian Data Dinamis:** Menampilkan seluruh koleksi buku dan komik secara instan melalui integrasi API backend (CodeIgniter 4) dengan frontend Vue.js.
* **Manajemen Stok Real-time:** Sistem secara otomatis mendeteksi jumlah stok buku di database. Jika stok tersedia, indikator akan berwarna hijau (`● Ready`), dan jika kosong akan otomatis berubah menjadi abu-abu (`● Habis`) serta menonaktifkan tombol pinjam.

### 2. Pencarian Pintar & Cepat (Instant Live Search)
* **Pencarian Responsif:** Pengguna dapat mencari komik atau buku impian secara *real-time* berdasarkan **Judul** maupun **Penulis** tanpa perlu memuat ulang halaman (*no page reload*).
* **Fitur Auto-Focus:** Dilengkapi dengan tombol akselerasi `⚡ RAID THE STACK ⚡` yang secara otomatis mengarahkan fokus kursor ke kolom pencarian untuk meningkatkan kenyamanan pengguna (UX).

### 3. Sistem Peminjaman Instan (Instant Borrowing System)
* **Alur Kerja Tanpa Ribet:** Pengguna dapat meminjam buku yang berstatus *Ready* hanya dengan memasukkan nama lengkap mereka melalui dialog interaktif.
* **Sinkronisasi Stok Otomatis:** Setelah peminjaman berhasil, sistem akan langsung memotong jumlah stok buku yang bersangkutan secara *real-time* pada tampilan aplikasi.

### 4. Dashboard Manajemen Admin (Admin Secure Dashboard)
* **Autentikasi Terproteksi:** Fitur khusus admin yang dilindungi oleh sistem login berkredensial untuk mencegah akses tidak sah dari luar.
* **Operasi CRUD Penuh:** Memungkinkan admin untuk mengelola (Tambah, Lihat, Ubah, Hapus) data katalog buku serta memantau data transaksi peminjaman langsung dari satu halaman *dashboard*.

### 5. Desain Antarmuka Estetik & Responsif (Neo-Brutalist & Responsive UI)
* **Tema Visual Unik:** Mengusung estetika *Neo-Brutalist* yang berani dengan perpaduan warna merah bata, kuning amber, dan aksen garis tepi yang tegas (*bold borders*).
* **Sepenuhnya Responsif:** Dikembangkan menggunakan Tailwind CSS, memastikan tampilan aplikasi tetap rapi, proporsional, dan nyaman diakses baik melalui perangkat *Mobile* (HP), Tablet, maupun Desktop (Laptop).

---

## Teknologi yang Digunakan

* **Frontend:** Vue.js 3 (CDN), Vue Router 4, Axios, Tailwind CSS
* **Backend:** CodeIgniter 4 (RESTful API)
* **Database:** MySQL / MariaDB
* **Deployment:** GitHub Pages / Vercel

---

## Dokumentasi & Screenshot Aplikasi

### A. Skema Relasi Database
<img width="960" height="540" alt="image" src="https://github.com/user-attachments/assets/63c37c6e-7c87-4800-a119-fa6e7ac0b5f8" />

### B. Proteksi API Auth - Pengujian Postman (Error 401)
<img width="960" height="540" alt="image" src="https://github.com/user-attachments/assets/5fc5b545-f38e-4a60-991d-939fde17a1f0" />

### C. Antarmuka Aplikasi (Frontend)
- Halaman Publik / Katalog Utama:
  <img width="960" height="540" alt="image" src="https://github.com/user-attachments/assets/120a0f39-e9d1-4839-862b-ec4714aeeef2" />

- Halaman Login Admin:
  <img width="960" height="540" alt="image" src="https://github.com/user-attachments/assets/cae8aea1-b6a2-4d0c-b313-172c9501ede4" />

- Dashboard Admin & Visualisasi Tabel Data:
  <img width="960" height="540" alt="image" src="https://github.com/user-attachments/assets/eb755171-66a9-476b-a318-c944854cc111" />
  <img width="960" height="540" alt="image" src="https://github.com/user-attachments/assets/29e71d95-5287-4521-9f8a-c71145ec95bd" />
  <img width="960" height="540" alt="image" src="https://github.com/user-attachments/assets/fe4f5a30-3351-4993-9891-ddd44e9f8d28" />

- Modal Tambah/Edit Data Buku:
  <img width="960" height="540" alt="image" src="https://github.com/user-attachments/assets/472fa164-2341-45f8-9cfc-c531e54d1f52" />


## Link Tautan Penting
### Link Demo Aplikasi: (https://uas-web2-312410340-chindy-sondang-p.vercel.app/)

### Link Video Presentasi YouTube: (https://youtu.be/FZn9EfahZZA?si=qu7G7Gy_OBKudz6h)
