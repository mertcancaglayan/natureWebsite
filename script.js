const nextBtn = document.querySelector("#nextBtn")
const prevBtn = document.querySelector("#prevBtn")
const carousel = document.querySelector(".carousel")

nextBtn.addEventListener("click", ()=> {
    carousel.style.transform = "translateY(-200%)"
})
prevBtn.addEventListener("click", ()=> {
    carousel.style.transform = "translateY(0%)"
})