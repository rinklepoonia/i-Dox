function openNav() {
    document.getElementById("navbar").classList.toggle("start-0");
    document.body.classList.toggle("overFlowHidden");
    document.querySelector(".menuIcon").classList.toggle("cross")
}
// ==========slider-collaboration
$('.slider_collaboration').slick({
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    slidesToShow: 6,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 1000,
    pauseOnHover: true,
    cssEase: 'linear',
});
// ==========accordion
const accordionHead = document.querySelectorAll(".accordionHead");
accordionHead.forEach((e) => {
    e.addEventListener("click", () => {
        const activeAccordion = document.querySelector(".active")
        e.parentElement.classList.toggle("active")
        activeAccordion && activeAccordion.classList.remove("active")
    })
})
// const accordionHead = document.querySelectorAll(".timeSaving_box");
// accordionHead.forEach((e) => {
//     e.addEventListener("click", () => {
//         const activeAccordion = document.querySelector(".active")
//         e.classList.toggle("active")
//         activeAccordion && activeAccordion.classList.remove("active")
//     })
// })
// ================testi-slider
$('.testi_slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    centerMode: true,
    centerPadding: '60px',
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
    ]
});
// ===============back-to-top
const topBtn = document.querySelector(".topBtn");
const show = document.querySelector(".show");

window.addEventListener("scroll", function () {
    if (window.scrollY > 900) {
        topBtn.classList.add("show");
    } else {
        topBtn.classList.remove("show");
    }
})
topBtn.addEventListener("click", function () {
    document.documentElement.scrollTop = 0;
});
// preloder
const Preload = document.getElementById("preload")
setTimeout(() => {
    Preload.classList.add("d-none")
}, "2000");
AOS.init({
    duration: 1200,
    once: true,
})
