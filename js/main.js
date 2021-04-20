const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}





let nav = $(".nav");

$(window).scroll(function () {
  // get the complete hight of window
  let oTop = $(".site-content").offset().top - window.innerHeight;
  if ($(window).scrollTop() > oTop) {
    nav.addClass("sticky");
  } else {
    nav.removeClass("sticky");
  }
});




$(document).ready(function () {

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /** click event on toggle menu */
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    })


    


    // owl-crousel for blog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });


    // click to scroll top
    $('.move-up span').click(function () {
        
        $('html, body').animate({
            scrollTop: 1
        }, 1000);
    })

    // AOS Instance
    AOS.init();

});