document.addEventListener("DOMContentLoaded", function(){

    // Swiper initialization
    var swiper = new Swiper(".mySwiper", {
        effect: "cube",
        grabCursor: false,
        allowTouchMove: false,
        cubeEffect: { shadow:true, slideShadows:true, shadowOffset:20, shadowScale:0.94 },
        mousewheel:true
    });

    // Sidebar navigation
    window.Navigate = function(indx){
        document.querySelectorAll(".Links li").forEach(li => li.classList.remove("activeLink"));
        document.querySelectorAll(".Links li")[indx].classList.add("activeLink");
        swiper.slideTo(indx, 1000, true);
    }

    // Fade-in animation
    function updateUI(index){
        document.querySelectorAll(".swiper-slide").forEach(slide=>{
            slide.querySelectorAll(".fade-in").forEach(el => el.classList.remove("active"));
        });
        document.querySelectorAll(".swiper-slide")[index].querySelectorAll(".fade-in")
            .forEach(el => setTimeout(()=>el.classList.add("active"), 100));
    }

    // Initial fade-in
    updateUI(swiper.activeIndex);
    swiper.on('slideChange', ()=>updateUI(swiper.activeIndex));
});
