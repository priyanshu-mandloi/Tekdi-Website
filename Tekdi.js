document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".swiper-container", {
        direction: "horizontal",
        slidesPerView: "auto",
        spaceBetween: 10,
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,
        },
    });
    var swiper = new Swiper(".swiper-container2", {
        direction: "horizontal",
        slidesPerView: "auto",
        spaceBetween: 0,
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,
        },
    });
});

let scrollpos = window.scrollY;
const header = document.querySelector("#main-nav");

const add_class_on_scroll = () => header.classList.add("bg-body-tertiary");
const remove_class_on_scroll = () => header.classList.remove("bg-body-tertiary");

window.addEventListener('scroll', function() { 
    scrollpos = window.scrollY;
    if (scrollpos >= 20) { 
        add_class_on_scroll();
    }
    else { 
        remove_class_on_scroll();
    }
});

