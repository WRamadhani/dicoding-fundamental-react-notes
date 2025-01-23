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
    'Note Successfully Deleted' : 'Catatan Berhasil Dihapus',
    'Note Successfully Archived' : 'Catatan Berhasil Diarsipkan',
    'Note Successfully Updated' : 'Catatan Berhasil Diperbarui',
    'Note Successfully Saved' : 'Catatan Berhasil Disimpan',
    'Note Successfully Created' : 'Catatan Berhasil Dibuat',
    'Sign Up' : 'Daftar',
    'Sign In' : 'Masuk',
    'Username' : 'Nama Pengguna',
    'Password' : 'Kata Sandi',
    'New Password' : 'Kata Sandi Baru',
    'Old Password' : 'Kata Sandi Lama',
    'Confirm Password' : 'Konfirmasi Kata Sandi',
    'User created successfully' : 'Pendaftaran pengguna berhasil',
    'Email already use': 'Email sudah ada',
}

function __Text(locale, text) {
    if (locale === 'id') {
        return lang[text] || text;
    }

    return Object.keys(lang).find(key => key === text) || text;
}

export default __Text;