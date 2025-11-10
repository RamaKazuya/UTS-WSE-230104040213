# UTS Web Service Engineering – 230104040213

---

## 👨‍💻 Developer Team

### Dosen Pembimbing
[![GitHub - Muhayat Lab](https://img.shields.io/badge/GitHub-Muhayat--Lab-181717?logo=github&style=for-the-badge)](https://github.com/muhayat-lab)

### Developer
[![GitHub - RamaKazuya](https://img.shields.io/badge/GitHub-RamaKazuya-0A66C2?logo=github&style=for-the-badge)](https://github.com/RamaKazuya)

**Nama:** Muhammad Ade Ramadhani  
**NPM:** 230104040213  
**Kelas:** TI23A

---

## 🧠 Deskripsi Proyek

Proyek ini merupakan bagian dari tugas **UTS Web Service Engineering**,  
yang bertujuan untuk membangun **RESTful API** menggunakan **Node.js dan Express.js**.  
API ini berfungsi untuk mengelola data mahasiswa dengan fitur CRUD, validasi input,  
dan endpoint khusus untuk menampilkan informasi API.

---

## ⚙️ Fitur Utama

- GET → Menampilkan semua data mahasiswa  
- GET by ID → Menampilkan data berdasarkan ID  
- POST → Menambahkan data mahasiswa baru  
- PUT → Memperbarui data mahasiswa  
- DELETE → Menghapus data mahasiswa  
- INFO → Menampilkan informasi layanan API  

---

## 🚀 Cara Menjalankan Proyek

# 1. Clone repository
git clone https://github.com/RamaKazuya/UTS-WSE-230104040213.git

# 2. Masuk ke folder project
cd UTS-WSE-230104040213

# 3. Install dependencies
npm install

# 4. Jalankan server (development mode)
npm run dev

# Jika berhasil, terminal akan menampilkan:
# Server running on http://localhost:3000

---

## 🌐 Endpoint API

# Method | Endpoint | Deskripsi | Status Code
# ------- | ---------- | ---------- | -------------
# GET     | /api/students         | Ambil semua data mahasiswa       | 200
# GET     | /api/students/:id     | Ambil data berdasarkan ID        | 200 / 404
# POST    | /api/students         | Tambah data mahasiswa baru       | 201 / 400
# PUT     | /api/students/:id     | Update data mahasiswa            | 200 / 400 / 404
# DELETE  | /api/students/:id     | Hapus data mahasiswa             | 204 / 404
# GET     | /api/info             | Informasi API Service            | 200

---

## 📁 Contoh Data (students.json)

[
  {
    "id": 1,
    "name": "Muhammad Ade Ramadhani",
    "npm": "230104040213",
    "major": "Teknologi Informasi"
  },
  {
    "id": 2,
    "name": "M Hasyir",
    "npm": "230104040221",
    "major": "Sistem Informasi"
  },
  {
    "id": 3,
    "name": "Budi Santoso",
    "npm": "230104040224",
    "major": "Teknik Informatika"
  }
]

---

## 🧾 Validasi Input

# Field yang wajib diisi:
# - name
# - npm
# - major

# Jika salah satu field kosong, server akan merespons seperti berikut:
{
  "status": "fail",
  "message": "Field 'name' wajib diisi"
}

---

## 📬 Contoh Request (Postman)

# Tambah Data (POST)
POST http://localhost:3000/api/students
# Body → raw → JSON
{
  "name": "Andi Pratama",
  "npm": "230104040250",
  "major": "Sistem Informasi"
}

---

# Update Data (PUT)
PUT http://localhost:3000/api/students/1
# Body → raw → JSON
{
  "name": "Muhammad Ade Ramadhani (Update)",
  "npm": "230104040213",
  "major": "Teknologi Informasi"
}

---

# Hapus Data (DELETE)
DELETE http://localhost:3000/api/students/3

---

## 🧰 Teknologi yang Digunakan

# Node.js       → Runtime JavaScript untuk backend
# Express.js     → Framework REST API
# Nodemon        → Menjalankan server otomatis saat file berubah
# CORS           → Mengizinkan akses lintas domain
# Morgan         → Logging aktivitas request

---

## ℹ️ Endpoint Informasi API

GET http://localhost:3000/api/info

# Response:
{
  "service": "UTS Web Service - Students Resource",
  "author": "230104040213",
  "description": "RESTful API CRUD lengkap dengan validasi input dan endpoint info."
}

---

## 📄 Lisensi

Proyek ini dibuat untuk keperluan akademik dalam mata kuliah **Web Service Engineering**  
dan dapat dikembangkan lebih lanjut untuk pembelajaran pribadi.

---
