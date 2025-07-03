   window.onload = () => {
      const loading = document.getElementById("loading");
      const konten = document.getElementById("konten");

      loading.style.opacity = 0;

      // Setelah transisi selesai, sembunyikan loading dan tampilkan konten
      setTimeout(() => {
        loading.style.display = "none";
        konten.style.visibility = "visible";
      }, 500); // waktu transisi CSS
    };