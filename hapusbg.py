import easygui
import requests
import io

# 1. Menampilkan kotak dialog pemilihan gambar di HP Anda
inputPath = easygui.fileopenbox(title='Pilih File Gambar')
outputPath = easygui.filesavebox(title='Simpan Hasil Tanpa BG Ke..')

print("Sedang memproses hapus background lewat cloud gratisan...")

try:
    # Membuka file gambar lokal yang dipilih
    with open(inputPath, 'rb') as img_file:
        # Mengirim gambar ke API publik gratis (tanpa perlu API Key)
        response = requests.post(
            'https://bgclear.ai', # Menggunakan endpoint publik bgclear
            files={'file': img_file}
        )
    
    # 2. Jika proses di server cloud berhasil (Status 200)
    if response.status_code == 200:
        with open(outputPath, 'wb') as out_file:
            out_file.write(response.content)
        print("Sukses! Latar belakang gambar berhasil dihapus dan disimpan.")
    else:
        # Fallback menggunakan server alternatif jika server utama sibuk
        print("Server utama sibuk, mencoba server cadangan...")
        with open(inputPath, 'rb') as img_file:
            response_backup = requests.post(
                'https://prodia.com', # Menggunakan endpoint alternatif gratis
                files={'image': img_file}
            )
        if response_backup.status_code == 200:
            with open(outputPath, 'wb') as out_file:
                out_file.write(response_backup.content)
            print("Sukses menggunakan server cadangan!")
        else:
            print(f"Gagal memproses. Error code: {response.status_code}")

except Exception as e:
    print(f"Terjadi kesalahan koneksi: {e}")
