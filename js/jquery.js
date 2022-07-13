// text effect start
var typed = new Typed('.nameTitle',{
    strings: ["Hello...","I'M MITHUN MIAH"],
    typeSpeed:200,
    loop:false
});
var typed = new Typed('.positionTitle',{
    strings: ["Web Designer","Front-End Web Developer","Back-End Web Developer"],
    typeSpeed:100,
    loop:true
});
// text effect end

// progress bar code sample start
// progress bar code sample end

// owl carousel code sample start
$(".carousel").owlCarousel({
    margin: 10,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    // dots:true,
    nav:true,
    responsive: {
      0:{
        items:1,
        nav: false
      },
      768:{
        items:2,
        nav: false
      },
      992:{
        items:3,
        nav: false
      }
    }
});
// owl carousel code sample end