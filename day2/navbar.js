let menuOpen = false;

document.querySelector(".menu-open").addEventListener("click", () => {
    document.querySelector(".menu-items").style.display = "none";
    document.querySelector(".menu-open").style.display = "none";
    document.querySelector(".menu-close").style.display = "flex";
    menuOpen = !menuOpen;
    // 
});
document.querySelector(".menu-close").addEventListener("click", () => {
    document.querySelector(".menu-items").style.display = "flex";
    document.querySelector(".menu-close").style.display = "none";
    document.querySelector(".menu-open").style.display = "flex";
    menuOpen = !menuOpen;
    // 
});