document.getElementById("wishButton").addEventListener("click", function() {
    // Menampilkan pesan ucapan
    var message = document.getElementById("message");
    message.style.display = "block";
    
    // Animasi sederhana pada pesan
    message.style.opacity = 0;
    var opacity = 0;
    var timer = setInterval(function() {
        if (opacity >= 1) clearInterval(timer);
        message.style.opacity = opacity;
        opacity += 0.05;
    }, 50);
    
    // Mengubah teks tombol setelah ditekan
    this.textContent = "Ucapan Terkirim!";
    this.disabled = true;
});