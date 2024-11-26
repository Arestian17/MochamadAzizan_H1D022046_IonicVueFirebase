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
==========================================================================================================================================================================================
Penjelasan terkait konfiurasi firebase dan juga pembuatan crud
1. Konfigurasi Firebase
Firestore Database: Database Firestore digunakan untuk menyimpan data todo list. Setelah membuat project Firebase, Anda perlu membuat database dengan memilih lokasi server (misalnya Singapura/Jakarta untuk latensi rendah di wilayah Asia Tenggara).
Integrasi dengan Aplikasi:
Firebase dihubungkan ke aplikasi melalui SDK, memungkinkan aplikasi berinteraksi dengan database menggunakan fungsi yang telah didefinisikan.
Data disimpan dalam struktur koleksi dan dokumen yang memudahkan pengambilan, penambahan, pengeditan, dan penghapusan data.
2. Pembuatan Fitur CRUD
Create (Tambah Data):

Pengguna dapat menambahkan data baru melalui modal input (InputModal.vue).
Data yang dimasukkan diverifikasi untuk memastikan title wajib diisi sebelum disimpan ke Firestore.
Read (Baca Data):

Fungsi loadTodos digunakan untuk mengambil semua data dari Firestore dan menampilkannya di halaman utama.
Data dibagi menjadi dua kategori: active todos (belum selesai) dan completed todos (sudah selesai).
Update (Perbarui Data):

Data dapat diperbarui dengan membuka modal input melalui fungsi handleEdit.
Status todo (aktif atau selesai) dapat diubah menggunakan handleStatus. Perubahan ini langsung disimpan ke Firestore.
Delete (Hapus Data):

Data dapat dihapus melalui fitur swipe atau tombol delete, memanfaatkan fungsi handleDelete untuk menghapus dokumen dari Firestore.
3. Komponen Utama
HomePage.vue:
Berfungsi sebagai halaman utama yang menampilkan daftar todos.
Menggunakan komponen seperti ion-card, ion-list, dan ion-item untuk menampilkan data.
Data diperbarui secara berkala setiap menit untuk memastikan waktu yang ditampilkan selalu relevan.
InputModal.vue:
Berisi form input untuk menambah atau mengedit todo. Form ini mencakup field title dan description.
Modal ini dapat digunakan untuk kedua tujuan dengan memanfaatkan properti editingId.
4. Desain UI/UX
Penggunaan komponen Ionic untuk tampilan modern dan interaktif.
Scrollable container dibuat untuk mempermudah navigasi dalam daftar panjang.
Toast notifikasi membantu memberikan umpan balik kepada pengguna, seperti konfirmasi sukses atau pesan error.
5. Fungsi Tambahan
Refresh Data: Menggunakan fitur pull-to-refresh untuk memuat ulang data secara manual.
Notifikasi Toast: Memberikan feedback kepada pengguna terkait status operasi yang dilakukan (sukses atau gagal).
Waktu Relatif: Data menampilkan waktu terakhir diperbarui dalam format relatif (misalnya, "2 minutes ago") menggunakan pustaka date-fns.
6. Keamanan dan Validasi
Validasi Input: Data divalidasi sebelum disimpan (misalnya, title wajib diisi).
Keamanan Firebase: Pengaturan rules pada Firestore Database untuk memastikan hanya pengguna yang diizinkan dapat mengakses data tertentu.
==========================================================================================================================================================================================
Build ionic to apk
1. First, install the @capacitor/android package.

npm install @capacitor/android

Then, add the Android platform.

npx cap add android

Opening the Android Project
To open the project in Android Studio, run:

npx cap open android
2. kemudian buka android studio cari menu build pada garis tiga di pojok kiri![image](https://github.com/user-attachments/assets/3663dbcf-d805-49ce-bfc2-6ea05a371e73)

3. kemudian pilih menu build app bundle dan pilih apk ![image](https://github.com/user-attachments/assets/e8b753b9-d2a5-4aaa-a683-52848d1c957a)
4. tunggu proses sampai selesai dan locate untuk menuju folder apk tersebut
5. kemudian pindahkan apk ke hp kalian kemudain install
   ![WhatsApp Image 2024-11-26 at 16 46 28_5e09c215](https://github.com/user-attachments/assets/8c459bae-2547-4d9d-bbde-aaf50ac2a93c)
6. dan jadi


![image](https://github.com/user-attachments/assets/364e4e20-da04-4385-bc88-8f50094b8d4f)
![image](https://github.com/user-attachments/assets/6c6be7fc-aabd-46e9-bd6d-0d739fed5537)
![image](https://github.com/user-attachments/assets/ee706d52-96e3-40c1-851e-8d006420a7c6)
![image](https://github.com/user-attachments/assets/da4ac771-c284-47ed-b689-4bb026452020)
![image](https://github.com/user-attachments/assets/5b38ad94-7a42-484a-bd02-c1ed4ea9e8ca)
![image](https://github.com/user-attachments/assets/8d9f3bc9-05ea-4652-9704-94bc533b59f8)
![image](https://github.com/user-attachments/assets/5dc6669d-3580-42f6-a621-0cd2b1fbd217)
![image](https://github.com/user-attachments/assets/4d2cd5a4-e332-4610-84c7-6d1e08f4596b)
![image](https://github.com/user-attachments/assets/933ef0ad-d7a7-4b0f-8892-f3b1875a0686)
![image](https://github.com/user-attachments/assets/e5e9ccb8-3ea9-4e08-80b6-8d186337f893)
![WhatsApp Image 2024-11-26 at 16 46 28_169b2197](https://github.com/user-attachments/assets/55e98a8a-a31f-4eae-bc12-05ae94b37c08)

