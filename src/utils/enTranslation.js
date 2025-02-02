const lang = {
    'Note App' : 'Aplikasi Catatan',
    'Home' : 'Home',
    'Archive' : 'Arsip',
    'Active Notes' : 'Catatan Aktif',
    'Archived Notes' : 'Catatan Arsip',
    'Add Note' : 'Tambah Catatan',
    'Delete' : 'Hapus',
    'Unarchive' : 'Pulihkan',
    'Cancel' : 'Batal',
    'Save' : 'Simpan',
    'Save Note' : 'Simpan Catatan',
    'Save Archive' : 'Simpan Arsip',
    'Save Active Note' : 'Simpan Catatan Aktif',
    'Save Archived Note' : 'Simpan Catatan Arsip',
    'Add Active Note' : 'Tambah Catatan Aktif',
    'Add Archived Note' : 'Tambah Catatan Arsip',
    'Note Not Found' : 'Catatan Tidak Ditemukan',
    'Page Not Found' : 'Halaman Tidak Ditemukan',
    'Note Successfully Deleted' : 'Catatan Berhasil Dihapus',
    'Note Successfully Archived' : 'Catatan Berhasil Diarsipkan',
    'Note Successfully Unarchived' : 'Catatan Berhasil Dipulihkan',
    'Note Successfully Updated' : 'Catatan Berhasil Diperbarui',
    'Note Successfully Saved' : 'Catatan Berhasil Disimpan',
    'Note Successfully Created' : 'Catatan Berhasil Dibuat',
    'Sign Up' : 'Daftar',
    'Sign In' : 'Masuk',
    'Log Out' : 'Keluar',
    'Username' : 'Nama Pengguna',
    'Password' : 'Kata Sandi',
    'New Password' : 'Kata Sandi Baru',
    'Old Password' : 'Kata Sandi Lama',
    'Confirm Password' : 'Konfirmasi Kata Sandi',
    'User created successfully' : 'Pendaftaran pengguna berhasil',
    'Email already use': 'Email sudah ada',
    'Back to' : 'Kembali ke',
    'Minimum 6 characters' : 'Minimal 6 karakter',
    'Maximum 10 characters' : 'Maksimal 10 karakter',
    'Maximum 50 characters' : 'Maksimal 50 karakter',
    'Username is required' : 'Nama pengguna harus diisi',
    'Password is required' : 'Kata sandi harus diisi',
    'Email is required' : 'Email harus diisi',
    'Email is not valid' : 'Email tidak valid',
    'Password is not valid' : 'Kata sandi tidak valid',
    'Password does not match' : 'Kata sandi tidak cocok',
    'New password must be different from old password' : 'Kata sandi baru harus berbeda dari kata sandi lama',
}

function __Text(locale, text) {
    if (locale === 'id') {
        return lang[text] || text;
    }

    return Object.keys(lang).find(key => key === text) || text;
}

export default __Text;