# 📖 Chibrary v2.0 - Sistem Informasi Perpustakaan Komik & Buku Digital

### Deskripsi Proyek
Chibrary v2.0 adalah aplikasi Single Page Application (SPA) berbasis web untuk manajemen perpustakaan komik dan buku populer pilihan. Aplikasi ini mengusung estetika desain **Retro Pop-Art / Komik Strip** bertenaga TailwindCSS, menggunakan Vue.js sebagai frontend, dan didukung oleh RESTful API CodeIgniter 4 sebagai backend utamanya.

---

## 🛠️ Petunjuk Instalasi Lokal

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

## 📸 Dokumentasi & Screenshot Aplikasi

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


##🔗 Link Tautan Penting
###Link Demo Aplikasi: (https://uas-web2-312410340-chindy-sondang-p.vercel.app/)

###Link Video Presentasi YouTube: Tonton di Sini
