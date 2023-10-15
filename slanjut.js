let link = document.getElementById("confirmmm");

    link.addEventListener("click", function(event) {
        // Menampilkan kotak dialog konfirmasi
        let result = confirm("Apakah Anda ingin melanjutkan pembarayan?");

        // Mencegah pengarahan ke halaman berikutnya jika pengguna memilih "Cancel"
        if (!result) {
            event.preventDefault();
        }
    });


