# 🚀 UTS Web Service Engineering – 230104040213

Halo semua! 👋  
Ini adalah project **UTS Web Service Engineering** punyaku yang dibuat menggunakan **Node.js + Express.js**.  
Tujuannya sederhana: bikin RESTful API yang bisa **CRUD (Create, Read, Update, Delete)** data mahasiswa dengan tampilan hasil yang rapi dan validasi lengkap.

---

## 🧩 Fitur Utama

✨ **GET** – Ambil semua data mahasiswa  
✨ **GET by ID** – Ambil data berdasarkan `id`  
✨ **POST** – Tambah data mahasiswa baru  
✨ **PUT** – Update data mahasiswa  
✨ **DELETE** – Hapus data mahasiswa  
✨ **INFO** – Lihat informasi API  

---

## ⚙️ Cara Menjalankan Project

# 1️⃣ Clone repo dari GitHub
git clone https://github.com/RamaKazuya/UTS-WSE-230104040213.git

# 2️⃣ Masuk ke folder project
cd UTS-WSE-230104040213

# 3️⃣ Install semua dependencies
npm install

# 4️⃣ Jalankan server (mode development)
npm run dev

# Setelah berhasil, akan muncul di terminal:
# ✅ Server running on http://localhost:3000

# Buka di Postman atau browser:
# http://localhost:3000/api/students

---

## 📡 Endpoint API

# Method | Endpoint | Deskripsi | Status Code
# ------- | ---------- | ---------- | -------------
# GET     | /api/students         | Ambil semua data mahasiswa       | 200
# GET     | /api/students/:id     | Ambil data berdasarkan ID        | 200 / 404
# POST    | /api/students         | Tambah data mahasiswa baru       | 201 / 400
# PUT     | /api/students/:id     | Update data mahasiswa            | 200 / 400 / 404
# DELETE  | /api/students/:id     | Hapus data mahasiswa             | 204 / 404
# GET     | /api/info             | Informasi API Service            | 200

---

## 🧠 Contoh Data (students.json)

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

## 🧾 Contoh Validasi

# Field wajib diisi:
# - name
# - npm
# - major

# Jika salah satu kosong, maka response-nya seperti ini 👇

{
  "status": "fail",
  "message": "Field 'name' wajib diisi"
}

---

## 🧪 Contoh Request via Postman

# 🔹 Tambah Data (POST)
POST http://localhost:3000/api/students
# Body → raw → JSON
{
  "name": "Andi Pratama",
  "npm": "230104040250",
  "major": "Sistem Informasi"
}

---

# 🔹 Update Data (PUT)
PUT http://localhost:3000/api/students/1
# Body → raw → JSON
{
  "name": "Muhammad Ade Ramadhani (Update)",
  "npm": "230104040213",
  "major": "Teknologi Informasi"
}

---

# 🔹 Hapus Data (DELETE)
DELETE http://localhost:3000/api/students/3

---

## ⚙️ Teknologi yang Dipakai

# 🟢 Node.js       → Runtime server
# ⚡ Express.js     → Framework REST API
# 🔁 Nodemon        → Auto restart server
# 🌍 CORS           → Mengizinkan cross-domain
# 🧾 Morgan         → Logging request di console

---

## 💬 Informasi Tambahan

# Setelah server jalan, kamu juga bisa cek info API lewat:
GET http://localhost:3000/api/info

# Contoh response:
{
  "service": "UTS Web Service - Students Resource",
  "author": "230104040213",
  "description": "RESTful API CRUD lengkap dengan validasi input dan endpoint info."
}

---

## 👨‍💻 Developer Team

# 🧑‍🏫 Dosen Pembimbing
[![GitHub - Muhayat Lab](https://img.shields.io/badge/GitHub-Muhayat--Lab-181717?logo=github&style=for-the-badge)](https://github.com/muhayat-lab)

# 💻 Developer
[![GitHub - RamaKazuya](https://img.shields.io/badge/GitHub-RamaKazuya-0A66C2?logo=github&style=for-the-badge)](https://github.com/RamaKazuya)

---

## 👨‍💻 Author

# Nama: Muhammad Ade Ramadhani
# NPM: 230104040213
# Kelas: TI23A

# Dibuat dengan ☕, semangat UTS, dan sedikit rasa ngantuk malam-malam 😆  

---

# ⭐ Jangan lupa kasih Star di repo ini kalau menurutmu keren 😎
