/* ==========================================================================
   URCREATIVE AGENT - script.js
   Dipakai di semua halaman. Setiap bagian aman dijalankan walau elemennya
   tidak ada di halaman tersebut.
   ========================================================================== */


/* --------------------------------------------------------------------------
   1. Menu mobile: buka/tutup navigasi
   -------------------------------------------------------------------------- */
const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");

menuToggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen);
});


/* --------------------------------------------------------------------------
   2. Filter project (halaman Portfolio)
   Tombol memakai data-filter, project memakai data-category.
   Nilai "all" menampilkan semua project.
   -------------------------------------------------------------------------- */
const filterButtons = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".project");
const emptyState = document.querySelector(".empty-state");

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const category = button.dataset.filter;
        let visibleCount = 0;

        // Tandai tombol yang sedang aktif
        filterButtons.forEach((item) => item.classList.remove("active"));
        button.classList.add("active");

        // Tampilkan atau sembunyikan project sesuai kategori
        projects.forEach((project) => {
            const categories = project.dataset.category
                .split(",")
                .map((item) => item.trim());
            const isMatch = category === "all" || categories.includes(category);
            project.classList.toggle("is-hidden", !isMatch);
            if (isMatch) visibleCount++;
        });

        // Tampilkan pesan jika kategori belum punya project
        emptyState.hidden = visibleCount > 0;
    });
});


/* --------------------------------------------------------------------------
   3. Copy Email (halaman Contact)
   -------------------------------------------------------------------------- */
function copyEmail() {
    const email = "rizkyadjiess44@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
        const toast = document.getElementById("toast");
        if (toast) {
            toast.innerText = "Email address copied!";
            toast.classList.add("show");
            setTimeout(() => toast.classList.remove("show"), 3000);
        }
    });
}
