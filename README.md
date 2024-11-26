Nama: Mochamad Azizan
NIM : H1D022046  
Shift: E
Penjelasan mengenai bagaimana cara dari mulai autentikasi login, hingga aplikasi mendapatkan username dan profil kita dari akun google.
 1. Persiapan Firebase
- **Membuat Proyek Firebase**: Daftar ke [Firebase Console](https://console.firebase.google.com/), buat proyek baru, dan aktifkan fitur Firebase Authentication.
- **Mengaktifkan Metode Login Google**: Di menu **Authentication**, aktifkan metode login menggunakan Google. Tambahkan OAuth client ID jika diperlukan, yang dapat dibuat melalui Google Cloud Console.
- **Konfigurasi Firebase SDK**: Hubungkan aplikasi Ionic Anda dengan Firebase menggunakan konfigurasi proyek Firebase Anda.
- 
2. Implementasi Autentikasi Login
- **Inisialisasi Firebase Authentication**: Gunakan Firebase SDK untuk mengatur autentikasi di aplikasi Ionic.
- **Menggunakan Google Login**: Firebase menyediakan fungsi untuk mempermudah login dengan akun Google. Saat pengguna memilih "Sign in with Google", Firebase akan memulai proses autentikasi OAuth.
- **Mengelola Sesi Login**: Setelah login berhasil, Firebase akan memberikan informasi pengguna, termasuk token autentikasi yang dapat digunakan untuk sesi.

### **3. Mendapatkan Data Pengguna**
Setelah login berhasil, Firebase akan mengembalikan objek pengguna yang berisi informasi lengkap seperti:
- **displayName**: Nama pengguna dari akun Google.
- **email**: Email pengguna.
- **photoURL**: URL gambar profil pengguna.
- **uid**: ID unik pengguna di Firebase.
Informasi ini dapat diakses langsung melalui SDK Firebase Authentication.

4. Menyimpan dan Mengelola Data Pengguna
- Simpan data pengguna (seperti `displayName`, `email`, dan `photoURL`) ke state management aplikasi Anda (misalnya Vuex atau Pinia).
- Jika aplikasi tidak menggunakan state management, data ini dapat disimpan sementara di local state komponen atau session storage browser.

5. Menampilkan Data di Halaman Profil
- Data pengguna yang sudah disimpan dapat digunakan untuk ditampilkan di halaman profil. Misalnya:
  - Menampilkan nama pengguna menggunakan `displayName`.
  - Menampilkan email menggunakan `email`.
  - Menampilkan foto profil menggunakan URL `photoURL`.
  - 
6. Logout
- Saat pengguna logout, Anda dapat menggunakan fungsi logout dari Firebase Authentication untuk menghapus sesi pengguna.
- Setelah logout, hapus data pengguna dari state atau session storage, lalu redirect pengguna ke halaman login.


Alur Kerja Lengkap
1. Pengguna menekan tombol "Sign in with Google".
2. Firebase mengarahkan pengguna ke halaman login Google untuk autentikasi.
3. Setelah login berhasil:
   - Firebase mengembalikan data pengguna (username, email, foto profil).
   - Data pengguna disimpan di aplikasi.
4. Data tersebut ditampilkan di halaman profil atau halaman lain yang relevan.
5. Saat logout, sesi Firebase diakhiri, dan data pengguna dihapus dari aplikasi.


![image](https://github.com/user-attachments/assets/364e4e20-da04-4385-bc88-8f50094b8d4f)
![image](https://github.com/user-attachments/assets/6c6be7fc-aabd-46e9-bd6d-0d739fed5537)
![image](https://github.com/user-attachments/assets/ee706d52-96e3-40c1-851e-8d006420a7c6)
![image](https://github.com/user-attachments/assets/da4ac771-c284-47ed-b689-4bb026452020)
