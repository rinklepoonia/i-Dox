const menuIcon = document.querySelector(".menuIcon")
const menulist = document.querySelector(".menulist")

menuIcon.addEventListener("click", function () {
    menulist.classList.toggle("show");
    document.body.classList.toggle("overFlowHidden")
    document.querySelector(".menuIcon").classList.toggle("cross")
})
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
const accordionHead = document.querySelectorAll(".accordionHead");
accordionHead.forEach((e) => {
    e.addEventListener("click", () => {
        const activeAccordion = document.querySelector(".active")
        e.parentElement.classList.toggle("active")
        activeAccordion && activeAccordion.classList.remove("active")
    })
})
$('.testi_slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        // {
        //     breakpoint: 600,
        //     settings: {
        //         slidesToShow: 1,
        //         slidesToScroll: 2,
        //         dots: true,
        //         centerMode: false,
        //         centerPadding: '0',
        //     }
        // },
    ]
});