$(".card-slide").slick({
//   infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      },
    },
    // {
    //   breakpoint: 1008,
    //   settings: {
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //   },
    // },
    // {
    //   breakpoint: 800,
    //   //   settings: "unslick",
    //   settings: {
    //     slidesToShow: 2,
    //     slidesToScroll: 1,
    //   },
    // },
  ],
});


function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}